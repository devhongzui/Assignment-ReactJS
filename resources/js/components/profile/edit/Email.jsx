import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function Email({ validate, user }) {
    const { t } = useTranslation();

    return (
        <div className="form-floating mb-3">
            <input
                type="email"
                className={
                    validate?.email ? "form-control is-invalid" : "form-control"
                }
                name="email"
                defaultValue={user.email}
                autoComplete="email"
            />
            <label>{t("Email")}</label>
            <ValidateMessage field={validate?.email} />
        </div>
    );
}
