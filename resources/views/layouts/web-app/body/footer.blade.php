<footer class="navbar border-top bg-{{ $web->theme }}">
    <div class="container">
        <div class="col-12 col-xl-3 mb-2 d-flex justify-content-center justify-content-xl-start">
            <x-page.logo :web-site-name="$web->site_name" :web-site-name-html="$web->site_name_html" />
        </div>
        <div class="col-12 col-xl-3 mb-2">
            @include('layouts.web-app.body.footer.socials')
        </div>
        <div class="col-12 col-xl-3">
            @include('layouts.web-app.body.footer.copyright')
        </div>
        <div class="col-12 col-xl-3 mb-2">
            @include('layouts.web-app.body.footer.nav')
        </div>
    </div>
</footer>
