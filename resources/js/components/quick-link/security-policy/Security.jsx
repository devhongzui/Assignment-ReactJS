import { useTranslation } from "react-i18next";

export default function Security({ tag, title }) {
    const { t } = useTranslation();

    const list = [
        [
            t(
                "We take appropriate technical and security measures to prevent unauthorized or unlawful access or loss or destruction or damage to your information",
            ),
            t(
                "When we crawl the web, we collect your personal details on secure servers",
            ),
            t("We use a firewall for the server"),
            t(
                "You should not send full credit or debit card details to us without encryption",
            ),
            t(
                "We maintain physical and electronic safeguards in connection with the collection, storage and disclosure of your information",
            ),
            t(
                "Our security procedures mean that we may sometimes require identification before disclosing personal information to you.",
            ),
        ].join(". "),
        t(
            "We advise you that you should not give payment details to anyone by e-mail, we are not responsible for any loss you may incur in exchanging information. customers via internet or email.",
        ),
        [
            t(
                "You absolutely do not use any programs, tools or other forms to interfere with the system or change the data structure",
            ),
            t(
                "It is strictly forbidden to distribute, propagate or encourage any activities to interfere, sabotage or infiltrate the website system's data",
            ),
            t(
                "Any violation will result in the deprivation of all rights and will be prosecuted before the law if necessary.",
            ),
        ].join(". "),
        t(
            "All transaction information will be kept confidential, but in case required by law enforcement, we will be forced to provide this information to legal authorities.",
        ),
        t(
            "The terms, conditions and content of this website are governed by Vietnamese law and the Vietnamese courts have jurisdiction.",
        ),
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
