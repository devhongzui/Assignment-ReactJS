<?php

namespace App\Http\Controllers\Api\Study;

use Illuminate\Support\Facades\Route;

Route::prefix('study')->group(function () {
    Route::apiResource('course', CourseController::class)
        ->only('index', 'show');

    Route::apiResource('subject', SubjectController::class)
        ->only('index', 'show');

    Route::apiResource('lesson', LessonController::class)
        ->only('index', 'show');
});
