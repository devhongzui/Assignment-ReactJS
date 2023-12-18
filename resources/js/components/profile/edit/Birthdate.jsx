import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function Birthdate({ validate, user }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="date"
                className={
                    validate["birthdate"]
                        ? "form-control is-invalid"
                        : "form-control"
                }
                name="birthdate"
                defaultValue={user.birthdate}
            />
            <label>{t("Birthdate")}</label>
            <ValidateMessage field={validate["birthdate"]} />
        </div>
    );
}
