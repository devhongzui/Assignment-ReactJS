import { useTranslation } from "react-i18next";
import ValidateMessage from "../login/ValidateMessage.jsx";

export default function Email({ validate }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="email"
                className={
                    validate?.email ? "form-control is-invalid" : "form-control"
                }
                name="email"
                autoComplete="email"
            />
            <label>{t("Email")}</label>
            <ValidateMessage field={validate?.email} />
        </div>
    );
}
