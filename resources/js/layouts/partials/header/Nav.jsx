import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav() {
    const { t } = useTranslation();

    const user = useSelector((state) => state.user.value);

    return user && !user["email_verified_at"] ? null : (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link
                    to="#"
                    role="link"
                    className="nav-link text-end px-2"
                    aria-label={t("Courses")}
                >
                    {t("Courses")}
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="#"
                    role="link"
                    className="nav-link text-end px-2"
                    aria-label={t("Tools")}
                >
                    {t("Tools")}
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="#"
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
