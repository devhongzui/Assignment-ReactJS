@guest
    @if (!($login_page ?? false))
        <x-page.modal id="login-modal" :title="__('Login')" :link="route('login')" />
    @endif
@endguest
