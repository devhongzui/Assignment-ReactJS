import { useTranslation } from "react-i18next";

export default function SharePersonalData({ tag, title }) {
    const { t } = useTranslation();

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <ul>
                <li>
                    {[
                        t(
                            "Partners will be solely responsible for the processing of your personal data once received from us, meaning you must contact the partner in question with any related requests. to your rights under applicable data protection laws",
                        ),
                        t(
                            "We recommend that you read their partners' respective privacy policies for information about how they process your personal data.",
                        ),
                    ].join(". ")}
                </li>
                <li>
                    {t(
                        "We will also share your personal data with other companies (so-called “data processors”) necessary to provide the services you request, e.g. provide call center operator services and our other suppliers and vendors who process your personal data when providing their services to us (e.g. external storage ).",
                    )}
                </li>
            </ul>
        </section>
    );
}
