import { useTranslation } from "react-i18next";
import ValidateMessage from "../login/ValidateMessage.jsx";

export default function Birthdate({ validate_message }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="date"
                className={
                    validate_message
                        ? "form-control is-invalid"
                        : "form-control"
                }
                name="birthdate"
            />
            <label>{t("Birthdate")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
