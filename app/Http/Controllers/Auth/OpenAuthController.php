<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\OpenAuth;
use App\Models\User as SystemUser;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Laravel\Socialite\Contracts\User as ProviderUser;
use Laravel\Socialite\Facades\Socialite;

class OpenAuthController extends Controller
{
    /**
     * @var string
     */
    protected string $provider_email;

    /**
     * @var int
     */
    protected int $provider_code;

    /**
     * @param string $provider
     * @return RedirectResponse
     */
    public function redirect(string $provider): RedirectResponse
    {
        session(['previous_url_before_oauth' => url()->previous()]);

        return Socialite::driver($provider)->redirect();
    }

    /**
     * @param string $provider
     * @return RedirectResponse
     */
    public function callback(string $provider): RedirectResponse
    {
        $this->provider_code = OpenAuth::getServiceCode($provider);
        $provider_user = $this->getProviderUser($provider);
        $system_user = $this->getSystemUser($provider_user->getId());

        if (auth()->check())
            $this->confirmPassword();
        else empty($system_user)
            ? $this->register($provider_user)
            : $this->login($provider_user, $system_user);

        return redirect(
            session('previous_url_before_oauth', RouteServiceProvider::HOME)
        );
    }

    protected function getProviderUser(string $provider): ProviderUser
    {
        $provider_user = Socialite::driver($provider)->user();

        $this->provider_email = $provider_user->getEmail() ?? "{$provider_user->getId()}@$provider.oauth";

        return $provider_user;
    }

    /**
     * @param string $provider_id
     * @return SystemUser|null
     */
    protected function getSystemUser(string $provider_id): SystemUser|null
    {
        $user = app(SystemUser::class)->getTable();
        $open_auth = app(OpenAuth::class)->getTable();
        return SystemUser::where("$user.email", $this->provider_email)
            ->orWhere(fn(Builder $query) => $query
                ->where("$open_auth.provider_code", $this->provider_code)
                ->where("$open_auth.provider_id", $provider_id))
            ->join($open_auth, "$open_auth.user_id", '=', "$user.id", 'left')
            ->select("$user.*")
            ->withTrashed()
            ->first();
    }

    protected function confirmPassword()
    {
        session()->put('auth.password_confirmed_at', time());
    }

    /**
     * @param ProviderUser $provider_user
     */
    protected function register(ProviderUser $provider_user): void
    {
        $user = SystemUser::create([
            'email' => $this->provider_email,
            'email_verified_at' => Carbon::now(),
            'name' => $provider_user->getName(),
            'avatar' => $provider_user->getAvatar(),
        ]);

        event(new Registered($user));

        OpenAuth::create([
            'user_id' => $user->id,
            "provider_code" => $this->provider_code,
            "provider_id" => $provider_user->getId(),
            "token" => encrypt($provider_user->__get('token')),
            "refresh_token" => encrypt($provider_user->__get('refreshToken')),
        ]);

        auth()->login($user, true);
    }

    /**
     * @param ProviderUser $provider_user
     * @param SystemUser $system_user
     */
    protected function login(ProviderUser $provider_user, SystemUser $system_user): void
    {
        if ($system_user->trashed())
            $system_user->restore();

        $system_user->update(['avatar' => $provider_user->getAvatar()]);

        OpenAuth::updateOrCreate([
            "provider_id" => $provider_user->getId(),
        ], [
            'user_id' => $system_user->id,
            "provider_code" => $this->provider_code,
            "token" => encrypt($provider_user->__get('token')),
            "refresh_token" => encrypt($provider_user->__get('refreshToken')),
        ]);

        if (
            $system_user->email === $this->provider_email &&
            !$system_user->hasVerifiedEmail()
        )
            $system_user->markEmailAsVerified();

        auth()->login($system_user, true);

        request()->session()->regenerate();
    }
}
