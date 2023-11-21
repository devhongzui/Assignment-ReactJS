@extends('layouts.web-app')

@section('main')
    <div class="container">
        <div class="row mb-3">
            <div class="col-xl-4 d-none d-xl-flex align-items-center">
                <img data-src="{{ $web_image }}" alt="{{ $web_title }}" class="rounded-3 img-fluid object-fit-contain">
            </div>

            <div class="col-12 col-xl-8">
                <h2 class="text-center my-4">{{ $web_title }}</h2>

                @yield('right-content')
            </div>
        </div>
    </div>
@endsection
