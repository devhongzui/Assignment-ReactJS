@extends('layouts.web-app')

@section('main')
    @vite('resources/js/music/welcome.js')

    <div class="container">
        <div class="swiper rounded-2 mb-4">
            <div class="swiper-wrapper">
                @foreach ($featured_playlists['playlists']['items'] as $playlist)
                    <div class="swiper-slide">
                        <a href="{{ $playlist['external_urls']['spotify'] }}" role="link"
                           aria-label="{{ $playlist['name'] }}">
                            <img data-src="{{ $playlist['images'][0]['url'] }}" alt="{{ $playlist['name'] }}"
                                 class="w-100 object-fit-contain" style="height: 200px">
                        </a>
                    </div>
                @endforeach
            </div>
        </div>

        <hr>
        <div class="text-center h4 fw-bold">@lang($featured_playlists['message'])</div>
        @include('music.lazy.playlist', [
            'playlists' => $featured_playlists['playlists'],
            'route_id' => 'playlists',
        ])

        <hr>
        <div class="text-center h4 fw-bold">@lang('Albums')</div>
        @include('music.lazy.album', [
            'albums' => $new_releases['albums'],
            'route_id' => 'albums',
        ])
    </div>
@endsection
