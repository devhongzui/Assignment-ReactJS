@extends('layouts.web-app')

@section('main')
    @vite('resources/js/music/artist.js')

    <div class="container">
        <x-page.detail :link="$artist['external_urls']['spotify']"
                       :image="(object) ['data_src' => $web_image, 'class' => 'object-fit-cover']"
                       :sub-title="__('Artist')" :title="$web_title" :description="$web_description"
                       :pills="[
                (object) [
                    'class' => 'bg-primary',
                    'description' => __('Top :number', ['number' => number_format($artist['popularity'])]),
                ],
                (object) [
                    'class' => 'bg-secondary',
                    'description' => __(':number followers', [
                        'number' => number_format($artist['followers']['total']),
                    ]),
                ],
            ]" />

        <hr>
        <div class="text-center h4 fw-bold">@lang('Albums from :name', ['name' => $web_title])</div>
        @include('music.lazy.album')

        <hr>
        <div class="text-center h4 fw-bold">@lang('Related Artists')</div>
        <div class="swiper mb-3">
            <div class="swiper-wrapper">
                @foreach ($artist_related_artists['artists'] as $artist)
                    <div class="swiper-slide">
                        <a href="{{ route('artist', $artist['id']) }}" role="link" aria-label="{{ $artist['name'] }}">
                            <img data-src="{{ $artist['images'][0]['url'] }}" alt="{{ $artist['name'] }}"
                                 class="w-100 object-fit-contain" style="height: 200px">
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endsection
