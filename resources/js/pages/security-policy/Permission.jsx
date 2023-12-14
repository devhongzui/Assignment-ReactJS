import { useTranslation } from "react-i18next";

export default function Permission({ tag, title }) {
    const { t } = useTranslation();

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <p>
                {[
                    t(
                        "You have the right to request access to your personal data, and the right to request us to correct errors in your data without charge",
                    ),
                    t(
                        "You have the right at any time to ask us to stop using your personal data for marketing purposes.",
                    ),
                ].join(". ")}
            </p>
        </section>
    );
}
