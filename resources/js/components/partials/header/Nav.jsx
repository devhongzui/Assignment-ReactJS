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
                    to={urlHelper("patients")}
                    className="nav-link"
                    aria-label={t("Patients Management")}
                >
                    {t("Patients Management")}
                </Link>
            </li>
            <li className="nav-item">
                <div className="dropdown">
                    <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="dropdown"
                        aria-label={t("Other projects")}
                    >
                        {t("Other projects")}
                    </a>
                    <ul className="dropdown-menu mb-2">
                        <li className="dropdown-item">
                            <Link
                                to={urlHelper("courses")}
                                className="nav-link"
                                aria-label={t("Courses Management")}
                            >
                                {t("Courses Management")}
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    );
}
