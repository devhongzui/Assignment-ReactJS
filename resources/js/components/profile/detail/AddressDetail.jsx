import { useTranslation } from "react-i18next";

export default function AddressDetail({ user }) {
    const { t } = useTranslation();

    return (
        user.address_detail && (
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("Address detail")}
                </div>
                <div className="col-md-7">{user.address_detail}</div>
            </div>
        )
    );
}
