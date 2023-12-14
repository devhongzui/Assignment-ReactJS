<!doctype html>
<html lang="{{ LaravelLocalization::getCurrentLocale() }}" data-bs-theme="dark">

<head>
    @php
        $web = (object) [
            'title' => config('app.name'),
            'description' => implode('. ', [
                0 => __('Collection of tools and APIs to support programming for IT students in Vietnam'),
                __('Explore rich resources and diverse utilities to develop your programming skills'),
                __('Find out now!'),
            ]),
            'image' => asset('logo.png'),
            'url' => url()->full(),
        ];
    @endphp
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
    <title>{{ $web->title }}</title>
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <meta name="description" content="{{ $web->description }}">

    <meta property="og:url" content="{{ $web->url }}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ $web->title }}">
    <meta property="og:description" content="{{ $web->description }}">
    <meta property="og:image" content="{{ $web->image }}">
    <meta property="og:site-name" content="{{ $web->title }}">

    <meta property="twitter:url" content="{{ $web->url }}">
    <meta property="twitter:card" content="summary">
    <meta property="twitter:title" content="{{ $web->title }}">
    <meta property="twitter:description" content="{{ $web->description }}">
    <meta property="twitter:image" content="{{ $web->image }}">

    @viteReactRefresh
    @vite('resources/js/main.jsx')

    @production
        <script async src="https://www.googletagmanager.com/gtag/js?id={{ config('services.google_tag.id') }}"></script>
        @vite('resources/js/gtag.js')
    @endproduction
</head>

<body>
<div id="root" data-is_login="@guest false @else true @endguest"></div>
</body>

</html>
