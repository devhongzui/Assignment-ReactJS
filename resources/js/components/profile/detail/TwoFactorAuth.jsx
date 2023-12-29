import { Link } from "react-router-dom";
import { urlHelper } from "../../../helper.js";
import { useTranslation } from "react-i18next";

export default function TwoFactorAuth({ user }) {
    const { t } = useTranslation();

    const text = user["two_factor_confirmed_at"]
        ? {
              class: "text-success",
              label: t("Enabled"),
          }
        : {
              class: "text-danger",
              label: t("Disabled"),
          };

    return (
        <div className="row mb-3">
            <div className="offset-md-1 col-md-3 text-primary fw-bold">
                <span>{t("Two step authentication")}</span>
                <span className={text.class}> ({text.label})</span>
            </div>
            <div className="col-md-7">
                <div className="d-flex align-items-center">
                    <Link
                        to={urlHelper("user/profile-two-step-authentication")}
                        className="btn btn-primary mb-2 me-2"
                        aria-label={t("Setup")}
                    >
                        {t("Setup")}
                    </Link>
                </div>
            </div>
        </div>
    );
}
