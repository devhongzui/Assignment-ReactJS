import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";
import { urlHelper } from "../../../helper.js";

export default function Nav() {
    const { t } = useTranslation();

    const user = useSelector(userData);

    return user && !user["email_verified_at"] ? null : (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link
                    to={urlHelper("courses")}
                    role="link"
                    className="nav-link text-end px-2"
                    aria-label={t("Courses")}
                >
                    {t("Courses")}
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={urlHelper("#")}
                    role="link"
                    className="nav-link text-end px-2"
                    aria-label={t("Tools")}
                >
                    {t("Tools")}
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={urlHelper("#")}
                    role="link"
                    className="nav-link text-end px-2"
                    aria-label={t("Musics")}
                >
                    {t("Musics")}
                </Link>
            </li>
        </ul>
    );
}
