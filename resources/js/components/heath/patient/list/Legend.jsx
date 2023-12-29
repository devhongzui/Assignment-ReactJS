import { useTranslation } from "react-i18next";

export default function Legend() {
    const { t } = useTranslation();

    return (
        <div className="row">
            <div className="col-3">
                <strong>{t("Legend").toUpperCase()}</strong>
            </div>
            <div className="col-2">
                <i className="fa-solid fa-flag text-success"></i>{" "}
                {t("Normal BP")}
            </div>
            <div className="col-2">
                <i className="fa-solid fa-flag text-warning"></i>{" "}
                {t("Elevated BP")}
            </div>
            <div className="col-2">
                <i className="fa-solid fa-flag text-danger"></i>{" "}
                {t("High BP / Hypertenive")}
            </div>
            <div className="col-2">
                <i className="fa-solid fa-flag text-secondary"></i>{" "}
                {t("Not Evaluable")}
            </div>
        </div>
    );
}
