import { useTranslation } from "react-i18next";

export default function Cookie({ tag, title }) {
    const { t } = useTranslation();

    const list = [
        [
            t(
                "A cookie is a small text file that is stored on your computer, some only until you close your browser (also called “temporary cookies”) and some are stored for longer periods of time. (so-called “persistent cookies”)",
            ),
            t(
                "If you do not want to allow cookies to be stored on your computer, you can change the settings in your browser",
            ),
            t(
                "However, please note that in some cases some of our website features may not function properly and therefore some content may not be displayed correctly.",
            ),
        ].join(". "),
        [
            t(
                "This site uses cookies for a number of reasons, including to provide a personalized experience, to improve the usability of this site and to collect usage statistics",
            ),
            t(
                "We also use temporary cookies to improve the security of this site.",
            ),
        ].join(". "),
        [
            t(
                "In some cases when we use cookies, we share data with third parties",
            ),
            t(
                "For example, we use Google Analytics and Google AdWords, services that transmit website traffic data to Google servers",
            ),
            t(
                "Google Analytics does not identify individual users and does not associate your IP address with any other data held by Google",
            ),
            t(
                "We use reports provided by Google to understand more about site traffic and site usage and optimize ads purchased from Google's own network and other advertising networks",
            ),
            t(
                "Google may process data in the manner described in the Google Privacy Policy and for the purposes set out above in this section",
            ),
            t(
                "You may choose to use Google Analytics if you disable or decline cookies, disable JavaScript, or use an opt-out service provided by Google.",
            ),
        ].join(". "),
        [
            t(
                "Our website also uses the Facebook pixel - it collects anonymous aggregated data that helps us optimize advertising purchases across Facebook's various platforms (including Instagram)",
            ),
            t(
                "Facebook collects a user id so they match if the user has visited a website with a Facebook pixel",
            ),
            t(
                "However, we as advertisers can never identify the behavior of a particular user",
            ),
            t(
                "Facebook and its related platforms are part of a closed advertising ecosystem where their users can regulate if they consent to advertisers using data collected from their sites to buy ads. report on Facebook.",
            ),
        ].join(". "),
        [
            t(
                "Furthermore, our website uses conversion tracking scripts and cookies from Bing, ... (you can view their privacy policy using the following links)",
            ),
            t(
                "All of these services collect aggregate statistical data that helps us optimize advertising purchases",
            ),
            t(
                "We as advertisers cannot identify a single user using this data",
            ),
            t("You can disable the use of cookies in your browser settings."),
        ].join(". "),
    ];

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <ol>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ol>
        </section>
    );
}
