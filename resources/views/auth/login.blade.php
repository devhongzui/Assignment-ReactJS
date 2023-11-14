@extends('templates.form')

@php
    $web_title = __('Login');
    $web_image = asset('storage/images/undraw/Login.png');
@endphp

@section('right-content')
    @include('auth.lazy.login')
@endsection
