<div class="ms-auto">
    <button type="button" role="button" class="btn me-2 mb-2" aria-label="@lang('Theme')">
        @if ($web->theme === 'dark')
            <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Theme')"
               class="fa-solid fa-moon"></i>
        @else
            <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Theme')"
               class="fa-solid fa-sun"></i>
        @endif
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
