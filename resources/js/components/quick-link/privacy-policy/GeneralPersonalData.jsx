import { useTranslation } from "react-i18next";

export default function GeneralPersonalData({ tag, title }) {
    const { t } = useTranslation();

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <ul>
                <li>
                    {[
                        t(
                            "Typically, the type of personal data we collect is information we need to enable you to provide warranty and service support",
                        ),
                        t(
                            "This information includes information such as your full name, date of birth, phone number and email address",
                        ),
                        t(
                            "The personal data that we must receive in order to be able to help you arrange your order for products that you have placed through our website is the only data that is required to be provided",
                        ),
                        t(
                            "Depending on the type of travel service you use, we may also collect your frequent flyer number, information about your dietary requirements and health issues (if any) guests and other details relating to your travel arrangements or information requested by another travel service provider (such as airlines and hotels)",
                        ),
                        t("This is not a complete list"),
                        t(
                            "If you call our support department, we will collect the data you provide during the call",
                        ),
                        t(
                            "As you can see below, our cookies also collect some information.",
                        ),
                    ].join(". ")}
                </li>
                <li>
                    {[
                        t(
                            "If you make a booking for someone else through our website, we will request that person's personal data",
                        ),
                        t(
                            "In those cases, we expect you to inform those individuals of this privacy policy.",
                        ),
                    ].join(". ")}
                </li>
            </ul>
        </section>
    );
}
