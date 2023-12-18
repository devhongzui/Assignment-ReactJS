import { useTranslation } from "react-i18next";

export default function PhoneNumber({ user, verifiedBadge, notVerifyBadge }) {
    const { t } = useTranslation();

    return (
        user["phone_number"] && (
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("Phone number")}
                </div>
                <div className="col-md-7">
                    <span className="me-2">{user["phone_number"]}</span>
                    {user["phone_number_verified_at"]
                        ? verifiedBadge
                        : notVerifyBadge}
                </div>
            </div>
        )
    );
}
