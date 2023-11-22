@extends('templates.tool')

@section('left-content')
    @vite('resources/js/tools/minify-js.js')

    <form action="{{ config('app.api_url') }}" method="post" id="minify-file-form" class="bg-dark-subtle p-3">
        <div class="row">
            <div class="col-3">
                <h4>@lang('Options')</h4>
            </div>
            <div class="col-9">
                <input type="file" name="file-upload" id="file-upload" class="form-control mb-2">
            </div>
        </div>
        <label for="code" class="form-label d-none"></label>
        <textarea name="code" id="code" class="form-control" rows="22" placeholder="@lang('Document')"></textarea>
    </form>
@endsection
