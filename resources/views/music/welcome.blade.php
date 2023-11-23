@extends('layouts.web-app')

@section('main')
    @vite('resources/js/music/welcome.js')

    <div class="container">
        @include('music.lazy.slider', [
            'items' => $playlists,
            'route' => 'playlist',
        ])

        <hr>
        <div class="text-center h4 fw-bold">@lang($playlist_name)</div>
        @include('music.lazy.playlist')

        <hr>
        <div class="text-center h4 fw-bold">@lang('Albums')</div>
        @include('music.lazy.album')
    </div>
@endsection
