@vite('resources/js/layouts/web-app/body/header/nav/right/auth.js')

<div class="dropdown ms-auto">
    <button class="btn btn-outline-primary mb-2" type="button" role="button" data-bs-toggle="dropdown">
        <img src="{{ asset('logo.png') }}" data-src="{{ asset(request()->user()->avatar) }}" alt="@lang('Avatar')"
             class="rounded-5" style="width: 25px; height: 25px">
        <span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="@lang('Account management')">
            {{ request()->user()->name }}
        </span>
    </button>
    <ul class="dropdown-menu">
        @if (request()->user()->hasVerifiedEmail())
            <li>
                <a class="dropdown-item @if ($dashboard_page ?? false) active @endif" role="link"
                   href="{{ '' }}" aria-label="@lang('Dashboard')">
                    @lang('Dashboard')
                </a>
            </li>
            <li>
                <a class="dropdown-item @if ($profile_detail_page ?? false) active @endif" role="link"
                   href="{{ '' }}" aria-label="@lang('Profile')">
                    @lang('Profile')
                </a>
            </li>
            <li>
                <a class="dropdown-item @if ($change_password_page ?? false) active @endif" role="link"
                   href="{{ route('user-password.request') }}" aria-label="@lang('Change password')">
                    @lang('Change password')
                </a>
            </li>
            <hr class="dropdown-divider">
        @endif
        <li>
            <form id="logout-form" action="{{ route('logout') }}" method="post">
                @csrf
                <button class="dropdown-item" type="submit" role="button" aria-label="@lang('Logout')">
                    @lang('Logout')
                </button>
            </form>
        </li>
    </ul>
</div>
