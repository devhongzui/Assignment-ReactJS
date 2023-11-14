<div class="ms-auto">
    <button type="button" role="button" class="btn btn-primary me-2 mb-2" aria-label="@lang('Login')"
            @if ($login_page ?? false) disabled
            @else data-bs-toggle="modal" data-bs-target="#login-modal" @endif>
        @lang('Login')
    </button>
    <button type="button" role="button" class="btn btn-outline-primary me-xl-2 mb-2" aria-label="@lang('Register')"
            @if ($register_page ?? false) disabled
            @else data-bs-toggle="modal" data-bs-target="#register-modal" @endif>
        @lang('Register')
    </button>
</div>
