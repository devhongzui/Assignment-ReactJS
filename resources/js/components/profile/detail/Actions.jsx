import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urlHelper } from "../../../helper.js";

export default function Actions() {
    const { t } = useTranslation();

    return (
        <div className="offset-md-4">
            <Link
                to={urlHelper("user/profile-edit")}
                role="link"
                className="btn btn-primary mb-2 me-2"
                aria-label={t("Profile edit")}
            >
                {t("Profile edit")}
            </Link>
            <Link
                to={urlHelper("user/change-password")}
                role="link"
                className="btn btn-warning mb-2 me-2"
                aria-label={t("Change password")}
            >
                {t("Change password")}
            </Link>
            <Link
                to={urlHelper("#")}
                role="link"
                className="btn btn-danger mb-2"
                aria-label={t("Profile destroy")}
            >
                {t("Profile destroy")}
            </Link>
        </div>
    );
}
