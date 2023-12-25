import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";

export default function Search() {
    const { t } = useTranslation();

    const user = useSelector(userData);

    return user && !user["email_verified_at"] ? null : (
        <input
            type="search"
            className="form-control form-control-sm bg-transparent w-75 mx-xl-auto"
            placeholder={t("Search")}
            aria-label={t("Search")}
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            readOnly
        />
    );
}
