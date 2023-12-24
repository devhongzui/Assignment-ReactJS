<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('verified')->group(function () {
    Route::get('/', fn() => view('layouts.app'))
        ->name('home');

    Route::get('contact', fn() => view('layouts.app'))
        ->name('contact');

    Route::get('about-me', fn() => view('layouts.app'))
        ->name('about-me');

    Route::get('privacy-policy', fn() => view('layouts.app'))
        ->name('privacy-policy');

    Route::get('security-policy', fn() => view('layouts.app'))
        ->name('security-policy');
});

require base_path('vendor/laravel/fortify/routes/routes.php');
require __DIR__ . '/web/auth.php';
require __DIR__ . '/web/profile.php';
require __DIR__ . '/web/study.php';
require __DIR__ . '/web/utility.php';
