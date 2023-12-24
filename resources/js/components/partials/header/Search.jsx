import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";

export default function Search() {
    const { t } = useTranslation();

    const user = useSelector(userData);

    return (
        <div className="col-12 col-xl-auto mt-3 mb-2 mt-xl-0 mb-xl-0 mx-xl-auto">
            {user && !user["email_verified_at"] ? null : (
                <input
                    type="search"
                    className="form-control form-control border-primary me-2"
                    placeholder={t("Search")}
                    aria-label={t("Search")}
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                />
            )}
        </div>
    );
}
