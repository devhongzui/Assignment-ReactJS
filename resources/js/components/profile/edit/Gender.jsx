import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function Gender({ validate, user }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <select
                className={
                    validate["gender"]
                        ? "form-control is-invalid"
                        : "form-control"
                }
                name="gender"
                defaultValue={user.gender}
            >
                <option disabled>{t("Choose")}</option>
                <option value="0">{t("Male")}</option>
                <option value="1">{t("Female")}</option>
                <option value="2">{t("N/A")}</option>
            </select>
            <label>{t("Gender")}</label>
            <ValidateMessage field={validate["gender"]} />
        </div>
    );
}
