<div class="card">
    <div class="card-header p-0">
        <h3 class="text-center text-md-start mt-2 ms-md-2">@lang('Comment')</h3>
    </div>
    <div class="card-body p-0">
        <meta property="fb:app_id" content="{{ config('services.facebook.client_id') }}" />
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" nonce="U2fDtyU0"
                src="{{ sprintf(
                'https://connect.facebook.net/%s/sdk.js#xfbml=1&version=v17.0&appId=%s&autoLogAppEvents=1',
                LaravelLocalization::getCurrentLocaleRegional(),
                config('services.facebook.client_id'),
            ) }}">
        </script>
        <div class="bg-light rounded-bottom-3 pb-3">
            <div class="fb-comments" data-lazy="true" data-colorscheme="dark" data-numposts="15" data-width="100%"
                 data-href="{{ url()->full() }}"></div>
        </div>
    </div>
</div>
