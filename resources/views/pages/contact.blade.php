@extends('layouts.web-app')

@php
    $web_title = __('Contact');
    $web_image = asset('storage/images/undraw/Contact_us.png');
    $contact_page = true;
@endphp

@section('main')
    <div class="container">
        <h2 class="my-4 text-center">{{ $web_title }}</h2>

        <div class="row mb-3">
            <div class="offset-xl-1 col-xl-3 text-primary fw-bold">@lang('Responsible for the content')</div>
            <div class="col-xl-7">{{ config('app.dev_name') }}</div>
        </div>
        <div class="row mb-3">
            <div class="offset-xl-1 col-xl-3 text-primary fw-bold">@lang('Address detail')</div>
            <div class="col-xl-7">@lang('No. 8, My A Street, Dong My, Thanh Tri, City. Hanoi')</div>
        </div>
        <div class="row mb-3">
            <div class="offset-xl-1 col-xl-3 text-primary fw-bold">@lang('Phone number')</div>
            <div class="col-xl-7">{{ config('app.dev_phone') }}</div>
        </div>
        <div class="row mb-3">
            <div class="offset-xl-1 col-xl-3 text-primary fw-bold">@lang('Email')</div>
            <div class="col-xl-7">{{ config('app.dev_mail') }}</div>
        </div>

        <div class="row mb-3">
            <div class="offset-xl-1 col-xl-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7453.56412274543!2d105.8832887!3d20.9210861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1692459738842!5m2!1svi!2s"
                    height="600" allowfullscreen loading="lazy" class="w-100 rounded-2"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
@endsection
