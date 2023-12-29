import { useTranslation } from "react-i18next";

export default function PasswordConfirmation() {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="password"
                className="form-control"
                name="password_confirmation"
                autoFocus
                autoComplete="new-password"
            />
            <label>{t("Password confirm")}</label>
        </div>
    );
}
