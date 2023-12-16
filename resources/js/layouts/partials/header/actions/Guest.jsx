import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Guest() {
    const { t } = useTranslation();

    return (
        <>
            <Link
                to="login"
                role="button"
                className="btn btn-outline-primary me-2"
                aria-label={t("Login")}
            >
                {t("Login")}
            </Link>
            <Link
                to="register"
                role="button"
                className="btn btn-primary"
                aria-label={t("Register")}
            >
                {t("Register")}
            </Link>
        </>
    );
}
