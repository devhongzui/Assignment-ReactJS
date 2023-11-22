<?php

namespace App\Http\Controllers\Utility;

use Illuminate\Support\Facades\Route;

Route::get('tools', [ToolController::class, 'show'])
    ->name('tools');

Route::get('tool/{tool_id}', [ToolController::class, 'detail'])
    ->name('tool');
