@extends('layouts.web-app')

@php
    $web_title = __('Privacy Policy');
    $web_image = asset('storage/images/undraw/Data_processing.png');
    $private_policy_page = true;
@endphp

@section('main')
    <img data-src="{{ $web_image }}" alt="{{ $web_title }}" style="height: 300px"
         class="w-100 object-fit-cover object-fit-md-contain bg-white">

    <div class="container">
        <h2 class="my-4 text-center">{{ $web_title }}</h2>
        @php
            $list = [
                'general-personal-data' => __('Personal data we collect'),
                'sensitive-personal-data' => __('Sensitive personal data we collect'),
                'share-personal-data' => __('Share your personal data'),
                'third-party-supplier' => __('Third party providers'),
                'permission' => __('Your rights'),
                'cookie' => __('Cookie'),
                'data-security' => __('Data security'),
                'options-center' => __('Options center'),
            ];
        @endphp
        @include('pages.privacy-policy.table-of-contents')

        @include('pages.privacy-policy.introduce')

        @include('pages.privacy-policy.general-personal-data', ['name' => 'general-personal-data'])

        @include('pages.privacy-policy.sensitive-personal-data', ['name' => 'sensitive-personal-data'])

        @include('pages.privacy-policy.share-personal-data', ['name' => 'share-personal-data'])

        @include('pages.privacy-policy.third-party-supplier', ['name' => 'third-party-supplier'])

        @include('pages.privacy-policy.permission', ['name' => 'permission'])

        @include('pages.privacy-policy.cookie', ['name' => 'cookie'])

        @include('pages.privacy-policy.data-security', ['name' => 'data-security'])

        @include('pages.privacy-policy.options-center', ['name' => 'options-center'])
    </div>
@endsection
