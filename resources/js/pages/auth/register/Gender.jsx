import { useTranslation } from "react-i18next";
import ValidateMessage from "../login/ValidateMessage.jsx";

export default function Gender({ validate }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <select
                className={
                    validate?.gender ? "form-select is-invalid" : "form-select"
                }
                name="gender"
                defaultValue="-1"
            >
                <option value="-1" disabled>
                    {t("Choose")}
                </option>
                <option value="0">{t("Male")}</option>
                <option value="1">{t("Female")}</option>
                <option value="2">{t("N/A")}</option>
            </select>
            <label>{t("Gender")}</label>
            <ValidateMessage field={validate?.gender} />
        </div>
    );
}
