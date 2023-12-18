import { useTranslation } from "react-i18next";

export default function DataSecurity({ tag, title }) {
    const { t } = useTranslation();

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <p>
                {[
                    t(
                        "To keep your personal data secure, we have implemented a number of technical and organizational security measures",
                    ),
                    t(
                        "For example, we maintain high levels of technical security in all systems (including traceability, data disaster recovery, access restrictions, ...)",
                    ),
                    t(
                        "Additionally, we have put in place policies to ensure that our employees (subject of course to confidentiality obligations) do not use personal data unnecessarily",
                    ),
                    t(
                        "Such policies also set out our standards when we contract with suppliers or introduce new IT systems within our operations.",
                    ),
                ].join(". ")}
            </p>
        </section>
    );
}
