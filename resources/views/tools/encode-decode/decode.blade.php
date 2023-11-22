<form action="{{ config('app.api_url') }}" method="post" id="decode-form">
    <div class="row mb-3">
        <label for="secret-decode" class="form-label col-xl-3">@lang('Document')</label>
        <div class="col-xl-9">
            <textarea name="secret-decode" id="secret-decode" class="form-control" rows="15"
                      placeholder="@lang('Enter Text')"></textarea>
        </div>
    </div>
    <div class="row mb-3">
        <label for="algorithm-decode" class="form-label col-xl-3">@lang('Algorithm')</label>
        <div class="col-xl-9">
            @php
                echo html()
                    ->select('algorithm-decode', $algorithms_decode_support)
                    ->class('form-select');
            @endphp
            <strong class="me-2 mt-2">@lang('Cryptographic Function')</strong>{{ implode(', ', $hashing) }}
        </div>
    </div>
    <div class="row mb-3">
        <label for="key-decode" class="form-label col-xl-3">@lang('Key')</label>
        <div class="col-xl-9">
            <input type="text" name="key-decode" id="key-decode" class="form-control"
                   placeholder="@lang('Enter Key')">
        </div>
    </div>
</form>
