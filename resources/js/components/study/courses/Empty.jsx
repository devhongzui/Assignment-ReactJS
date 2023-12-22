import { useTranslation } from "react-i18next";

export default function Empty() {
    const { t } = useTranslation();

    return (
        <div className="col">
            <div className="alert alert-danger">
                {t("The requested data was not found!")}
            </div>
        </div>
    );
}
