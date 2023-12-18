import { useTranslation } from "react-i18next";
import ValidateMessage from "../login/ValidateMessage.jsx";

export default function Password({ validate }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="password"
                className={
                    validate?.password
                        ? "form-control is-invalid"
                        : "form-control"
                }
                name="password"
            />
            <label>{t("Password")}</label>
            <ValidateMessage field={validate?.password} />
        </div>
    );
}
