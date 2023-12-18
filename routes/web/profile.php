<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->prefix('user')->group(function () {
    Route::get('dashboard', fn() => redirect()->route('home'))
        ->name('dashboard');

    Route::get('detail', fn() => view('layouts.app'))
        ->name('user-profile-information.request');

    Route::get('edit', fn() => view('layouts.app'))
        ->name('user-profile-information.edit');

    Route::delete('destroy', [ProfileController::class, 'destroy'])
        ->middleware('password.confirm')
        ->name('user-profile-information.destroy');

    Route::get('two-step-authentication', fn() => view('layouts.app'))
        ->name('user-profile-information.two-step-authentication');
});
