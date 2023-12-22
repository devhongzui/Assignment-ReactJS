<?php

namespace App\Http\Controllers\Study;

use Illuminate\Support\Facades\Route;

Route::middleware('verified')->group(function () {
    Route::get('courses', fn() => view('layouts.app'))
        ->name('courses');

    Route::get('course/{course_id}', [CourseController::class, 'subjects'])
        ->name('course');

    Route::get('subjects', [SubjectController::class, 'show'])
        ->name('subjects');

    Route::get('subject/{subject_id}', [SubjectController::class, 'lessons'])
        ->name('subject');

    Route::get('channels', [ChannelController::class, 'show'])
        ->name('channels');

    Route::get('channel/{channel_id}', [ChannelController::class, 'detail'])
        ->name('channel');

    Route::get('lessons', [LessonController::class, 'show'])
        ->name('lessons');

    Route::get('lesson/{lesson_id}', [LessonController::class, 'detail'])
        ->name('lesson');
});
