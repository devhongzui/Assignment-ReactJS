<div class="ms-auto d-flex">
    <form id="change-theme-form" class="me-2 mb-2" action="{{ route('theme') }}" method="post">
        @csrf
        <button type="submit" role="button" class="btn" aria-label="@lang('Theme')">
            <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Theme')"
               class="fa-solid @if ($web->theme === 'dark') fa-moon @else fa-sun @endif"></i>
        </button>
    </form>
    <div class="dropdown">
        <button type="button" role="button" class="btn me-xl-2 mb-2" aria-label="@lang('Language')"
                data-bs-toggle="dropdown">
            <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Language')"
               class="fa-solid fa-globe"></i>
        </button>
        <ul class="dropdown-menu">
            @php
                $lang_current = LaravelLocalization::getCurrentLocale();
                $lang_support = LaravelLocalization::getSupportedLocales();
            @endphp
            @foreach ($lang_support as $key => $language)
                <li>
                    @if ($lang_current === $key)
                        <span class="text-primary dropdown-item">{{ $language['native'] }}</span>
                    @else
                        <a class="dropdown-item" href="{{ LaravelLocalization::getLocalizedURL($key) }}" role="link"
                           aria-label="{{ $language['native'] }}">
                            {{ $language['native'] }}
                        </a>
                    @endif
                </li>
            @endforeach
        </ul>
    </div>
    <button type="button" role="button" class="btn me-xl-2 mb-2" aria-label="@lang('Search')">
        <i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="@lang('Search')"
           class="fa-solid fa-magnifying-glass"></i>
    </button>
</div>
