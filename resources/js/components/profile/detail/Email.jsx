import { useTranslation } from "react-i18next";

export default function Email({ user, verifiedBadge }) {
    const { t } = useTranslation();

    return (
        <div className="row mb-3">
            <div className="offset-md-1 col-md-3 text-primary fw-bold">
                {t("Email")}
            </div>
            <div className="col-md-7">
                <span className="me-2">{user.email}</span>
                {verifiedBadge}
            </div>
        </div>
    );
}
