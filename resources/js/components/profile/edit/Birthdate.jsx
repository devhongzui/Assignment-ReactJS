import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function Birthdate({ birthdate, validate_message }) {
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
                defaultValue={birthdate}
            />
            <label>{t("Birthdate")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
