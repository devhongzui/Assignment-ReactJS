import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function Name({ validate, user }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="text"
                className={
                    validate?.name ? "form-control is-invalid" : "form-control"
                }
                name="name"
                defaultValue={user.name}
                autoFocus
                autoComplete="name"
            />
            <label>{t("Full name")}</label>
            <ValidateMessage field={validate?.name} />
        </div>
    );
}
