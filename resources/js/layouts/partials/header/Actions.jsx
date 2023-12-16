import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { userData } from "../../../reduxers/user.jsx";

const ImageStyle = styled.img`
    width: 25px;
    height: 25px;
`;

export default function Actions() {
    const { t } = useTranslation();

    const user = useSelector(userData);

    const logoutBtn = (
        <li>
            <button
                className="dropdown-item"
                type="button"
                role="button"
                aria-label={t("Logout")}
            >
                {t("Logout")}
            </button>
        </li>
    );

    const nav = user ? (
        <div className="dropdown">
            <button
                className="btn btn-outline-primary mb-2"
                type="button"
                role="button"
                data-bs-toggle="dropdown"
            >
                <ImageStyle
                    src={user["avatar"]}
                    alt={t("Avatar")}
                    className="rounded-5"
                />
                <span> {user.name}</span>
            </button>
            <ul className="dropdown-menu">
                {!user["email_verified_at"] ? (
                    logoutBtn
                ) : (
                    <>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item"
                                role="link"
                                aria-label={t("Dashboard")}
                            >
                                {t("Dashboard")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item"
                                role="link"
                                aria-label={t("Profile")}
                            >
                                {t("Profile")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="dropdown-item"
                                role="link"
                                aria-label={t("Change password")}
                            >
                                {t("Change password")}
                            </Link>
                        </li>
                        <hr className="dropdown-divider" />
                        {logoutBtn}
                    </>
                )}
            </ul>
        </div>
    ) : (
        <>
            <Link
                to="login"
                role="button"
                className="btn btn-outline-primary me-2"
                aria-label={t("Login")}
            >
                {t("Login")}
            </Link>
            <Link
                to="register"
                role="button"
                className="btn btn-primary"
                aria-label={t("Register")}
            >
                {t("Register")}
            </Link>
        </>
    );

    return (
        <div className="row">
            <div className="col-md-6 col-xl-auto mb-2 mb-xl-0 me-xl-2">
                <div className="d-flex justify-content-end justify-content-md-start">
                    <button
                        className="btn"
                        type="button"
                        role="button"
                        aria-label={t("Theme")}
                    >
                        <i className="fa-solid fa-moon"></i>
                    </button>
                    <button
                        className="btn"
                        type="button"
                        role="button"
                        aria-label={t("Language")}
                    >
                        <i className="fa-solid fa-language"></i>
                    </button>
                </div>
            </div>
            <div className="col-md-6 col-xl-auto mb-2 mb-xl-0 ms-xl-2">
                <div className="d-flex justify-content-end">{nav}</div>
            </div>
        </div>
    );
}
