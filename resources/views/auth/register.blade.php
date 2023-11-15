@extends('templates.form')

@php
    $web_title = __('Register');
    $web_image = asset('storage/images/undraw/Sign_up.png');
    $register_page = true;
@endphp

@section('right-content')
    @include('auth.lazy.register')
@endsection
