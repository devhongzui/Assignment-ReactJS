@extends('layouts.web-app')

@php
    $web_title = __('Security Policy');
    $web_image = asset('storage/images/undraw/Security_on.png');
    $security_policy_page = true;
@endphp

@section('main')
    <img src="{{ url('logo.png') }}" data-src="{{ $web_image }}" alt="{{ $web_title }}" style="height: 300px"
         class="w-100 object-fit-cover object-fit-md-contain bg-white">

    <div class="container">
        <h2 class="my-4 text-center">{{ $web_title }}</h2>
        @php
            $list = [
                'collect-information' => __('Collect personal information'),
                'other-rules' => __('Other regulations regarding personal information'),
                'competition' => __('Competition'),
                'partner' => __('Third Partners and Affiliates'),
                'cookie' => __('Use of Cookies'),
                'security' => __('Security'),
                'permission' => __('Customer benefits'),
            ];
        @endphp
        @include('pages.security-policy.table-of-contents')

        @include('pages.security-policy.introduce')

        @include('pages.security-policy.collect-information', ['name' => 'collect-information'])

        @include('pages.security-policy.other-rules', ['name' => 'other-rules'])

        @include('pages.security-policy.competition', ['name' => 'competition'])

        @include('pages.security-policy.partner', ['name' => 'partner'])

        @include('pages.security-policy.cookie', ['name' => 'cookie'])

        @include('pages.security-policy.security', ['name' => 'security'])

        @include('pages.security-policy.permission', ['name' => 'permission'])
    </div>
@endsection
