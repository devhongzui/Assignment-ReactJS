<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Laravel\Fortify\Http\Controllers\NewPasswordController;
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
use Laravel\Fortify\RoutePath;

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

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('change-password', fn() => view('auth.change-password'))
        ->name('user-password.request');
});

Route::get('auth/redirect/{provider}', [OpenAuthController::class, 'redirect'])
    ->name('oauth.redirect');

Route::get('auth/callback/{provider}', [OpenAuthController::class, 'callback'])
    ->name('oauth.callback');
