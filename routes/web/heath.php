<?php

use Illuminate\Support\Facades\Route;

Route::middleware('verified')->group(function () {
    Route::get('patients', fn() => view('layouts.app'))
        ->name('patients');
});
