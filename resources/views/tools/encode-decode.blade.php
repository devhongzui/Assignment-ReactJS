@extends('templates.tool')

@section('left-content')
    @vite('resources/js/tools/encode-decode.js')

    <div class="bg-dark-subtle p-3">
        <h4>@lang('Options')</h4>
        @php
            $hashing = [
                'AES' => 'AES',
                'DES' => 'DES',
                'TripleDES' => 'Triple DES',
                'Rabbit' => 'Rabbit',
                'RC4' => 'RC4',
                'RC4Drop' => 'RC4 Drop',
            ];

            $ciphers = [
                'MD5' => 'MD5',
                'SHA1' => 'SHA1',
                'SHA256' => 'SHA256',
                'SHA512' => 'SHA512',
                'SHA3' => 'SHA3',
                'RIPEMD160' => 'RIPEMD-160',
            ];

            $algorithms_encode_support = array_merge($hashing, $ciphers);

            $algorithms_decode_support = $hashing;
        @endphp
        <div class="row">
            <ul class="nav nav-pills ms-2 mb-2 col-xl-8" role="tablist">
                @php
                    $tabs = [
                        (object) [
                            'label' => __('Encode'),
                            'control' => 'encode-tab-pane',
                            'class' => 'nav-link active px-2',
                            'selected' => 'true',
                        ],
                        (object) [
                            'label' => __('Decryption'),
                            'control' => 'decode-tab-pane',
                            'class' => 'nav-link px-2',
                            'selected' => 'false',
                        ],
                    ];
                @endphp

                @foreach ($tabs as $tab)
                    <li class="nav-item" role="presentation">
                        <button data-bs-toggle="tab" type="button" role="tab" class="{{ $tab->class }}"
                                data-bs-target="#{{ $tab->control }}" aria-controls="{{ $tab->control }}"
                                aria-selected="{{ $tab->selected }}">
                            {{ $tab->label }}
                        </button>
                    </li>
                @endforeach
            </ul>
            <div class="tab-content">
                <div id="encode-tab-pane" role="tabpanel" aria-labelledby="encode-tab" tabindex="0"
                     class="tab-pane fade show active">
                    @include('tools.encode-decode.encode')
                </div>
                <div id="decode-tab-pane" role="tabpanel" aria-labelledby="decode-tab" tabindex="0"
                     class="tab-pane fade">
                    @include('tools.encode-decode.decode')
                </div>
            </div>
        </div>
    </div>
@endsection
