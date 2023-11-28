@extends('templates.form')

@php
    $web_title = __('Change password');
    $web_image = asset('storage/images/undraw/Secure_login.png');
@endphp

@section('right-content')
    @vite('resources/js/auth/change-password.js')

    <form action="{{ route('user-password.update') }}" method="post" id="change-password-form">
        @csrf
        @method('PUT')
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email-change-password-form" name="email"
                   value="{{ request()->user()->email }}" disabled autocomplete="email">
            <label for="email-change-password-form">@lang('Email')</label>
            <strong id="email-change-password-form-error" class="invalid-feedback" role="alert">
            </strong>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password-change-password-form" name="password"
                           autofocus>
                    <label for="password-change-password-form">@lang('New password')</label>
                    <strong id="password-change-password-form-error" class="invalid-feedback" role="alert">
                    </strong>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password_confirmation-change-password-form"
                           name="password_confirmation" autofocus>
                    <label for="password_confirmation-change-password-form">@lang('Password confirm')</label>
                    <strong id="password_confirmation-change-password-form-error" class="invalid-feedback" role="alert">
                    </strong>
                </div>
            </div>
        </div>
        <button class="btn btn-primary me-2 mb-2" type="submit" role="button" aria-label="@lang('Change password')">
            @lang('Change password')
        </button>
        @include('auth.components.forgot-password-button')
    </form>
@endsection
