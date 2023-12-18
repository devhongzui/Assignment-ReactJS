import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function PhoneNumber({ validate, user }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="text"
                className={
                    validate["phone_number"]
                        ? "form-control is-invalid"
                        : "form-control"
                }
                name="phone_number"
                defaultValue={user["phone_number"]}
                autoComplete="phone_number"
            />
            <label>{t("Phone number")}</label>
            <ValidateMessage field={validate["phone_number"]} />
        </div>
    );
}
