import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function Name({ name, validate_message }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="text"
                className={
                    validate_message
                        ? "form-control is-invalid"
                        : "form-control"
                }
                name="name"
                defaultValue={name}
                autoFocus
                autoComplete="name"
            />
            <label>{t("Full name")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
