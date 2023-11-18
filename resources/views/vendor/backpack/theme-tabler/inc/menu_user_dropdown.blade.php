<div class="nav-item dropdown">
    @php
        $user = backpack_user();
    @endphp
    <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
        <span class="avatar avatar-sm rounded-circle">
            <img class="avatar avatar-sm rounded-circle bg-transparent" src="{{ backpack_avatar_url($user) }}"
                 alt="{{ $user->name }}" style="margin: 0;position: absolute;left: 0;z-index: 1;">
        </span>
        <div class="d-none d-xl-block ps-2">
            <div>{{ $user->name }}</div>
            <div class="mt-1 small text-muted">{{ trans('backpack::crud.admin') }}</div>
        </div>
    </a>
    <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        @if (config('backpack.base.setup_my_account_routes'))
            <a href="{{ route('backpack.account.info') }}" class="dropdown-item">
                <i class="fa-solid fa-user"></i>
                {{ trans('backpack::base.my_account') }}
            </a>
            <div class="dropdown-divider"></div>
        @endif
        <a href="{{ backpack_url('logout') }}" class="dropdown-item">
            <i class="fa-solid fa-lock"></i>
            {{ trans('backpack::base.logout') }}
        </a>
    </div>
</div>
