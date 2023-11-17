<?php

use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('profile-detail', fn() => view('profile.detail'))
        ->name('user-profile-information.request');

    Route::get('profile-edit', fn() => view('profile.edit'))
        ->name('user-profile-information.edit');
});
