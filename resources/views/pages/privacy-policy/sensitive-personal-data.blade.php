<section id="{{ $name }}">
    <h3>{{ $list[$name] }}</h3>
    <ul>
        <li>
            @lang('In some cases, we may process “special categories of personal data” about you, which may be considered sensitive.')
            @lang('For example, if you (i) have submitted a medical certificate to avail of cancellation benefits or a refund from the airline (ii) have a medical or health condition that affects your trip go and you require assistance or where certain authorization is required, or (iii) have requested the disclosure of certain other sensitive personal data about you.')
        </li>
        <li>
            @lang('Before processing sensitive personal data about you, we will ask for your consent.')
            @lang('We therefore request that you use the dedicated contact forms on our website to submit any sensitive data.')
            @lang('The contact forms allow you to provide us with the consent required under applicable data protection laws.')
            @lang('You can of course withdraw this consent at any time.')
            @lang('We will not process any sensitive personal data without your consent, or that you have not provided to us.')
            @lang('A limited number of our employees will have access to your sensitive personal data and, after processing the sensitive data at your request, we will delete it as soon as possible.')
        </li>
        <li>
            @lang('In addition to the above, we take the necessary day-to-day measures for businesses providing services to consumers, such as bookkeeping, accounting, payments, anti-money laundering obligations and maintain the security of our website.')
            @lang('To the extent this is not required under applicable law, we take these measures based on our legitimate interests.')
            @lang('We may also analyze customer behavior to improve our websites and services on a general level.')
            @lang('However, this analysis will use aggregated or anonymized data at an aggregate level.')
        </li>
        <li>
            @lang('We will only share your personal data as necessary for the purposes listed in this privacy policy.')
            @lang('May be shared with other companies in :domain, government agencies and our trusted business partners.', ['domain' => config('app.url')])
            @lang('For example, we may share your personal data (including sensitive personal data where permitted) with business partners such as airlines, hotel suppliers, insurance companies and Global Distribution Systems (also known as GDS) to allow you to make travel arrangements and make travel reservations.')
        </li>
    </ul>
    <table class="table table-striped table-hover table-bordered">
        <thead class="table-light">
        <tr>
            <th scope="col">
                @lang('What we do (our purposes for processing your personal data)')
            </th>
            <th scope="col">
                @lang('Our legal basis')
            </th>
            <th scope="col">
                @lang('Storage time')
            </th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <td>
                @lang('Allows you to support the product services you have requested from us (i.e. booking travel services mediated by us, as well as providing our own services).')
            </td>
            <td>
                @lang('Perform our contract with you.')
                @lang('Where you have provided us with sensitive personal data, consent is the legal basis.')
            </td>
            <td>
                @lang('3 years from date of purchase.')
                @lang('Consent to the processing of sensitive personal data can be withdrawn at any time.')
            </td>
        </tr>
        <tr>
            <td>
                @lang('If you have chosen to create a user account on our website, we will provide that account to you.')
                @lang('Your account includes access to your previously purchased product warranty information.')
                @lang('We will also store your username and password.')
            </td>
            <td>
                @lang('Perform our contract with you.')
            </td>
            <td>
                @lang('Your user account data, as well as personal information related to product and service orders, will be saved until you decide to cancel your user account through our website.')
            </td>
        </tr>
        <tr>
            <td>
                @lang('If you have started the warranty registration process, but have not completed it, we may send you an email with a link back to search results, or a booking that has already started, depending on when that your booking process on the website has been interrupted.')
            </td>
            <td>
                @lang('Our legitimate interest is to conduct business and allow you to complete your purchase without having to fill in all the information again.')
                @lang('If you do not want to receive these emails, you can opt out at any time within the email.')
            </td>
            <td>
                @lang('Long-term storage')
            </td>
        </tr>
        <tr>
            <td>
                @lang('Record calls for quality assurance purposes and to serve any future requests or inquiries you may have.')
            </td>
            <td>
                @lang('Our legitimate interests are (i) to improve our services through internal education and (ii) to deal with your possible requests or complaints.')
                @lang('If you do not want calls to be recorded, you can refuse recording before the recording begins.')
            </td>
            <td>
                @lang('6 months from the date of the phone call.')
                @lang('Only a limited number of people have access to your recordings.')
            </td>
        </tr>
        <tr>
            <td>
                @lang('Use cookies to, for example, improve the usability of this site, provide a personalized experience and collect usage statistics.')
                @lang('We also use session cookies to improve the security of this site.')
            </td>
            <td>
                @lang('Our legitimate interests are (i) to improve our website, (ii) to show you offers that are of interest to you and (iii) to have a safe provision of services and website. full.')
                @lang('If you do not want us to store cookies on your computer, you can change the settings in your browser at any time.')
            </td>
            <td>@lang('Depends on the type of cookie.')</td>
        </tr>
        </tbody>
    </table>
</section>
