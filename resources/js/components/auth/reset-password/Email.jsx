import { useTranslation } from "react-i18next";
import ValidateMessage from "../login/ValidateMessage.jsx";

export default function Email({ email, validate_message }) {
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
                value={email}
                readOnly
                autoComplete="email"
            />
            <label>{t("Email")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
