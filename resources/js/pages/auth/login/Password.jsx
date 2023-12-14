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
            />
            <label>{t("Password")}</label>
            {validate?.password && (
                <strong className="invalid-feedback" role="alert">
                    {validate.password[0]}
                </strong>
            )}
        </div>
    );
}
