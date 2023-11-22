<?php

namespace App\Http\Controllers\Utility;

use Illuminate\Support\Facades\Route;

Route::get('tools', [ToolController::class, 'show'])
    ->name('tools');
