@extends('templates.form')

@php
    $web_title = __('Two step authentication');
    $web_image = asset('storage/images/undraw/Login.png');
@endphp

@section('right-content')
    @vite('resources/js/auth/two-factor-challenge.js')

    <form action="{{ route('two-factor.login') }}" method="post" id="two-factor-challenge-form">
        @csrf
        <ul class="nav nav-underline justify-content-center mb-2" role="tablist">
            @php
                $tabs = [
                    (object) [
                        'label' => __('Code'),
                        'control' => 'code-tab-pane',
                        'class' => 'nav-link active px-2',
                        'selected' => 'true',
                    ],
                    (object) [
                        'label' => __('Recovery Code'),
                        'control' => 'recovery-code-tab-pane',
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
        <div class="card-body p-0">
            <div class="tab-content">
                <div class="tab-pane fade" id="recovery-code-tab-pane" role="tabpanel"
                     aria-labelledby="recovery-code-tab"
                     tabindex="0">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="recovery_code-two-factor-challenge-form"
                               name="recovery_code">
                        <label for="recovery_code-two-factor-challenge-form">@lang('Recovery Code')</label>
                        <strong id="recovery_code-two-factor-challenge-form-error" class="invalid-feedback"
                                role="alert"></strong>
                    </div>
                </div>
                <div class="tab-pane fade active show" id="code-tab-pane" role="tabpanel" aria-labelledby="code-tab"
                     tabindex="0">
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="code-two-factor-challenge-form" name="code">
                        <label for="code-two-factor-challenge-form">@lang('Code')</label>
                        <strong id="code-two-factor-challenge-form-error" class="invalid-feedback"
                                role="alert"></strong>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-primary me-2 mb-2" type="submit" role="button" aria-label="@lang('Submit')">
            @lang('Submit')
        </button>
    </form>
@endsection
