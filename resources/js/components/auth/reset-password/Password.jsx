import ValidateMessage from "../login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

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
                autoFocus
            />
            <label>{t("Password")}</label>
            <ValidateMessage field={validate?.password} />
        </div>
    );
}
