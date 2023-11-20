<?php

use Illuminate\Support\Facades\Route;

// --------------------------
// Custom Backpack Routes
// --------------------------
// This route file is loaded automatically by Backpack\Base.
// Routes you generate using Backpack\Generators will be placed here.

Route::group([
    'prefix' => config('backpack.base.route_prefix'),
    'middleware' => array_merge(
        (array)config('backpack.base.web_middleware'),
        (array)config('backpack.base.middleware_key')
    ),
    'namespace' => 'App\Http\Controllers\Admin',
], function () {
    Route::crud('course', 'CourseCrudController');
    Route::crud('subject', 'SubjectCrudController');
    Route::crud('lesson', 'LessonCrudController');
    Route::crud('channel', 'ChannelCrudController');
    Route::crud('thumbnail', 'ThumbnailCrudController');
});
