import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { checkPasswordConfirm, urlHelper } from "../../../helper.js";
import axios from "axios";
import { setToast } from "../../../reduxers/toast.jsx";
import { useDispatch } from "react-redux";

export default function Actions() {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    function handleDestroyProfile(event) {
        event.preventDefault();

        checkPasswordConfirm();

        axios
            .delete(urlHelper("user/profile-destroy"))
            .then((success) => {
                dispatch(setToast(success.data));

                setTimeout(() => (location.href = success.data.redirect), 5000);
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
