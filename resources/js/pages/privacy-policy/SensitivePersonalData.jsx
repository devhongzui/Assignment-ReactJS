import { useTranslation } from "react-i18next";

export default function SensitivePersonalData({ tag, title }) {
    const { t } = useTranslation();

    const list = [
        [
            t(
                "In some cases, we may process “special categories of personal data” about you, which may be considered sensitive",
            ),
            t(
                "For example, if you (i) have submitted a medical certificate to avail of cancellation benefits or a refund from the airline (ii) have a medical or health condition that affects your trip go and you require assistance or where certain authorization is required, or (iii) have requested the disclosure of certain other sensitive personal data about you.",
            ),
        ].join(". "),
        [
            t(
                "Before processing sensitive personal data about you, we will ask for your consent",
            ),
            t(
                "We therefore request that you use the dedicated contact forms on our website to submit any sensitive data",
            ),
            t(
                "The contact forms allow you to provide us with the consent required under applicable data protection laws",
            ),
            t("You can of course withdraw this consent at any time"),
            t(
                "We will not process any sensitive personal data without your consent, or that you have not provided to us",
            ),
            t(
                "A limited number of our employees will have access to your sensitive personal data and, after processing the sensitive data at your request, we will delete it as soon as possible.",
            ),
        ].join(". "),
        [
            t(
                "In addition to the above, we take the necessary day-to-day measures for businesses providing services to consumers, such as bookkeeping, accounting, payments, anti-money laundering obligations and maintain the security of our website",
            ),
            t(
                "To the extent this is not required under applicable law, we take these measures based on our legitimate interests",
            ),
            t(
                "We may also analyze customer behavior to improve our websites and services on a general level",
            ),
            t(
                "However, this analysis will use aggregated or anonymized data at an aggregate level.",
            ),
        ].join(". "),
        [
            t(
                "We will only share your personal data as necessary for the purposes listed in this privacy policy",
            ),
            t(
                "May be shared with other companies in https://devhongzui.com, government agencies and our trusted business partners",
            ),
            t(
                "For example, we may share your personal data (including sensitive personal data where permitted) with business partners such as airlines, hotel suppliers, insurance companies and Global Distribution Systems (also known as GDS) to allow you to make travel arrangements and make travel reservations.",
            ),
        ].join(". "),
    ];

    const table = {
        head: [
            t("What we do (our purposes for processing your personal data)"),
            t("Our legal basis"),
            t("Storage time"),
        ],
        body: [
            [
                t(
                    "Allows you to support the product services you have requested from us (i.e. booking travel services mediated by us, as well as providing our own services).",
                ),
                [
                    t("Perform our contract with you"),
                    t(
                        "Where you have provided us with sensitive personal data, consent is the legal basis.",
                    ),
                ].join(". "),
                [
                    t("3 years from date of purchase"),
                    t(
                        "Consent to the processing of sensitive personal data can be withdrawn at any time.",
                    ),
                ].join(". "),
            ],
            [
                [
                    t(
                        "If you have chosen to create a user account on our website, we will provide that account to you",
                    ),
                    t(
                        "Your account includes access to your previously purchased product warranty information",
                    ),
                    t("We will also store your username and password."),
                ].join(". "),
                t("Perform our contract with you."),
                t(
                    "Your user account data, as well as personal information related to product and service orders, will be saved until you decide to cancel your user account through our website.",
                ),
            ],
            [
                t(
                    "If you have started the warranty registration process, but have not completed it, we may send you an email with a link back to search results, or a booking that has already started, depending on when that your booking process on the website has been interrupted.",
                ),
                [
                    t(
                        "Our legitimate interest is to conduct business and allow you to complete your purchase without having to fill in all the information again",
                    ),
                    t(
                        "If you do not want to receive these emails, you can opt out at any time within the email.",
                    ),
                ].join(". "),
                t("Long-term storage."),
            ],
            [
                t(
                    "Record calls for quality assurance purposes and to serve any future requests or inquiries you may have.",
                ),
                [
                    t(
                        "Our legitimate interests are (i) to improve our services through internal education and (ii) to deal with your possible requests or complaints",
                    ),
                    t(
                        "If you do not want calls to be recorded, you can refuse recording before the recording begins.",
                    ),
                ].join(". "),
                [
                    t("6 months from the date of the phone call"),
                    t(
                        "Only a limited number of people have access to your recordings.",
                    ),
                ].join(". "),
            ],
            [
                [
                    t(
                        "Use cookies to, for example, improve the usability of this site, provide a personalized experience and collect usage statistics",
                    ),
                    t(
                        "We also use session cookies to improve the security of this site.",
                    ),
                ].join(". "),
                [
                    t(
                        "Our legitimate interests are (i) to improve our website, (ii) to show you offers that are of interest to you and (iii) to have a safe provision of services and website full",
                    ),
                    t(
                        "If you do not want us to store cookies on your computer, you can change the settings in your browser at any time.",
                    ),
                ].join(". "),
                t("Depends on the type of cookie."),
            ],
        ],
    };

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <table className="table table-striped table-hover table-bordered">
                <thead className="table-light">
                    <tr>
                        {table.head.map((value, index) => (
                            <th key={index} scope="col">
                                {value}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {table.body.map((value, index) => (
                        <tr key={index}>
                            {value.map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
