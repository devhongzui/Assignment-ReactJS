@extends('templates.tool')

@section('left-content')
    @vite('resources/js/tools/random-string.js')

    <form action="{{ config('app.api_url') }}" method="post" id="random-string-form" class="bg-dark-subtle p-3">
        <h4>@lang('Options')</h4>
        <div class="alert alert-light">
            @include('tools.random-string.option1')
        </div>
        <div class="row mb-3">
            @include('tools.random-string.option2')
        </div>
        <div class="row mb-3">
            @include('tools.random-string.option3')
        </div>
        <div class="row mb-3">
            @include('tools.random-string.option4')
        </div>
        <div id="option5" class="row">
            @include('tools.random-string.option5')
        </div>
        <div class="row mb-3">
            @include('tools.random-string.option6')
        </div>
        <div class="row">
            @include('tools.random-string.option7')
        </div>
    </form>
@endsection
