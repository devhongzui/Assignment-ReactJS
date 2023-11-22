<?php

namespace App\Http\Controllers\Utility;

use Illuminate\Support\Facades\Route;

Route::get('tools', [ToolController::class, 'show'])
    ->name('tools');

Route::get('tool/{tool_id}', [ToolController::class, 'detail'])
    ->name('tool');

Route::get('musics', [MusicController::class, 'show'])
    ->name('musics');

Route::get('album/{album_id}', [MusicController::class, 'album'])
    ->name('album');

Route::get('playlist/{playlist_id}', [MusicController::class, 'playlist'])
    ->name('playlist');

Route::get('artist/{artist_id}', [MusicController::class, 'artist'])
    ->name('artist');
