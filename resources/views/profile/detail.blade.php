@extends('templates.form')

@php
    $web_title = __('Profile');
    $web_image = asset('storage/images/undraw/Contract.png');
@endphp

@section('right-content')
    @vite('resources/js/profile/detail.js')

    @php
        $user = request()->user();
    @endphp
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Avatar')</div>
        <div class="col-md-7">
            <img src="{{ url('logo.png') }}" alt="@lang('Avatar')" style="width: 40px; height: 40px"
                 data-src="{{ asset(request()->user()->avatar) }}" class="rounded-5">
        </div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Full name')</div>
        <div class="col-md-7">{{ $user->name }}</div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Birthdate')</div>
        <div class="col-md-7">{{ $user->birthdate }}</div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Gender')</div>
        <div class="col-md-7">{{ $user->getGender() }}</div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Email')</div>
        <div class="col-md-7">
            <span class="me-2">{{ $user->email }}</span>
            @if ($user->email)
                @if ($user->email_verified_at)
                    <span class="text-success">
                        <i class="fa-solid fa-check"></i>
                    </span>
                @else
                    <span class="text-danger">
                        <i class="fa-solid fa-exclamation"></i>
                    </span>
                @endif
            @endif
        </div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Phone number')</div>
        <div class="col-md-7">
            <span class="me-2">{{ $user->phone_number }}</span>
            @if ($user->phone_number)
                @if ($user->phone_number_verified_at)
                    <span class="text-success">
                        <i class="fa-solid fa-check"></i>
                    </span>
                @else
                    <span class="text-danger">
                        <i class="fa-solid fa-exclamation"></i>
                    </span>
                @endif
            @endif
        </div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Province')</div>
        <div class="col-md-7" data-province-code="{{ $user->province_code }}" data-api=" {{ config('app.api_url') }}">
        </div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('District')</div>
        <div class="col-md-7" data-district-code="{{ $user->district_code }}" data-api=" {{ config('app.api_url') }}">
        </div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Sub district')</div>
        <div class="col-md-7" data-sub_district_code="{{ $user->sub_district_code }}"
             data-api=" {{ config('app.api_url') }}"></div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Address detail')</div>
        <div class="col-md-7">{{ $user->address_detail }}</div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Two step authentication')</div>
        <div class="col-md-7">
            <div class="d-flex align-items-center">
                @if ($user->hasEnabledTwoFactorAuthentication())
                    <button class="btn btn-outline-success mb-2 me-2" role="button" type="button" disabled
                            aria-label="@lang('Enabled')">
                        @lang('Enabled')
                    </button>
                @else
                    <button class="btn btn-outline-danger mb-2 me-2" role="button" type="button" disabled
                            aria-label="@lang('Disabled')">
                        @lang('Disabled')
                    </button>
                @endif
                <a href="{{ '' }}" class="btn btn-primary mb-2 me-2" role="link"
                   aria-label="@lang('Setup')">
                    @lang('Setup')
                </a>
            </div>
        </div>
    </div>
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Socials')</div>
        <div class="col-md-7">
            @php
                /** @var \App\Models\OpenAuth $social */
            @endphp
            @foreach ($user->socials as $social)
                @php
                    $service_name = $social->getServiceName();
                @endphp
                @switch($service_name)
                    @case('facebook')
                    @case('google')

                    @case('github')
                    @case('spotify')

                    @case('yahoo')
                        <span class="fs-5 me-2"><i class="fa-brands fa-{{ $service_name }}"></i></span>
                        @break

                    @case('twitter-oauth-2')
                        <span class="fs-5 me-2"><i class="fa-brands fa-twitter"></i></span>
                        @break

                    @case('zalo')
                        <span class="fs-5 me-2"><i class="fa-solid fa-z"></i></span>
                        @break

                    @case('zalo')
                        <span class="fs-5 me-2"><i class="fa-solid fa-d"></i></span>
                        @break
                @endswitch
            @endforeach
        </div>
    </div>
    <div class="offset-md-4 d-flex flex-column flex-xl-row">
        <a role="link" class="btn btn-primary me-2 mb-2" aria-label="@lang('Profile edit')"
           href="{{ route('user-profile-information.edit') }}">
            @lang('Profile edit')
        </a>
        <a role="link" class="btn btn-warning me-2 mb-2" aria-label="@lang('Change password')"
           href="{{ route('user-password.request') }}">
            @lang('Change password')
        </a>
        <form action="{{ route('user-profile-information.destroy') }}" method="delete" id="destroy-profile-form"
              class="me-2 mb-2">
            @csrf
            <button type="submit" role="button" class="btn btn-danger w-100" aria-label="@lang('Profile destroy')">
                @lang('Profile destroy')
            </button>
        </form>
    </div>
@endsection
