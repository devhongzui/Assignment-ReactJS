@extends('layouts.web-app', [
    'web_title' => __('Welcome'),
    'web_image' => asset('storage/images/undraw/Welcome.png'),
])


@section('main')
    @vite('resources/js/pages/home.js')

    <div class="container">
        <div class="swiper rounded-2 mb-4">
            <div class="swiper-wrapper">
                @php
                    $images = [
                        (object) [
                            'alt' => __('Courses'),
                            'href' => asset('storage/images/undraw/Learning.png'),
                            'url' => route('courses'),
                        ],
                        (object) [
                            'alt' => __('Tools'),
                            'href' => asset('storage/images/undraw/Multitasking.png'),
                            'url' => route('tools'),
                        ],
                        (object) [
                            'alt' => __('Musics'),
                            'href' => asset('storage/images/undraw/Compose_music.png'),
                            'url' => route('musics'),
                        ],
                    ];
                @endphp
                @foreach ($images as $image)
                    <div class="swiper-slide">
                        <a href="{{ $image->url }}" role="link" aria-label="{{ $image->alt }}">
                            <img data-src="{{ $image->href }}" alt="{{ $image->alt }}"
                                 class="w-100 object-fit-contain bg-white" style="height: 200px">
                        </a>
                    </div>
                @endforeach
            </div>
        </div>

        <hr>
        <div class="text-center h4 fw-bold">@lang('Outstanding Channels')</div>
        <modal-lazy data-src="{{ route('channels') }}"></modal-lazy>

        <hr>
        <div class="text-center h4 fw-bold">@lang('Outstanding Lessons')</div>
        <modal-lazy data-src="{{ route('lessons') }}"></modal-lazy>

        <hr>
        <div class="text-center h4 fw-bold">@lang('Outstanding Subjects')</div>
        <modal-lazy data-src="{{ route('subjects') }}"></modal-lazy>

        <hr>
        <div class="text-center h4 fw-bold">@lang('Outstanding Courses')</div>
        <modal-lazy data-src="{{ route('courses') }}"></modal-lazy>
    </div>
@endsection
