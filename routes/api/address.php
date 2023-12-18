<?php

namespace App\Http\Controllers\Api\Address;

use Illuminate\Support\Facades\Route;

Route::prefix('address')->group(function () {
    Route::apiResource('provinces', ProvinceController::class)
        ->only('index', 'show');

    Route::apiResource('districts', DistrictController::class)
        ->only('index', 'show');

    Route::apiResource('sub_districts', SubDistrictController::class)
        ->only('index', 'show');
});
