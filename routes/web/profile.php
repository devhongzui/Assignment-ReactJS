<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', fn() => redirect()->route('home'))
        ->name('dashboard');

    Route::get('profile-detail', fn() => view('profile.detail'))
        ->name('user-profile-information.request');

    Route::get('profile-edit', fn() => view('profile.edit'))
        ->name('user-profile-information.edit');

    Route::delete('profile-destroy', [ProfileController::class, 'destroy'])
        ->middleware('password.confirm')
        ->name('user-profile-information.destroy');

    Route::get('profile-two-step-authentication', fn() => view('profile.two-step-authentication'))
        ->name('user-profile-information.two-step-authentication');
});
