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
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Controllers\NewPasswordController;
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
use Laravel\Fortify\Http\Responses\TwoFactorEnabledResponse;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Fortify::ignoreRoutes();

        // Responses
        $this->app->bind(
            TwoFactorEnabledResponse::class,
            \App\Http\Responses\Profile\TwoFactorEnabledResponse::class
        );

        // Controllers
        $this->app->bind(
            NewPasswordController::class,
            \App\Http\Controllers\Auth\NewPasswordController::class
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
        Fortify::loginView('layouts.app');
        Fortify::twoFactorChallengeView('layouts.app');
        Fortify::registerView('layouts.app');
        Fortify::requestPasswordResetLinkView('layouts.app');
        Fortify::resetPasswordView('layouts.app');
        Fortify::verifyEmailView('layouts.app');
        Fortify::confirmPasswordView('layouts.app');

        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);

        RateLimiter::for('login', fn(Request $request) => Limit::perMinute(5)->by(
            Str::transliterate(
                Str::lower(
                    $request->input(Fortify::username())) . '|' . $request->ip()
            )));

        RateLimiter::for('two-factor', fn(Request $request) => Limit::perMinute(5)->by(
            $request->session()->get('login.id')
        ));
    }
}
