import { useTranslation } from "react-i18next";
import ValidateMessage from "../login/ValidateMessage.jsx";

export default function Name({ validate }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="text"
                className={
                    validate?.name ? "form-control is-invalid" : "form-control"
                }
                name="name"
                autoFocus
                autoComplete="name"
            />
            <label>{t("Full name")}</label>
            <ValidateMessage field={validate?.name} />
        </div>
    );
}
