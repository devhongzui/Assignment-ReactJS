@extends('layouts.web-app')

@php
    $web_title = __('About me');
    $web_image = asset('storage/images/freepik/7055190.jpg');
    $about_me_page = true;
@endphp

@section('main')
    <div class="container">
        <h2 class="my-4 text-center">{{ $web_title }}</h2>

        @include('pages.about-me.general')

        @include('pages.about-me.information')

        @include('pages.about-me.project')

        @include('pages.about-me.business')

        @include('pages.about-me.technology')

        @include('pages.about-me.skill')
    </div>
@endsection
