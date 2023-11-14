@vite('resources/js/auth/lazy/login.js')

<form action="{{ route('login') }}" method="post" id="login-form">
    @csrf
    <div class="row">
        <div class="col-md-6">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email-login-form" name="email" autofocus
                       autocomplete="email">
                <label for="email-login-form">@lang('Email')</label>
                <strong id="email-login-form-error" class="invalid-feedback" role="alert"></strong>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password-login-form" name="password">
                <label for="password-login-form">@lang('Password')</label>
                <strong id="password-login-form-error" class="invalid-feedback" role="alert"></strong>
            </div>
        </div>
    </div>
    <div class="form-check mb-3">
        <input type="checkbox" class="form-check-input" id="remember_me-login-form" name="remember_me" checked>

        <label for="remember_me-login-form" class="form-check-label">
            @lang('Remember me')
        </label>
    </div>
    <button class="btn btn-primary me-2 mb-2" type="submit" role="button" aria-label="@lang('Login')">
        @lang('Login')
    </button>
    @include('auth.components.forgot-password-button')
</form>

{{-- <x-auth.o-auth/> --}}
