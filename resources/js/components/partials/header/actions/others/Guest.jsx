import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { urlHelper } from "../../../../../helper.js";

export default function Guest() {
    const { t } = useTranslation();

    return (
        <>
            <Link
                to={urlHelper("login")}
                role="button"
                className="btn btn-sm btn-outline-primary me-2"
                aria-label={t("Login")}
            >
                {t("Login")}
            </Link>
            <Link
                to={urlHelper("register")}
                role="button"
                className="btn btn-sm btn-primary"
                aria-label={t("Register")}
            >
                {t("Register")}
            </Link>
        </>
    );
}
