@php
    $web_title = __('Verify email');
    $web_image = asset('storage/images/undraw/Verified.png');
@endphp

@extends('templates.form')

@section('right-content')
    @vite('resources/js/auth/verify-email.js')

    <div>
        <span>@lang('Verification email has been sent')</span>
        <strong>{{ request()->user()->email }}</strong>
    </div>
    <div class="d-flex align-items-center">
        <div>@lang('Please check your Inbox or')</div>
        <form action="{{ route('verification.send') }}" method="post" id="resend-verify-email-form">
            @csrf
            <button class="btn btn-link" type="submit" role="button" aria-label="@lang('click here to try again')">
                @lang('click here to try again')
            </button>
        </form>
    </div>
@endsection
