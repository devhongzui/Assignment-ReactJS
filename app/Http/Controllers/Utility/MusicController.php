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
        $limit = $request->get('limit', 15);
        if ($request->wantsJson()) {
            $offset = $request->get('offset', 0);

            switch ($request->get('type')) {
                case 'playlists':
                    $featured_playlists = Spotify::featuredPlaylists()->limit($limit)->offset($offset)->get();

                    return view('music.lazy.playlist')->with([
                        'playlists' => $featured_playlists['playlists'],
                        'route_name' => 'musics',
                        'route_id' => null,
                        'route_type' => 'playlists',
                        'is_lazy' => true,
                    ]);
                case 'albums':
                    $new_releases = Spotify::newReleases()->limit($limit)->offset($offset)->get();

                    return view('music.lazy.album')->with([
                        'albums' => $new_releases['albums'],
                        'route_name' => 'musics',
                        'route_id' => null,
                        'route_type' => 'albums',
                        'is_lazy' => true,
                    ]);
                default:
                    abort(404);
            }
        } else {
            $featured_playlists = Spotify::featuredPlaylists()->limit($limit)->get();
            $new_releases = Spotify::newReleases()->limit($limit)->get();

            return view('music.welcome')->with([
                'web_title' => __('Surf Spotify music'),
                'web_description' => implode('. ', [
                    __('Spotify provides a Music Search feature by diverse genres, from Pop, Rock, Hip-hop, EDM to many other genres'),
                    __('Users can easily explore playlists and expand their music listening experience'),
                    __('This feature not only helps users discover new music but also provides a diverse music listening space that suits personal preferences'),
                ]),
                'web_image' => asset('storage/images/undraw/Compose_music.png'),
                'featured_playlists' => $featured_playlists,
                'new_releases' => $new_releases,
                'route_name' => 'musics',
                'route_id' => null,
                'music_page' => true,
            ]);
        }
    }

    /**
     * @param string $album_id
     * @return View
     * @throws SpotifyApiException
     */
    public function album(string $album_id): View
    {
        $album = Spotify::album($album_id)->get();

        return view('music.album')->with([
            'web_title' => $album['name'],
            'web_description' => $album['label'],
            'web_image' => $album['images'][0]['url'],
            'album' => $album,
            'route_name' => 'album',
            'music_page' => true,
        ]);
    }

    /**
     * @param string $playlist_id
     * @return View
     * @throws SpotifyApiException
     */
    public function playlist(string $playlist_id): View
    {
        $playlist = Spotify::playlist($playlist_id)->get();

        return view('music.playlist')->with([
            'web_title' => $playlist['name'],
            'web_description' => $playlist['description'],
            'web_image' => $playlist['images'][0]['url'],
            'playlist' => $playlist,
            'route_name' => 'playlist',
            'music_page' => true,
        ]);
    }

    /**
     * @param string $artist_id
     * @param Request $request
     * @return View
     * @throws SpotifyApiException
     * @throws ValidatorException
     */
    public function artist(string $artist_id, Request $request): View
    {
        $limit = $request->get('limit', 15);
        if ($request->wantsJson()) {
            $offset = $request->get('offset', 0);
            $artist_albums = Spotify::artistAlbums($artist_id)->limit($limit)->offset($offset)->get();

            return view('music.lazy.album')->with([
                'albums' => $artist_albums,
                'route_name' => 'artist',
                'route_id' => $artist_id,
                'route_type' => null,
                'is_lazy' => true,
            ]);
        } else {
            $artist = Spotify::artist($artist_id)->get();
            $artist_albums = Spotify::artistAlbums($artist_id)->limit($limit)->get();
            $artist_related_artists = Spotify::artistRelatedArtists($artist_id)->get();

            return view('music.artist')->with([
                'web_title' => $artist['name'],
                'web_description' => ucwords(implode(', ', $artist['genres'])) ?: __('N/A'),
                'web_image' => $artist['images'][0]['url'] ?? asset('logo.png'),
                'artist' => $artist,
                'albums' => $artist_albums,
                'artist_related_artists' => $artist_related_artists,
                'route_name' => 'artist',
                'route_id' => $artist['id'],
                'route_type' => null,
                'music_page' => true,
            ]);
        }
    }
}
