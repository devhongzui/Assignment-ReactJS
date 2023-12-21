import ValidateMessage from "../login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";

export default function RecoveryCode({ validate }) {
    const { t } = useTranslation();

    return (
        <div className="card-body p-0">
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className={
                        validate["recovery_code"]
                            ? "form-control is-invalid"
                            : "form-control"
                    }
                    name="recovery_code"
                />
                <label>{t("Recovery Code")}</label>
                <ValidateMessage field={validate["recovery_code"]} />
            </div>
        </div>
    );
}
