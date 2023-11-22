@extends('layouts.web-app')

@section('main')
    @vite('resources/js/templates/tool.js')

    <div class="container">
        <h2 class="text-center">{{ $web_title }}</h2>
        <div class="row mb-3">
            <div class="col-xl-6">
                @yield('left-content')
            </div>
            <div class="col-xl-6">
                <div class="bg-dark-subtle p-3">
                    <div class="row">
                        <div class="col-3">
                            <h4>@lang('Result')</h4>
                        </div>
                        <div class="col-9">
                            <button id="run-tool" class="btn btn-success mb-2">
                                <i class="fa-solid fa-play"></i>
                                @lang('Run')
                            </button>
                            <button id="erase-result" class="btn btn-warning mb-2">
                                <i class="fa-solid fa-trash"></i>
                                @lang('Delete')
                            </button>
                            <button id="copy-result" class="btn btn-primary mb-2">
                                <i class="fa-solid fa-copy"></i>
                                @lang('Copy')
                            </button>
                            <button id="download_result" class="btn btn-secondary mb-2">
                                <i class="fa-solid fa-download"></i>
                                @lang('Download')
                            </button>
                        </div>
                    </div>
                    <label for="result" class="form-label d-none"></label>
                    <textarea name="result" id="result" class="form-control" readonly rows="22"
                              placeholder="@lang('Result')"></textarea>
                </div>
            </div>
        </div>
    </div>
@endsection
