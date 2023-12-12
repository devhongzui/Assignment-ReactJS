import { useTranslation } from "react-i18next";

export default function Nav() {
    const { t } = useTranslation();

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a
                    href="#"
                    role="link"
                    className="nav-link text-end px-2"
                    aria-label={t("Courses")}
                >
                    {t("Courses")}
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#"
                    role="link"
                    className="nav-link text-end px-2"
                    aria-label={t("Tools")}
                >
                    {t("Tools")}
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#"
                    role="link"
                    className="nav-link text-end px-2"
                    aria-label={t("Musics")}
                >
                    {t("Musics")}
                </a>
            </li>
        </ul>
    );
}
