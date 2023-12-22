import { initSite, urlHelper } from "../../helper.js";
import Form from "../../templates/Form.jsx";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, userData } from "../../reduxers/user.jsx";
import { setToast } from "../../reduxers/toast.jsx";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";
import { verifyEmail } from "../../services/auth.jsx";

export default function VerifyEmail() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Verify email"),
        image: "storage/images/undraw/Verified.png",
    };

    initSite(web);

    function callApi(event) {
        event.preventDefault();

        verifyEmail()
            .then((success) => {
                dispatch(setToast(success.data));

                if (success.data["verified"]) {
                    dispatch(refreshUser());

                    navigate(`/${i18next.language}`);
                }
            })
            .catch((error) => {
                dispatch(setToast(error.response.data));
            });
    }

    const user = useSelector(userData);

    return (
        <Form title={web.title} image={web.image}>
            <div>
                <span>{t("Verification email has been sent")} </span>
                <strong>{user?.email}</strong>
            </div>
            <div>
                {t("Please check your Inbox or")}{" "}
                <a
                    href={urlHelper("email/verification-notification")}
                    className="text-decoration-underline link-underline-primary"
                    role="link"
                    aria-label={t("click here to try again")}
                    onClick={callApi}
                >
                    {t("click here to try again")}
                </a>
            </div>
        </Form>
    );
}
