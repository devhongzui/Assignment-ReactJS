<div class="ms-auto">
    <button type="button" role="button" class="btn me-2 mb-2" aria-label="@lang('Theme')" id="change-theme">
        <div class="d-none data-api" data-action="{{ route('theme') }}" data-method="post"></div>
        <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Theme')"
           class="fa-solid @if ($web->theme === 'dark') fa-moon @else fa-sun @endif"></i>
    </button>
    <button type="button" role="button" class="btn me-xl-2 mb-2" aria-label="@lang('Language')">
        <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Language')"
           class="fa-solid fa-globe"></i>
    </button>
    <button type="button" role="button" class="btn me-xl-2 mb-2" aria-label="@lang('Search')">
        <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Search')"
           class="fa-solid fa-magnifying-glass"></i>
    </button>
</div>
