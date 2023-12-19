import ValidateMessage from "../../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function ({ validate }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="number"
                className={
                    validate?.code ? "form-control is-invalid" : "form-control"
                }
                name="code"
                autoFocus
            />
            <label>{t("Code")}</label>
            <ValidateMessage field={validate?.code} />
        </div>
    );
}
