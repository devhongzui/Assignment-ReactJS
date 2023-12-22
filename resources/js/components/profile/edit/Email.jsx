import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

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
                defaultValue={email}
                autoComplete="email"
            />
            <label>{t("Email")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
