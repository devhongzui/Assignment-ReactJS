<?php

use App\Http\Controllers\Actions\ChangeThemeController;
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
    Route::get('/', fn() => view('pages.home'))->name('home');

    Route::get('/contact', fn() => view('pages.contact'))->name('contact');

    Route::get('/about-me', fn() => view('pages.about-me'))->name('about-me');

    Route::get('/privacy-policy', fn() => view('pages.privacy-policy'))->name('privacy-policy');

    Route::get('/security-policy', fn() => view('pages.security-policy'))->name('security-policy');

});

Route::post('theme', [ChangeThemeController::class, 'store'])->name('theme');

require base_path('vendor/laravel/fortify/routes/routes.php');
require __DIR__ . '/web/auth.php';
