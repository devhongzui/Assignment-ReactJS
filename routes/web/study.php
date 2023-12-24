<?php

namespace App\Http\Controllers\Study;

use Illuminate\Support\Facades\Route;

Route::middleware('verified')->group(function () {
    Route::get('courses', fn() => view('layouts.app'))
        ->name('courses');

    Route::get('course/{course_id}', fn() => view('layouts.app'))
        ->name('course');

    Route::get('subject/{subject_id}', fn() => view('layouts.app'))
        ->name('subject');

    Route::get('lesson/{lesson_id}', fn() => view('layouts.app'))
        ->name('lesson');

    Route::get('channel/{channel_id}', fn() => view('layouts.app'))
        ->name('channel');
});
