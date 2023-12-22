<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])
    ->prefix('user')
    ->group(function () {
        Route::get('/', fn(Request $request) => $request->user());
        Route::get('social', fn(Request $request) => $request->user()->socials);
    });

require __DIR__ . '/api/address.php';
require __DIR__ . '/api/study.php';
