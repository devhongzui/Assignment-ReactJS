import { useTranslation } from "react-i18next";
import ValidateMessage from "../login/ValidateMessage.jsx";

export default function Gender({ validate_message }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <select
                className={
                    validate_message ? "form-select is-invalid" : "form-select"
                }
                name="gender"
            >
                <option>{t("Choose")}</option>
                <option value="0">{t("Male")}</option>
                <option value="1">{t("Female")}</option>
                <option value="2">{t("N/A")}</option>
            </select>
            <label>{t("Gender")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
