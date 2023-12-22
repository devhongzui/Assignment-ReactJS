<?php

namespace App\Http\Controllers\Api\Study;

use Illuminate\Support\Facades\Route;

Route::prefix('study')->group(function () {
    Route::apiResource('courses', CourseController::class)
        ->only('index', 'show');
});
