import { useTranslation } from "react-i18next";

export default function Cookie({ tag, title }) {
    const { t } = useTranslation();

    const list = [
        [
            t(
                "A cookie is a small text file that can identify a unique username from your computer to our server when you visit certain pages on the website and will be saved by your internet browser on your hard drive. your personality",
            ),
            t("Cookies are used to identify IP addresses and save time"),
            t(
                "We use cookies for your convenience on the website (for example, remembering your username when you want to change your shopping cart again without having to re-enter your email address) and do not require any information about you (for example, targeted advertising)",
            ),
            t(
                "Your browser can be set not to use cookies, but this will limit your access to the web",
            ),
            t(
                "Please accept our commitment that cookies do not include any private personal details and are safe from viruses.",
            ),
        ].join(". "),
        [
            t(
                "This browser uses Google Analytics, a web analytics service provided by Google, Inc",
            ),
            t(
                "Google Analytics uses cookies, which are text files placed on computers, to help the website analyze how users use the website",
            ),
            t(
                "Google will use this information to evaluate your use of the website, compile reports on website activities for website operators and provide other services related to internet activities and internet usage",
            ),
            t(
                "Google may also transfer this information to third parties as required by law or to third parties who process the information on Google's behalf",
            ),
            t(
                "Google will not combine your IP address with any other data it holds",
            ),
            t(
                "You can refuse the use of cookies by selecting the appropriate settings on your browser, however please note that this will prevent you from fully using the functionality of the website",
            ),
            t(
                "By using this website, you consent to Google processing data about you in the manner and for the purposes set out above.",
            ),
        ].join(". "),
    ];

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </section>
    );
}
