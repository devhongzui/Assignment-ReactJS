@extends('templates.form')

@php
    $web_title = __('Confirm password');
    $web_image = asset('storage/images/undraw/Authentication.png');
@endphp

@section('right-content')
    @vite('resources/js/auth/confirm-password.js')
    @php
        session(['previous_url_confirm_password' => url()->previous()]);
    @endphp

    <form action="{{ route('password.confirm') }}" method="post" id="confirm-password-form">
        @csrf
        <fieldset class="row">
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email-confirm-password-form" name="email"
                           value="{{ request()->user()->email }}" disabled autocomplete="email">
                    <label for="email-confirm-password-form">@lang('Email')</label>
                    <strong id="email-confirm-password-form-error" class="invalid-feedback" role="alert"></strong>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password-confirm-password-form" name="password"
                           autofocus>
                    <label for="password-confirm-password-form">@lang('Password')</label>
                    <strong id="password-confirm-password-form-error" class="invalid-feedback" role="alert"></strong>
                </div>
            </div>
        </fieldset>
        <button class="btn btn-primary me-2 mb-2" type="submit" role="button" aria-label="@lang('Submit') }}">
            @lang('Submit')
        </button>
        @include('auth.components.forgot-password-button')
    </form>

    @include('auth.components.open-auth')
@endsection
