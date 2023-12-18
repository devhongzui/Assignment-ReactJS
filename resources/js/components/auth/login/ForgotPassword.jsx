import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { urlHelper } from "../../../helper.js";

export default function ForgotPassword() {
    const { t } = useTranslation();

    return (
        <Link
            to={urlHelper("forgot-password")}
            className="btn text-primary me-2 mb-2"
            role="link"
            aria-label={t("Forgot password")}
        >
            {t("Forgot password")}
        </Link>
    );
}
