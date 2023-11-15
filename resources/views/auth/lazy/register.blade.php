@vite('resources/js/auth/lazy/register.js')

<form action="{{ route('register') }}" method="post" id="register-form">
    @csrf
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="name-register-form" name="name" autofocus autocomplete="name">
        <label for="name-register-form">@lang('Full name')</label>
        <strong id="name-register-form-error" class="invalid-feedback" role="alert"></strong>
    </div>
    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="email-register-form" name="email" autocomplete="email">
        <label for="email-register-form">@lang('Email')</label>
        <strong id="email-register-form-error" class="invalid-feedback" role="alert"></strong>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password-register-form" name="password">
                <label for="password-register-form">@lang('Password')</label>
                <strong id="password-register-form-error" class="invalid-feedback" role="alert"></strong>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password_confirmation-register-form"
                       name="password_confirmation">
                <label for="password_confirmation-register-form">@lang('Password confirm')</label>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="birthdate-register-form" name="birthdate">
                <label for="birthdate-register-form">@lang('Birthdate')</label>
                <strong id="birthdate-register-form-error" class="invalid-feedback" role="alert"></strong>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating mb-3">
                @php
                    echo html()
                        ->select('gender', app(\App\Models\User::class)->getGendersOption())
                        ->id('gender-register-form')
                        ->class('form-select');
                @endphp
                <label for="gender-register-form">@lang('Gender')</label>
                <strong id="gender-register-form-error" class="invalid-feedback" role="alert"></strong>
            </div>
        </div>
    </div>
    <div class="form-check mb-3">
        <input type="checkbox" class="form-check-input" id="terms-register-form" name="terms">

        <label for="terms-register-form" class="form-check-label">
            <span>@lang('Agree with')</span>
            <a class="link fw-bolder" role="link" target="_blank" aria-label="@lang('Privacy Policy')"
               href="{{ route('privacy-policy') }}">
                @lang('Privacy Policy')
            </a>
            <span>@lang('and')</span>
            <a class="link fw-bolder" role="link" target="_blank" aria-label="@lang('Security Policy')"
               href="{{ route('security-policy') }}">
                @lang('Security Policy')
            </a>
        </label>
        <strong id="terms-register-form-error" class="invalid-feedback" role="alert"></strong>
    </div>
    <button class="btn btn-primary" type="submit" role="button" aria-label="@lang('Register')">
        @lang('Register')
    </button>
</form>

{{-- <x-auth.o-auth/> --}}
