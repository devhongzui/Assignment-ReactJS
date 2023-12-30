<?php

use Illuminate\Support\Facades\Route;

Route::middleware('verified')->group(function () {
    Route::get('patients', fn() => view('layouts.app'))
        ->name('patients');

    Route::get('patient/{patient_id}', fn() => view('layouts.app'))
        ->name('patient');
});
