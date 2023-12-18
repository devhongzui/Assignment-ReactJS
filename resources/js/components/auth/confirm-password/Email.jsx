import ValidateMessage from "../login/ValidateMessage.jsx";
import { useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";
import { useTranslation } from "react-i18next";

export default function Email({ validate }) {
    const { t } = useTranslation();

    const user = useSelector(userData);

    return (
        <div className="form-floating mb-3">
            <input
                type="email"
                className={
                    validate?.email ? "form-control is-invalid" : "form-control"
                }
                name="email"
                value={user.email}
                disabled
                autoComplete="email"
            />
            <label>{t("Email")}</label>
            <ValidateMessage field={validate?.email} />
        </div>
    );
}
