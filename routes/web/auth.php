<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Laravel\Fortify\Http\Controllers\NewPasswordController;
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
use Laravel\Fortify\RoutePath;

require base_path('vendor/laravel/fortify/routes/routes.php');

Route::group(['middleware' => config('fortify.middleware', ['web'])], function () {
    $enableViews = config('fortify.views', true);

    // Password Reset...
    if (Features::enabled(Features::resetPasswords())) {
        if ($enableViews) {
            Route::get(RoutePath::for('password.request', '/forgot-password'), [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

            Route::get(RoutePath::for('password.reset', '/reset-password/{token}'), [NewPasswordController::class, 'create'])
                ->name('password.reset');
        }

        Route::post(RoutePath::for('password.email', '/forgot-password'), [PasswordResetLinkController::class, 'store'])
            ->name('password.email');

        Route::post(RoutePath::for('password.update', '/reset-password'), [NewPasswordController::class, 'store'])
            ->name('password.update');
    }
});

Route::get('user/change-password', fn() => view('layouts.app'))
    ->middleware(['auth', 'verified', 'password.confirm'])
    ->name('user-password.request');

Route::prefix('auth')->group(function () {
    Route::get('redirect/{provider}', [OAuthController::class, 'redirect'])
        ->name('oauth.redirect');

    Route::get('callback/{provider}', [OAuthController::class, 'callback'])
        ->name('oauth.callback');
});
