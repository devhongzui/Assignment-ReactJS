import { useTranslation } from "react-i18next";

export default function Introduce() {
    const { t } = useTranslation();

    const list = [
        [
            t(
                "This Privacy Policy explains how we receive, use and (in certain circumstances) disclose your personal information",
            ),
            t(
                "The policy will also explain the steps we take to secure our customers' personal information",
            ),
            t(
                "Finally, the Privacy Policy explains your choices regarding the collection, use and disclosure of your personal information.",
            ),
        ].join(". "),
        [
            t(
                "Protecting personal data and building customer trust is a very important issue for us",
            ),
            t(
                "Therefore, we will use your name and other information related to you in accordance with the content of the Privacy Policy",
            ),
            t(
                "We only collect necessary information related to sales transactions.",
            ),
        ].join(". "),
        [
            t(
                "We will keep customer information for as long as required by law or for any other purpose",
            ),
            t(
                "You can access the website and browse without having to provide personal details",
            ),
            t(
                "At that time, you are anonymous and we cannot know who you are if you are not logged in to your account.",
            ),
        ].join(". "),
    ];

    return (
        <ul>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul>
    );
}
