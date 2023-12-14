import { useTranslation } from "react-i18next";
import ValidateMessage from "../login/ValidateMessage.jsx";
import { Link } from "react-router-dom";
import i18n from "i18next";

export default function Terms({ validate }) {
    const { t } = useTranslation();

    return (
        <div className="form-check mb-3">
            <input
                id="terms-register-form"
                type="checkbox"
                className={
                    validate?.terms
                        ? "form-check-input is-invalid"
                        : "form-check-input"
                }
                name="terms"
                defaultChecked
            />
            <label htmlFor="terms-register-form" className="form-check-label">
                <span>{t("Agree with")} </span>
                <Link
                    to={`/${i18n.language}/privacy-policy`}
                    className="link fw-bolder"
                    role="link"
                    aria-label={t("Privacy policy")}
                >
                    {t("Privacy policy")}
                </Link>
                <span> {t("and")} </span>
                <Link
                    to={`/${i18n.language}/security-policy`}
                    className="link fw-bolder"
                    role="link"
                    aria-label={t("Security policy")}
                >
                    {t("Security policy")}
                </Link>
            </label>
            <ValidateMessage field={validate?.terms} />
        </div>
    );
}
