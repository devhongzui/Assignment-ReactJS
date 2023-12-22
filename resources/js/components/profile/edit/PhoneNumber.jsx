import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function PhoneNumber({ phone_number, validate_message }) {
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
                name="phone_number"
                defaultValue={phone_number}
                autoComplete="phone_number"
            />
            <label>{t("Phone number")}</label>
            <ValidateMessage field={validate_message} />
        </div>
    );
}
