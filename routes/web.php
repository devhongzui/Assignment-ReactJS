<?php

use App\Http\Controllers\Actions\ChangeThemeController;
use App\Http\Controllers\SearchController;
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
    Route::name('home')
        ->get('/', fn() => view('layouts.app'));

    Route::name('contact')
        ->get('contact', fn() => view('layouts.app'));

    Route::name('about-me')
        ->get('about-me', fn() => view('layouts.app'));

    Route::name('privacy-policy')
        ->get('privacy-policy', fn() => view('layouts.app'));

    Route::name('security-policy')
        ->get('security-policy', fn() => view('layouts.app'));
});

Route::get('search', fn() => view('pages.search-bar'))
    ->name('search');

Route::get('search/{query}', [SearchController::class, 'show'])
    ->name('search.show');

Route::post('theme', [ChangeThemeController::class, 'store'])
    ->name('theme');

require base_path('vendor/laravel/fortify/routes/routes.php');
require __DIR__ . '/web/auth.php';
require __DIR__ . '/web/profile.php';
require __DIR__ . '/web/study.php';
require __DIR__ . '/web/utility.php';
