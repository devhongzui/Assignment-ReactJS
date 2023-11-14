<section id="{{ $name }}">
    <h3>{{ $list[$name] }}</h3>
    <h4>@lang('How to contact us')</h4>
    <p>
        @lang('If you have any questions regarding our processing of your personal data or our use of cookies, or if you wish to raise any of your rights under data protection law current, please send an email to: :mail or contact directly.', ['mail' => config('app.dev_mail')])
    </p>
    <h4>@lang('Privacy policy changes')</h4>
    <p>
        @lang('Where we change the way we process your personal data or use cookies, we will promptly update this privacy policy and publish it on this website.')
    </p>
</section>
