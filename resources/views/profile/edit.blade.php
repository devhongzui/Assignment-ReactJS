@extends('templates.form')

@php
    $web_title = __('Profile edit');
    $web_image = asset('storage/images/undraw/Profile_details.png');
@endphp

@section('right-content')
    @vite('resources/js/profile/edit.js')

    @php
        $user = request()->user();
    @endphp

    <form action="{{ route('user-profile-information.update') }}" method="post" id="edit-profile-form">
        @csrf
        @method('PUT')
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="name-edit-profile-form" name="name" value="{{ $user->name }}"
                   autofocus autocomplete="name">
            <label for="name-edit-profile-form">@lang('Full name')</label>
            <strong id="name-edit-profile-form-error" class="invalid-feedback" role="alert"></strong>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email-edit-profile-form" name="email"
                   value="{{ $user->email }}" autocomplete="email">
            <label for="email-edit-profile-form">@lang('Email')</label>
            <strong id="email-edit-profile-form-error" class="invalid-feedback" role="alert"></strong>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="phone_number-edit-profile-form" name="phone_number"
                   value="{{ $user->phone_number }}" autocomplete="phone_number">
            <label for="phone_number-edit-profile-form">@lang('Phone number')</label>
            <strong id="phone_number-edit-profile-form-error" class="invalid-feedback" role="alert"></strong>
        </div>
        <div class="form-floating mb-3">
            @php
                echo html()
                    ->select('province_code')
                    ->id('province_code-edit-profile-form')
                    ->class('form-select')
                    ->attribute('data-selected', $user->province_code);
            @endphp
            <label for="province_code-edit-profile-form">@lang('Province')</label>
            <strong id="province_code-edit-profile-form-error" class="invalid-feedback" role="alert"></strong>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    @php
                        echo html()
                            ->select('district_code')
                            ->id('district_code-edit-profile-form')
                            ->class('form-select')
                            ->attribute('data-selected', $user->district_code);
                    @endphp
                    <label for="district_code-edit-profile-form">@lang('District')</label>
                    <strong id="district_code-edit-profile-form-error" class="invalid-feedback" role="alert"></strong>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    @php
                        echo html()
                            ->select('sub_district_code')
                            ->id('sub_district_code-edit-profile-form')
                            ->class('form-select')
                            ->attribute('data-selected', $user->sub_district_code);
                    @endphp
                    <label for="sub_district_code-edit-profile-form">@lang('Sub district')</label>
                    <strong id="sub_district_code-edit-profile-form-error" class="invalid-feedback"
                            role="alert"></strong>
                </div>
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="address_detail-edit-profile-form" name="address_detail"
                   value="{{ $user->address_detail }}" autocomplete="address_detail">
            <label for="address_detail-edit-profile-form">@lang('Address detail')</label>
            <strong id="address_detail-edit-profile-form-error" class="invalid-feedback" role="alert"></strong>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="date" class="form-control" id="birthdate-edit-profile-form" name="birthdate"
                           value="{{ $user->birthdate }}">
                    <label for="birthdate-edit-profile-form">@lang('Birthdate')</label>
                    <strong id="birthdate-edit-profile-form-error" class="invalid-feedback" role="alert"></strong>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating mb-3">
                    @php
                        echo html()
                            ->select('gender', $user->getGendersOption(), $user->gender)
                            ->id('gender-edit-profile-form')
                            ->class('form-select');
                    @endphp
                    <label for="gender-edit-profile-form">@lang('Gender')</label>
                    <strong id="gender-edit-profile-form-error" class="invalid-feedback" role="alert"></strong>
                </div>
            </div>
        </div>
        <button class="btn btn-primary mb-2" type="submit" role="button" aria-label="@lang('Submit')">
            @lang('Submit')
        </button>
    </form>
@endsection
