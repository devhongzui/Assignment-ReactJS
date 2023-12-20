import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { setToast } from "../../../../reduxers/toast.jsx";
import { useDispatch } from "react-redux";
import { urlHelper } from "../../../../helper.js";
import { refreshUser } from "../../../../reduxers/user.jsx";
import i18next from "i18next";

const ImageStyle = styled.img`
    width: 25px;
    height: 25px;
`;

export default function User({ user }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    function callApi() {
        axios
            .post(urlHelper("logout"))
            .then((success) => {
                const close_event = () => {
                    navigate(`/${i18next.language}`);

                    dispatch(refreshUser());

                    dispatch(setToast(null));
                };

                dispatch(
                    setToast({
                        message: success.data.message,
                        close_event: close_event,
                    }),
                );

                setTimeout(close_event, 5000);
            })
            .catch((error) => {
                dispatch(setToast({ message: error.response.data.message }));
            });
    }

    const logoutBtn = (
        <li>
            <button
                className="dropdown-item"
                type="button"
                role="button"
                aria-label={t("Logout")}
                onClick={callApi}
            >
                {t("Logout")}
            </button>
        </li>
    );

    return (
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
                                to={urlHelper("#")}
                                className="dropdown-item"
                                role="link"
                                aria-label={t("Dashboard")}
                            >
                                {t("Dashboard")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={urlHelper("user/profile-information")}
                                className="dropdown-item"
                                role="link"
                                aria-label={t("Profile")}
                            >
                                {t("Profile")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={urlHelper("user/change-password")}
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
    );
}
