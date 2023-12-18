import { useTranslation } from "react-i18next";

export default function RememberMe() {
    const { t } = useTranslation();

    return (
        <div className="form-check mb-3">
            <input
                id="remember_me-login-form"
                type="checkbox"
                className="form-check-input"
                name="remember_me"
                defaultChecked
            />

            <label
                htmlFor="remember_me-login-form"
                className="form-check-label"
            >
                {t("Remember me")}
            </label>
        </div>
    );
}
