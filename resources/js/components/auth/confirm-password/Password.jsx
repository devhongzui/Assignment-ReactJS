import ValidateMessage from "../login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function Password({ validate_message }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="password"
                className={
                    validate_message
                        ? "form-control is-invalid"
                        : "form-control"
                }
                name="password"
                autoFocus
                autoComplete="current-password"
            />
            <label>{t("Password")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
