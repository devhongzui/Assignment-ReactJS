<?php

namespace App\Http\Controllers\Study;

use Illuminate\Support\Facades\Route;

Route::middleware('verified')->group(function () {
    Route::get('courses', [CourseController::class, 'show'])
        ->name('courses');

    Route::get('course/{course_id}', [CourseController::class, 'subjects'])
        ->name('course');

    Route::get('subject/{subject_id}', [SubjectController::class, 'lessons'])
        ->name('subject');

    Route::get('channel/{channel_id}', [ChannelController::class, 'detail'])
        ->name('channel');

    Route::get('lesson/{lesson_id}', [LessonController::class, 'detail'])
        ->name('lesson');
});
