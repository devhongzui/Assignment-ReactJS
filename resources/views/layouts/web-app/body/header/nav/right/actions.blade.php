<div class="ms-auto d-flex">
    <form id="change-theme-form" class="me-2 mb-2" action="{{ route('theme') }}" method="post">
        @csrf
        <button type="submit" role="button" class="btn" aria-label="@lang('Theme')">
            <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Theme')"
               class="fa-solid @if ($web->theme === 'dark') fa-moon @else fa-sun @endif"></i>
        </button>
    </form>
    <button type="button" role="button" class="btn me-xl-2 mb-2" aria-label="@lang('Language')">
        <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Language')"
           class="fa-solid fa-globe"></i>
    </button>
    <button type="button" role="button" class="btn me-xl-2 mb-2" aria-label="@lang('Search')">
        <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Search')"
           class="fa-solid fa-magnifying-glass"></i>
    </button>
</div>
