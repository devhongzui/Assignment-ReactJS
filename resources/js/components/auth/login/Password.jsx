import { useTranslation } from "react-i18next";
import ValidateMessage from "./ValidateMessage.jsx";

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
            />
            <label>{t("Password")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
