<?php

namespace App\Http\Controllers\Utility;

use Aerni\Spotify\Exceptions\SpotifyApiException;
use Aerni\Spotify\Exceptions\ValidatorException;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Spotify;

class MusicController extends Controller
{
    /**
     * @param Request $request
     * @return View
     * @throws SpotifyApiException
     * @throws ValidatorException
     */
    public function show(Request $request): View
    {
        $limit = $request->get('limit', 50);
        if ($request->wantsJson()) {
            $offset = $request->get('offset', 0);

            switch ($request->get('type')) {
                case 'playlists':
                    $featured_playlists = Spotify::featuredPlaylists()->limit($limit)->offset($offset)->get();

                    return view('music.lazy.playlist')->with([
                        'playlists' => $featured_playlists['playlists'],
                        'route_name' => 'musics',
                        'route_id' => 'playlists',
                        'is_lazy' => true,
                    ]);
                case 'albums':
                    $new_releases = Spotify::newReleases()->limit($limit)->offset($offset)->get();

                    return view('music.lazy.album')->with([
                        'albums' => $new_releases['albums'],
                        'route_name' => 'musics',
                        'route_id' => 'albums',
                        'is_lazy' => true,
                    ]);
                default:
                    abort(404);
            }
        } else {
            $featured_playlists = Spotify::featuredPlaylists()->limit($limit)->get();
            $new_releases = Spotify::newReleases()->limit($limit)->get();

            return view('music.welcome')->with([
                'featured_playlists' => $featured_playlists,
                'new_releases' => $new_releases,
                'route_name' => 'musics',
                'music_page' => true,
            ]);
        }
    }
}
