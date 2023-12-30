<?php

namespace App\Http\Controllers\Api\Heath;

use Illuminate\Support\Facades\Route;

Route::prefix('heath')->group(function () {
    Route::apiResource('patient', PatientController::class)
        ->only('index', 'show');
});
