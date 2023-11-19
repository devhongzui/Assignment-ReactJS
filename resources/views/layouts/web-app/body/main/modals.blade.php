@guest
    @if (!($login_page ?? false))
        <x-page.modal id="login-modal" :title="__('Login')" :link="route('login')" />
    @endif
    @if (!($register_page ?? false))
        <x-page.modal id="register-modal" :title="__('Register')" :link="route('register')" />
    @endif
@endguest