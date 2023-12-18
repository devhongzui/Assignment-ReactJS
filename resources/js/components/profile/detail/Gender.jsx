import { useTranslation } from "react-i18next";

export default function Gender({ user }) {
    const { t } = useTranslation();

    function getGender(genderCode) {
        switch (genderCode) {
            case 0:
                return t("Male");
            case 1:
                return t("Female");
            case 2:
            default:
                return t("N/A");
        }
    }

    return (
        user.gender !== null && (
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("Gender")}
                </div>
                <div className="col-md-7">{getGender(user.gender)}</div>
            </div>
        )
    );
}
