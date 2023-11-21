<?php

namespace App\Http\Controllers\Study;

use Illuminate\Support\Facades\Route;

Route::get('courses', [CourseController::class, 'show'])
    ->name('courses');
