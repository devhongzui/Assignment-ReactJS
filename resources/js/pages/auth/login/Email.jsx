import { useTranslation } from "react-i18next";

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
                autoFocus
                autoComplete="email"
            />
            <label>{t("Email")}</label>
            {validate?.email && (
                <strong className="invalid-feedback" role="alert">
                    {validate.email[0]}
                </strong>
            )}
        </div>
    );
}
