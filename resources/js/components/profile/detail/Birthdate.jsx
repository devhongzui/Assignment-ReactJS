import { useTranslation } from "react-i18next";

export default function Birthdate({ user }) {
    const { t } = useTranslation();

    return (
        user.birthdate && (
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("Birthdate")}
                </div>
                <div className="col-md-7">{user.birthdate}</div>
            </div>
        )
    );
}
