<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
use Laravel\Fortify\Http\Responses\LoginResponse;
use Laravel\Fortify\Http\Responses\LogoutResponse;
use Laravel\Fortify\Http\Responses\RegisterResponse;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            LoginResponse::class,
            \App\Http\Responses\Auth\LoginResponse::class
        );
        $this->app->bind(
            RegisterResponse::class,
            \App\Http\Responses\Auth\RegisterResponse::class
        );
        $this->app->bind(
            LogoutResponse::class,
            \App\Http\Responses\Auth\LogoutResponse::class
        );
        $this->app->bind(
            PasswordResetLinkController::class,
            \App\Http\Controllers\Auth\PasswordResetLinkController::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Fortify::viewPrefix('auth.');

        Fortify::loginView(
            fn(Request $request): View => $request->ajax()
                ? view('auth.lazy.login')
                : view('auth.login')->with('login_page', true)
        );

        Fortify::registerView(
            fn(Request $request): View => $request->ajax()
                ? view('auth.lazy.register')
                : view('auth.register')->with('register_page', true)
        );

        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())) . '|' . $request->ip());

            return Limit::perMinute(5)->by($throttleKey);
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}
