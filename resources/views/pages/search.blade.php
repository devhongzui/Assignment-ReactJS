@extends('layouts.web-app')

@section('main')
    <div class="container">
        <div class="mb-3">
            <h2 class="text-center m-2">@lang('Lessons')</h2>
            @include('pages.search.lessons')
        </div>

        <div class="mb-3">
            <h2 class="text-center m-2">@lang('Subjects')</h2>
            @include('pages.search.subjects')
        </div>

        <div class="mb-3">
            <h2 class="text-center m-2">@lang('Courses')</h2>
            @include('pages.search.courses')
        </div>

        <div class="mb-3">
            <h2 class="text-center m-2">@lang('Channels')</h2>
            @include('pages.search.channels')
        </div>

        <div class="mb-3">
            <h2 class="text-center m-2">@lang('Tools')</h2>
            @include('pages.search.tools')
        </div>
    </div>
@endsection
