import { useTranslation } from "react-i18next";

export default function Competition({ tag, title }) {
    const { t } = useTranslation();

    return (
        <section id={tag}>
            <h3>{title}</h3>
            <p>
                {[
                    t(
                        "In any competition, we will use data to announce winners and promote offers",
                    ),
                    t(
                        "You can register to participate for more details about the contest.",
                    ),
                ].join(". ")}
            </p>
        </section>
    );
}
