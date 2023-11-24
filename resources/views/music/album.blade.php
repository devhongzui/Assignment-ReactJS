@extends('layouts.web-app')

@section('main')
    <div class="container">
        <x-page.detail :link="$album['external_urls']['spotify']"
                       :image="(object) ['data_src' => $web_image, 'class' => 'object-fit-cover']"
                       :sub-title="__('Album')" :title="$web_title" :description="$web_description"
                       :pills="[
                (object) [
                    'class' => 'bg-primary',
                    'description' => implode(', ', array_column($album['artists'], 'name')),
                ],
                (object) [
                    'class' => 'bg-secondary',
                    'description' => __('Publish at :time', ['time' => $album['release_date']]),
                ],
            ]" />

        @include('music.lazy.track', [
            'tracks' => $album['tracks']['items'],
        ])
    </div>
@endsection
