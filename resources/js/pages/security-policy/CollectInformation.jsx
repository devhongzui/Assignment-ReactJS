import { useTranslation } from "react-i18next";

export default function CollectInformation({ tag, title }) {
    const { t } = useTranslation();

    const list = [
        t(
            "We will collect a variety of information from you when you want to place an order on the web.",
        ),
        [
            t(
                "We collect, store and process your information for the purchase process and for future communications, and to provide services",
            ),
            t(
                "We do not limit personal information: title, name, gender, date of birth, email, address, delivery address, phone number, fax, payment details, card or debit payment details. Bank account details.",
            ),
        ].join(". "),
        [
            t(
                "We will use the information you have provided to process orders, provide services and information requested through the website and according to your requests",
            ),
            t(
                "Furthermore, we will use such information to manage your account; verify and perform online transactions, audit data downloads from the web; improve website layout and content and adapt it to users; Identify visitors to the website, send information including product and service information, if you show no signs of refusal",
            ),
            t(
                "If you do not want to receive any of our marketing communications, you can opt out at any time.",
            ),
        ].join(". "),
        t(
            "We may pass your name and address to a third party who delivers the goods to you (for example to a courier or supplier).",
        ),
        [
            t(
                "Your order details are kept by us, but for security reasons we cannot make them available directly",
            ),
            t(
                "However, you can access information by logging into your account on the web",
            ),
            t(
                "Here you will see your order details, received and sent products and email, bank and newsletter details for your long-term subscriptions",
            ),
            t(
                "You commit to keeping your personal data confidential and are not allowed to disclose it to third parties",
            ),
            t(
                "We do not accept any responsibility for password misuse if this is not our fault.",
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
