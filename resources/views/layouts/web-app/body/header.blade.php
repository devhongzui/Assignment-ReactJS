<header class="navbar navbar-expand-xl position-fixed bg-{{ $web->theme }} w-100 z-3">
    <div class="container">
        <div class="col-6 col-xl-auto">
            @include('layouts.web-app.components.logo')
        </div>
        <button class="navbar-toggler" type="button" role="button" aria-label="@lang('Extend')"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-collapse">
            <i class="fa-solid fa-bars"></i>
        </button>
        <div id="navbar-collapse" class="col-12 col-xl-auto navbar-collapse collapse">
            <div class="mx-auto">
                @include('layouts.web-app.body.header.nav.left')
            </div>
            <div class="d-flex flex-column flex-xl-row-reverse justify-content-end">
                @guest
                    @include('layouts.web-app.body.header.nav.right.guest')
                @else
                    @include('layouts.web-app.body.header.nav.right.auth')
                @endguest
                @include('layouts.web-app.body.header.nav.right.actions')
            </div>
        </div>
    </div>
</header>
