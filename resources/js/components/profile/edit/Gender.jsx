import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function Gender({ gender, validate_message }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <select
                className={
                    validate_message
                        ? "form-control is-invalid"
                        : "form-control"
                }
                name="gender"
                defaultValue={gender}
            >
                <option disabled>{t("Choose")}</option>
                <option value="0">{t("Male")}</option>
                <option value="1">{t("Female")}</option>
                <option value="2">{t("N/A")}</option>
            </select>
            <label>{t("Gender")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
