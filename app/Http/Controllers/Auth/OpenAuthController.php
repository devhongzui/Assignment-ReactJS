<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\OpenAuth;
use App\Models\User as SystemUser;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Laravel\Socialite\Contracts\User as ProviderUser;
use Laravel\Socialite\Facades\Socialite;

class OpenAuthController extends Controller
{
    /**
     * @param string $provider
     * @param Request $request
     * @return RedirectResponse
     */
    public function redirect(string $provider, Request $request): RedirectResponse
    {
        $request->session()->put(
            ['previous_url_before_oauth' => url()->previous()]
        );

        return Socialite::driver($provider)->redirect();
    }

    /**
     * @param string $provider
     * @param Request $request
     * @return RedirectResponse
     */
    public function callback(string $provider, Request $request): RedirectResponse
    {
        $provider_code = OpenAuth::getServiceCode($provider);
        $provider_user = Socialite::driver($provider)->user();

        if (auth()->check()) {
            $this->handleAuth($provider_user, auth()->user());
        } else {
            $system_user = SystemUser::getUserByOpenAuth($provider_code, $provider_user);

            empty($system_user)
                ? $this->register($provider_code, $provider_user)
                : $this->login($provider_code, $provider_user, $system_user);
        }

        return redirect(
            $request->session()->get('previous_url_before_oauth', RouteServiceProvider::HOME)
        );
    }

    /**
     * @param ProviderUser $provider_user
     * @param SystemUser $system_user
     * @return void
     */
    protected function handleAuth(ProviderUser $provider_user, SystemUser $system_user): void
    {
        if (auth()->user()->email === $provider_user->getEmail()) {
            session()->put('auth.password_confirmed_at', time());

            if (!$system_user->hasVerifiedEmail())
                $system_user->markEmailAsVerified();
        }
    }

    /**
     * @param int $provider_code
     * @param ProviderUser $provider_user
     */
    protected function register(int $provider_code, ProviderUser $provider_user): void
    {
        $user = SystemUser::create([
            'email' => $provider_user->getEmail(),
            'email_verified_at' => Carbon::now(),
            'password' => bcrypt(Str::password()),
            'name' => $provider_user->getName(),
            'avatar' => $provider_user->getAvatar(),
        ]);

        event(new Registered($user));

        OpenAuth::create([
            'user_id' => $user->id,
            "provider_code" => $provider_code,
            "provider_id" => $provider_user->getId(),
            "token" => encrypt($provider_user->__get('token')),
            "refresh_token" => encrypt($provider_user->__get('refreshToken')),
        ]);

        auth()->login($user, true);
    }

    /**
     * @param int $provider_code
     * @param ProviderUser $provider_user
     * @param SystemUser $system_user
     */
    protected function login(int $provider_code, ProviderUser $provider_user, SystemUser $system_user): void
    {
        if ($system_user->trashed())
            $system_user->restore();

        $system_user->update(['avatar' => $provider_user->getAvatar()]);

        OpenAuth::updateOrCreate([
            "provider_id" => $provider_user->getId(),
        ], [
            'user_id' => $system_user->id,
            "provider_code" => $provider_code,
            "token" => encrypt($provider_user->__get('token')),
            "refresh_token" => encrypt($provider_user->__get('refreshToken')),
        ]);

        if (
            $system_user->email === $provider_user->getEmail() &&
            !$system_user->hasVerifiedEmail()
        )
            $system_user->markEmailAsVerified();

        auth()->login($system_user, true);

        request()->session()->regenerate();
    }
}
