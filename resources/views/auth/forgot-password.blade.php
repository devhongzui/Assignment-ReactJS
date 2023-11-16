@extends('templates.form')

@php
    $web_title = __('Forgot password');
    $web_image = asset('storage/images/undraw/Forgot_password.png');
@endphp

@section('right-content')
    @vite('resources/js/auth/forgot-password.js')

    <form action="{{ route('password.email') }}" method="post" id="forgot-password-form">
        @csrf
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email-forgot-password" name="email"
                   @guest autofocus autocomplete="email"
                   @else readonly value="{{ request()->user()->email }}" @endguest>
            <label for="email-forgot-password">@lang('Email')</label>
            <strong id="email-forgot-password-form-error" class="invalid-feedback" role="alert"></strong>
        </div>
        <button class="btn btn-primary me-2 mb-2" type="submit" role="button" aria-label="@lang('Submit')">
            @lang('Submit')
        </button>
    </form>
@endsection
