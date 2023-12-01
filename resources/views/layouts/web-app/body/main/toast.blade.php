<div class="toast-container position-fixed top-50 start-50 translate-middle">
    <div id="notification" class="toast bg-{{ $web->theme }}" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header d-flex justify-content-between">
            <x-page.logo :web-site-name="$web->site_name" :web-site-name-html="$web->site_name_html"/>
            <button type="button" class="btn-close m-0" data-bs-dismiss="toast" aria-label="@lang('Close')"></button>
        </div>
        <div class="toast-body"></div>
    </div>
</div>
