<?php

namespace App\Http\Controllers\Utility;

use Aerni\Spotify\Exceptions\SpotifyApiException;
use Aerni\Spotify\Exceptions\ValidatorException;
use App\Http\Controllers\Controller;
use Illuminate\View\View;
use Spotify;

class MusicController extends Controller
{
    /**
     * @return View
     * @throws SpotifyApiException
     * @throws ValidatorException
     */
    public function show(): View
    {
        $playlists = Spotify::featuredPlaylists()->limit(24)->get();
        $albums = Spotify::newReleases()->limit(50)->get();

        return view('music.welcome')->with([
            'web_title' => __('Surf Spotify music'),
            'web_description' => implode('. ', [
                __('Spotify provides a Music Search feature by diverse genres, from Pop, Rock, Hip-hop, EDM to many other genres'),
                __('Users can easily explore playlists and expand their music listening experience'),
                __('This feature not only helps users discover new music but also provides a diverse music listening space that suits personal preferences'),
            ]),
            'web_image' => asset('storage/images/undraw/Compose_music.png'),
            'playlist_name' => $playlists['message'],
            'playlists' => $playlists['playlists']['items'],
            'albums' => $albums['albums']['items'],
        ]);
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
     * @return View
     * @throws SpotifyApiException
     * @throws ValidatorException
     */
    public function artist(string $artist_id): View
    {
        $artist = Spotify::artist($artist_id)->get();
        $albums = Spotify::artistAlbums($artist_id)->limit(50)->get();
        $artists = Spotify::artistRelatedArtists($artist_id)->get();

        return view('music.artist')->with([
            'web_title' => $artist['name'],
            'web_description' => ucwords(implode(', ', $artist['genres'])) ?: __('N/A'),
            'web_image' => $artist['images'][0]['url'] ?? asset('logo.png'),
            'artist' => $artist,
            'albums' => $albums['items'],
            'artists' => $artists['artists'],
            'music_page' => true,
        ]);
    }
}
