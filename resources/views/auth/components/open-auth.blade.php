<hr class="mt-4">

<h4 class="my-4">@lang('Fast authentication')</h4>

<div class="row">
    <div class="col-xl-4">
        <a href="{{ route('oauth.redirect', 'facebook') }}" class="w-100 mb-2 me-2 btn btn-primary" role="link"
           aria-label="Facebook">
            <i class="fa-brands fa-facebook"></i>
            <strong>Facebook</strong>
        </a>
    </div>
    <div class="col-xl-4">
        <a href="{{ route('oauth.redirect', 'google') }}" class="w-100 mb-2 me-2 btn btn-primary" role="link"
           aria-label="Google">
            <i class="fa-brands fa-google"></i>
            <strong>Google</strong>
        </a>
    </div>
    <div class="col-xl-4">
        <button class="mb-2 btn btn-outline-primary" type="button" role="button" aria-label="@lang('Others')"
                data-bs-toggle="collapse" data-bs-target="#open-auth-collapse">
            <i class="fa-solid fa-sort-down"></i>
        </button>
        <div id="open-auth-collapse" class="collapse">
            <a href="{{ route('oauth.redirect', 'github') }}" class="w-100 mb-2 me-2 btn btn-primary" role="link"
               aria-label="Github">
                <i class="fa-brands fa-github"></i>
                <strong>Github</strong>
            </a>
            <a href="{{ route('oauth.redirect', 'spotify') }}" class="w-100 mb-2 me-2 btn btn-primary" role="link"
               aria-label="Spotify">
                <i class="fa-brands fa-spotify"></i>
                <strong>Spotify</strong>
            </a>
            <a href="{{ route('oauth.redirect', 'yahoo') }}" class="w-100 mb-2 me-2 btn btn-primary" role="link"
               aria-label="Yahoo">
                <i class="fa-brands fa-yahoo"></i>
                <strong>Yahoo</strong>
            </a>
            <a href="{{ route('oauth.redirect', 'twitter-oauth-2') }}" class="w-100 mb-2 me-2 btn btn-primary"
               role="link" aria-label="Twitter">
                <i class="fa-brands fa-twitter"></i>
                <strong>Twitter</strong>
            </a>
            <a href="{{ route('oauth.redirect', 'zalo') }}" class="w-100 mb-2 me-2 btn btn-primary" role="link"
               aria-label="Zalo">
                <i class="fa-solid fa-z"></i>
                <strong>Zalo</strong>
            </a>
        </div>
    </div>
</div>
