<ul class="navbar-nav">
    <li class="nav-item">
        <a href="{{ route('contact') }}" aria-label="@lang('Contact')"
           class="nav-link text-center text-xl-end @if ($contact_page ?? false) active @endif">
            @lang('Contact')
        </a>
    </li>
    <li class="nav-item">
        <a href="{{ route('about-me') }}" aria-label="@lang('About me')"
           class="nav-link text-center text-xl-end @if ($about_me_page ?? false) active @endif">
            @lang('About me')
        </a>
    </li>
    <li class="nav-item">
        <a href="#" aria-label="@lang('Privacy Policy')"
           class="nav-link text-center text-xl-end @if ($private_policy_page ?? false) active @endif">
            @lang('Privacy Policy')
        </a>
    </li>
    <li class="nav-item">
        <a href="#" aria-label="@lang('Security Policy')"
           class="nav-link text-center text-xl-end @if ($security_policy_page ?? false) active @endif">
            @lang('Security Policy')
        </a>
    </li>
</ul>
