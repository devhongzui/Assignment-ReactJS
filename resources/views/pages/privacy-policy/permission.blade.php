<section id="{{ $name }}">
    <h3>{{ $list[$name] }}</h3>
    <p>
        @lang('Under applicable data protection laws, you have certain rights as a “data subject”.')
        @lang('Below we have listed your rights.')
        @lang('Your rights include:')
    </p>
    <ul>
        <li>
            <strong>@lang('Access rights')</strong>
            <span>
                @lang('You have the right to access the personal data we process.')
                @lang('You are also entitled to receive certain information about what we do with your personal data.')
                @lang('This information is provided in this document.')
            </span>
        </li>
        <li>
            <strong>@lang('Right to amend')</strong>
            <span>
                @lang('In certain cases, you have the right to have inaccurate personal data relating to you corrected and to have incomplete personal data completed.')
                @lang('Please note that we may not be able to correct inaccurate personal data provided by you due to, for example, airline rules and that such a particular change may incur costs .')
            </span>
        </li>
        <li>
            <strong>@lang('Right to deletion')</strong>
            <span>
                @lang('In certain cases, you have the right to have your personal data erased.')
                @lang('This is called the “right to be forgotten”.')
            </span>
        </li>
        <li>
            <strong>@lang('Right to restriction of processing')</strong>
            <span>
                @lang('In certain circumstances, you have the right to restrict how we use your personal data.')
            </span>
        </li>
        <li>
            <strong>@lang('Right to data portability')</strong>
            <span>
                @lang('You have the right to receive your personal data (or to have your personal data transmitted directly to another data controller) in a structured, commonly used and readable format. I.')
            </span>
        </li>
        <li>
            <strong>@lang('Right to object')</strong>
            <span>
                @lang('You have the right to object to certain types of processing of your personal data that we carry out.')
                @lang('This applies to all activities based on our "legitimate interests".')
            </span>
        </li>
        <li>
            <span>
                @lang('Finally, you also have the right to complain to the applicable data protection supervisory authority.')
            </span>
        </li>
    </ul>
</section>
