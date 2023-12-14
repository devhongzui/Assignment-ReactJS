import { useTranslation } from "react-i18next";

export default function Partner({ tag, title }) {
    const { t } = useTranslation();

    const list = [
        [
            t("We may pass your information to other companies in the group"),
            t(
                "We may transfer your information to agents and subcontractors within the framework of the Privacy Policy",
            ),
            t(
                "For example, we will rely on third parties for delivery, payment collection, data analysis, marketing and customer service support",
            ),
            t(
                "We may exchange information with third parties for the purposes of fraud prevention and credit risk reduction",
            ),
            t(
                "We may transfer our database of your personal information if we sell the whole company or just part of it",
            ),
            t(
                "Within the framework of the Privacy Policy, we do not sell or disclose your personal data to third parties without your prior consent unless this is necessary for the terms of the Privacy Policy or we are required to do so in accordance with the provisions of the Law",
            ),
            t(
                "The Website may include third party advertisements and links to other websites or frames of other websites. Please note that we have no duty to secure the information or content of third parties or other websites, or any third parties to whom we transfer data in accordance with this Privacy Policy.",
            ),
        ].join(". "),

        t(
            "The customer behavior tracking system we use on Display Advertising channels (eg Customer Remarketing, DoubleClick advertising campaign management system, customer preferences with Google tools Analytics...) can collect information such as age, gender, interests and number of interactions with ad appearances.",
        ),
        t(
            "With the ad settings feature, users or customers can choose to exit the customer behavior tracking feature of Google Analytics and choose how the Ad Display channel appears on Google.",
        ),
        t(
            "We and third-party vendors, including Google, may use Google Analytics cookies or third-party cookies (such as DoubleClick) for information collection, optimization and advertising purposes. based on users' past website visits.",
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
