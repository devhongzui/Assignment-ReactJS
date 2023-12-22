import { useTranslation } from "react-i18next";
import ValidateMessage from "./ValidateMessage.jsx";

export default function Email({ validate_message }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="email"
                className={
                    validate_message
                        ? "form-control is-invalid"
                        : "form-control"
                }
                name="email"
                autoFocus
                autoComplete="email"
            />
            <label>{t("Email")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
