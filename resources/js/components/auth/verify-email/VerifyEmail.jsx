import { initSite, urlHelper } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, userData } from "../../../reduxers/user.jsx";
import { setToast } from "../../../reduxers/toast.jsx";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";

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

        axios
            .post(urlHelper("email/verification-notification"))
            .then((success) => {
                const close_event = () => {
                    if (success.data["verified"]) {
                        dispatch(refreshUser());

                        navigate(`/${i18next.language}`);
                    }

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
