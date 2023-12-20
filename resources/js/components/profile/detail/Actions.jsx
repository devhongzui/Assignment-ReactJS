import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { checkPasswordConfirm, urlHelper } from "../../../helper.js";
import axios from "axios";
import { setToast } from "../../../reduxers/toast.jsx";
import { useDispatch } from "react-redux";
import i18next from "i18next";
import { refreshUser } from "../../../reduxers/user.jsx";

export default function Actions() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    function handleDestroyProfile(event) {
        event.preventDefault();

        checkPasswordConfirm();

        axios
            .delete(urlHelper("user/profile-destroy"))
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

    return (
        <div className="offset-md-4">
            <Link
                to={urlHelper("user/profile-edit")}
                role="link"
                className="btn btn-primary mb-2 me-2"
                aria-label={t("Profile edit")}
            >
                {t("Profile edit")}
            </Link>
            <Link
                to={urlHelper("user/change-password")}
                role="link"
                className="btn btn-warning mb-2 me-2"
                aria-label={t("Change password")}
            >
                {t("Change password")}
            </Link>
            <a
                href={urlHelper("user/profile-destroy")}
                role="link"
                className="btn btn-danger mb-2"
                aria-label={t("Profile destroy")}
                onClick={handleDestroyProfile}
            >
                {t("Profile destroy")}
            </a>
        </div>
    );
}
