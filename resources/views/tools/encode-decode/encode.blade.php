<form action="{{ config('app.api_url') }}" method="post" id="encode-form">
    <div class="row mb-3">
        <label for="secret-encode" class="form-label col-xl-3">@lang('Document')</label>
        <div class="col-xl-9">
            <textarea name="secret-encode" id="secret-encode" class="form-control" rows="15"
                      placeholder="@lang('Enter Text')"></textarea>
        </div>
    </div>
    <div class="row mb-3">
        <label for="algorithm-encode" class="form-label col-xl-3">@lang('Algorithm')</label>
        <div class="col-xl-9">
            @php
                echo html()
                    ->select('algorithm-encode', $algorithms_encode_support)
                    ->class('form-select');
            @endphp
            <div>
                <strong class="mt-2 me-2">@lang('Cryptographic Function')</strong>{{ implode(', ', $hashing) }}
            </div>
            <div>
                <strong class="mt-2 me-2">@lang('Hash Function')</strong>{{ implode(', ', $ciphers) }}
            </div>
        </div>
    </div>
    <div class="row mb-3">
        <label for="key-encode" class="form-label col-xl-3">@lang('Key')</label>
        <div class="col-xl-9">
            <input type="text" name="key-encode" id="key-encode" class="form-control"
                   placeholder="@lang('Enter Key')">
        </div>
    </div>
</form>
