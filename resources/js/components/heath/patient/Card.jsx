import { useTranslation } from "react-i18next";

export default function Card({ item }) {
    const { t } = useTranslation();

    function getStatus(code) {
        switch (code) {
            case 0:
                return {
                    class: "text-success",
                    text: t("Normal BP"),
                };
            case 1:
                return {
                    class: "text-warning",
                    text: t("Elevated BP"),
                };
            case 2:
                return {
                    class: "text-danger",
                    text: t("High BP / Hypertenive"),
                };
            case 3:
                return {
                    class: "text-secondary",
                    text: t("Not Evaluable"),
                };
        }
    }

    return (
        <section className="my-3">
            <div className="card">
                <div className="card-body">
                    <div className="card-text">
                        <div className="row mb-2">
                            <strong className="col-md-2">
                                {t("Full name")}
                            </strong>
                            <div className="col-md-10">
                                {item["first_name"]} {item["last_name"]}
                            </div>
                        </div>
                        <div className="row mb-2">
                            <strong className="col-md-2">{t("Status")}</strong>
                            <div className="col-md-10">
                                <span className={getStatus(item.status).class}>
                                    {getStatus(item.status).text}
                                </span>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <strong className="col-md-2">{t("Contact")}</strong>
                            <div className="col-md-10">
                                <a href={`tel:${item["contacts"]["phone"]}`}>
                                    {item["contacts"]["phone"]}
                                </a>
                                <br />
                                <a href={`mailto:${item["contacts"]["mail"]}`}>
                                    {item["contacts"]["mail"]}
                                </a>
                                <br />
                                {item["contacts"]["other"]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
