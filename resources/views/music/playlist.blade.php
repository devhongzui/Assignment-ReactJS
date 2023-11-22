@extends('layouts.web-app')

@section('main')
    <div class="container">
        <x-page.detail :link="$playlist['external_urls']['spotify']"
                       :image="(object) ['data_src' => $web_image, 'class' => 'object-fit-cover']"
                       :sub-title="__('Playlist')" :title="$web_title" :description="$web_description"
                       :pills="[
                (object) [
                    'class' => 'bg-primary',
                    'description' => $playlist['owner']['display_name'],
                ],
                (object) [
                    'class' => 'bg-secondary',
                    'description' => __(':number followers', [
                        'number' => number_format($playlist['followers']['total']),
                    ]),
                ],
            ]" />

        @include('music.lazy.track', [
            'items' => $playlist['tracks']['items'],
            'playlist_page' => true,
        ])
    </div>
@endsection
