import { useTranslation } from "react-i18next";

export default function Permission({ tag, title }) {
    const { t } = useTranslation();

    const list = [
        {
            title: t("Access rights"),
            description: [
                t("You have the right to access the personal data we process"),
                t(
                    "You are also entitled to receive certain information about what we do with your personal data",
                ),
                t("This information is provided in this document."),
            ].join(". "),
        },
        {
            title: t("Right to amend"),
            description: [
                t(
                    "In certain cases, you have the right to have inaccurate personal data relating to you corrected and to have incomplete personal data completed",
                ),
                t(
                    "Please note that we may not be able to correct inaccurate personal data provided by you due to, for example, airline rules and that such a particular change may incur costs.",
                ),
            ].join(". "),
        },
        {
            title: t("Right to deletion"),
            description: [
                t(
                    "In certain cases, you have the right to have your personal data erased",
                ),
                t("This is called the “right to be forgotten”."),
            ].join(". "),
        },
        {
            title: t("Right to restriction of processing"),
            description: t(
                "In certain circumstances, you have the right to restrict how we use your personal data.",
            ),
        },
        {
            title: t("Right to data portability"),
            description: t(
                "You have the right to receive your personal data (or to have your personal data transmitted directly to another data controller) in a structured, commonly used and readable format I.",
            ),
        },
        {
            title: t("Right to object"),
            description: [
                t(
                    "You have the right to object to certain types of processing of your personal data that we carry out",
                ),
                t(
                    'This applies to all activities based on our "legitimate interests".',
                ),
            ].join(". "),
        },
        {
            description: t(
                "Finally, you also have the right to complain to the applicable data protection supervisory authority.",
            ),
        },
    ];
    return (
        <section id={tag}>
            <h3>{title}</h3>
            <p>
                {[
                    t(
                        "Under applicable data protection laws, you have certain rights as a “data subject”",
                    ),
                    t("Below we have listed your rights"),
                    t("Your rights include:"),
                ].join(". ")}
            </p>
            <ul>
                {list.map((value, index) => (
                    <li>
                        {value.title && <strong>{value.title} </strong>}
                        <span>{value.description}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
