<!doctype html>
@php
    $web = (object) [
        'lang' => config('app.locale'),
        'theme' => session('data-bs-theme', 'dark'),
        'title' => $web_title ?? config('app.name'),
        'short_icon' => asset('favicon.ico'),
        'description' =>
            $web_description ??
            implode('. ', [
                0 => __('devhongzui.com - Collection of tools and APIs to support programming for IT students in Vietnam'),
                __('Explore rich resources and diverse utilities to develop your programming skills'),
                __('Find out now!'),
            ]),
        'url' => url()->full(),
        'type' => 'website',
        'image' => $web_image ?? asset('logo.png'),
        'site_name' => config('app.name'),
        'site_name_html' => config('app.name_html'),
        'card' => 'summary',
    ];
@endphp
<html lang="{{ $web->lang }}" data-bs-theme="{{ $web->theme }}">

@include('layouts.web-app.head')

<body>
@include('layouts.web-app.body.header')
<main style="min-height: 600px">
    @yield('main')

    @include('layouts.web-app.body.main.toast')
    @include('layouts.web-app.body.main.modals')
    @include('layouts.web-app.body.main.spinner')
</main>
@include('layouts.web-app.body.footer')
</body>

</html>
