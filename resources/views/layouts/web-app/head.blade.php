<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
    <title>{{ $web->title }}</title>
    <link rel="shortcut icon" href="{{ $web->short_icon }}" type="image/x-icon">
    <meta name="description" content="{{ $web->description }}">

    <meta property="og:url" content="{{ $web->url }}">
    <meta property="og:type" content="{{ $web->type }}">
    <meta property="og:title" content="{{ $web->title }}">
    <meta property="og:description" content="{{ $web->description }}">
    <meta property="og:image" content="{{ $web->image }}">
    <meta property="og:site-name" content="{{ $web->site_name }}">

    <meta property="twitter:url" content="{{ $web->url }}">
    <meta property="twitter:card" content="{{ $web->card }}">
    <meta property="twitter:title" content="{{ $web->title }}">
    <meta property="twitter:description" content="{{ $web->description }}">
    <meta property="twitter:image" content="{{ $web->image }}">

    @vite(['resources/js/app.js', 'resources/scss/app.scss'])

    @production @endproduction
</head>
