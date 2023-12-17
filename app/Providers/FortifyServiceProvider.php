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
use Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable;
use Laravel\Fortify\Contracts\PasswordResetResponse;
use Laravel\Fortify\Contracts\SuccessfulPasswordResetLinkRequestResponse;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController;
use Laravel\Fortify\Http\Controllers\NewPasswordController;
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
use Laravel\Fortify\Http\Responses\EmailVerificationNotificationSentResponse;
use Laravel\Fortify\Http\Responses\FailedPasswordResetLinkRequestResponse;
use Laravel\Fortify\Http\Responses\FailedPasswordResetResponse;
use Laravel\Fortify\Http\Responses\LoginResponse;
use Laravel\Fortify\Http\Responses\LogoutResponse;
use Laravel\Fortify\Http\Responses\PasswordConfirmedResponse;
use Laravel\Fortify\Http\Responses\PasswordUpdateResponse;
use Laravel\Fortify\Http\Responses\ProfileInformationUpdatedResponse;
use Laravel\Fortify\Http\Responses\RegisterResponse;
use Laravel\Fortify\Http\Responses\TwoFactorConfirmedResponse;
use Laravel\Fortify\Http\Responses\TwoFactorDisabledResponse;
use Laravel\Fortify\Http\Responses\TwoFactorEnabledResponse;
use Laravel\Fortify\Http\Responses\TwoFactorLoginResponse;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Fortify::ignoreRoutes();

        // Actions
        $this->app->bind(
            RedirectIfTwoFactorAuthenticatable::class,
            \App\Actions\Fortify\RedirectIfTwoFactorAuthenticatable::class
        );

        // Responses
        $this->app->bind(
            EmailVerificationNotificationSentResponse::class,
            \App\Http\Responses\Auth\EmailVerificationNotificationSentResponse::class
        );
        $this->app->bind(
            FailedPasswordResetLinkRequestResponse::class,
            \App\Http\Responses\Auth\FailedPasswordResetLinkRequestResponse::class
        );
        $this->app->bind(
            FailedPasswordResetResponse::class,
            \App\Http\Responses\Auth\FailedPasswordResetResponse::class
        );
        $this->app->bind(
            LoginResponse::class,
            \App\Http\Responses\Auth\LoginResponse::class
        );
        $this->app->bind(
            LogoutResponse::class,
            \App\Http\Responses\Auth\LogoutResponse::class
        );
        $this->app->bind(
            PasswordConfirmedResponse::class,
            \App\Http\Responses\Auth\PasswordConfirmedResponse::class
        );
        $this->app->bind(
            PasswordResetResponse::class,
            \App\Http\Responses\Auth\PasswordResetResponse::class
        );
        $this->app->bind(
            PasswordUpdateResponse::class,
            \App\Http\Responses\Auth\PasswordUpdateResponse::class
        );
        $this->app->bind(
            RegisterResponse::class,
            \App\Http\Responses\Auth\RegisterResponse::class
        );
        $this->app->bind(
            SuccessfulPasswordResetLinkRequestResponse::class,
            \App\Http\Responses\Auth\SuccessfulPasswordResetLinkRequestResponse::class
        );
        $this->app->bind(
            TwoFactorLoginResponse::class,
            \App\Http\Responses\Auth\TwoFactorLoginResponse::class
        );

        $this->app->bind(
            ProfileInformationUpdatedResponse::class,
            \App\Http\Responses\Profile\ProfileInformationUpdatedResponse::class
        );
        $this->app->bind(
            TwoFactorConfirmedResponse::class,
            \App\Http\Responses\Profile\TwoFactorConfirmedResponse::class
        );
        $this->app->bind(
            TwoFactorDisabledResponse::class,
            \App\Http\Responses\Profile\TwoFactorDisabledResponse::class
        );
        $this->app->bind(
            TwoFactorEnabledResponse::class,
            \App\Http\Responses\Profile\TwoFactorEnabledResponse::class
        );

        // Controllers
        $this->app->bind(
            EmailVerificationNotificationController::class,
            \App\Http\Controllers\Auth\EmailVerificationNotificationController::class
        );
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
        Fortify::registerView('layouts.app');
        Fortify::requestPasswordResetLinkView('layouts.app');
        Fortify::resetPasswordView('layouts.app');
        Fortify::verifyEmailView('layouts.app');
        Fortify::confirmPasswordView('layouts.app');

        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())) . '|' . $request->ip());

            return Limit::perMinute(5)->by($throttleKey);
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}
