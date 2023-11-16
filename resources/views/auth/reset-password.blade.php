@extends('templates.form')

@php
    $web_title = __('Reset password');
    $web_image = asset('storage/images/undraw/My_password.png');
@endphp

@section('right-content')
    @vite('resources/js/auth/reset-password.js')

    <form action="{{ route('password.update') }}" method="post" id="reset-password-form">
        @csrf
        <input type="hidden" name="token" value="{{ request()->token }}">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email-reset-password-form" name="email"
                   value="{{ request()->email }}" readonly autocomplete="email">
            <label for="email-reset-password-form">@lang('Email')</label>
            <strong id="email-reset-password-form-error" class="invalid-feedback" role="alert"></strong>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password-reset-password-form" name="password"
                           autofocus>
                    <label for="password-reset-password-form">@lang('Password')</label>
                    <strong id="password-reset-password-form-error" class="invalid-feedback" role="alert">
                    </strong>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password_confirmation-reset-password-form"
                           name="password_confirmation">
                    <label for="password_confirmation-reset-password-form">
                        @lang('Password confirm')
                    </label>
                    <strong id="password_confirmation-reset-password-form-error" class="invalid-feedback" role="alert">
                    </strong>
                </div>
            </div>
        </div>
        <button class="btn btn-primary me-2 mb-2" type="submit" role="button" aria-label="@lang('Submit')">
            @lang('Submit')
        </button>
    </form>
@endsection
