@extends('templates.form')

@php
    $web_title = __('Two step authentication');
    $web_image = asset('storage/images/undraw/Code_typing.png');
@endphp


@section('right-content')
    @vite('resources/js/profile/two-step-authentication.js')

    @php
        $user = request()->user();
    @endphp
    <div class="row mb-3">
        <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Two step authentication')</div>
        <div class="col-md-7">
            <div class="d-flex align-items-center">
                @if ($user->hasEnabledTwoFactorAuthentication())
                    <button class="btn btn-outline-success mb-2 me-2" role="button" type="button" disabled
                            aria-label="@lang('Enabled')">
                        @lang('Enabled')
                    </button>
                    <form id="two-factor-disable-form" action="{{ route('two-factor.disable') }}" method="delete">
                        @csrf
                        <button class="btn btn-danger mb-2 me-2" type="submit" role="button"
                                aria-label="@lang('Disable') }}">
                            @lang('Disable')
                        </button>
                    </form>
                @else
                    <button class="btn btn-outline-danger mb-2 me-2" role="button" type="button" disabled
                            aria-label="@lang('Disabled') }}">
                        @lang('Disabled')
                    </button>
                    <form id="two-factor-enable-form" action="{{ route('two-factor.enable') }}" method="post">
                        @csrf
                        <button class="btn btn-primary mb-2 me-2" type="submit" role="button"
                                aria-label="@lang('Enable')">
                            @lang('Enable')
                        </button>
                    </form>
                @endif
            </div>
        </div>
    </div>

    @if ($user->hasEnabledTwoFactorAuthentication())
        <div class="row mb-3">
            <div class="offset-md-1 col-md-3 text-primary fw-bold">@lang('Recovery Codes')</div>
            <div class="col-md-7">
                <ol>
                    @foreach ($user->recoveryCodes() as $index => $code)
                        <li>
                            <code>{{ $code }}</code>
                        </li>
                    @endforeach
                </ol>
            </div>
        </div>
    @else
        <div id="two-factor-confirm" class="row mb-3" style="display: none">
            <div class="offset-md-1 col-md-3 text-primary fw-bold">
                @lang('QR')
            </div>
            <div class="col-md-7">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="d-flex">
                            <div id="qr-code" class="bg-light p-2 mb-3"></div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form id="two-factor-confirm-form" action="{{ route('two-factor.confirm') }}" method="post">
                            @csrf
                            <fieldset>
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="code-two-factor-confirm-form"
                                           name="code" autofocus>
                                    <label for="code-two-factor-confirm-form">@lang('Code')</label>
                                    <strong id="code-two-factor-confirm-form-error" class="invalid-feedback"
                                            role="alert">
                                    </strong>
                                </div>
                            </fieldset>
                            <button class="btn btn-primary mb-2 me-2" type="submit" role="button"
                                    aria-label="@lang('Confirm') }}">
                                @lang('Confirm')
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endif
@endsection
