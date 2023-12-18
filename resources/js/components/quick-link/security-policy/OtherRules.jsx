import { useTranslation } from "react-i18next";

export default function OtherRules({ tag, title }) {
    const { t } = useTranslation();

    const list = [
        [
            t("We may use your personal information for market research"),
            t("Details will be hidden and used for statistics only"),
            t("You can refuse to participate at any time"),
            t(
                "Any responses to surveys or opinion polls that we ask you to complete will not be passed on to third parties",
            ),
            t(
                "The only thing necessary is to reveal your email if you want to participate",
            ),
            t("The response will be saved separately from your email."),
        ].join(". "),
        [
            t(
                "You will receive information about us, about the website, other websites, products, sales, newsletters, anything related to group companies or business partners",
            ),
            t(
                "If you do not want to receive this information, please click on the opt-out link in any email we send you",
            ),
            t(
                "Within 7 days of receiving your instructions, we will stop sending information",
            ),
            t("If it is unclear, we will contact you."),
        ].join(". "),
        [
            t(
                "We will continue to anonymize user data on the website and use it for a variety of purposes, including determining the user's location and usage of certain aspects of the website or links contained in emails. to users and provide that anonymous data to third parties such as publishers",
            ),
            t(
                "However, this data does not have the ability to identify individuals.",
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
