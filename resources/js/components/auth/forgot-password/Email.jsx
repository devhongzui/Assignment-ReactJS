import { useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";
import { useTranslation } from "react-i18next";
import ValidateMessage from "../login/ValidateMessage.jsx";

export default function Email({ validate }) {
    const { t } = useTranslation();

    const user = useSelector(userData);

    return (
        <div className="form-floating mb-3">
            {user ? (
                <input
                    type="email"
                    className={
                        validate?.email
                            ? "form-control is-invalid"
                            : "form-control"
                    }
                    name="email"
                    readOnly
                    value={user.email}
                />
            ) : (
                <input
                    type="email"
                    className={
                        validate?.email
                            ? "form-control is-invalid"
                            : "form-control"
                    }
                    name="email"
                    autoFocus
                    autoComplete
                />
            )}
            <label>{t("Email")}</label>
            <ValidateMessage field={validate?.email} />
        </div>
    );
}
