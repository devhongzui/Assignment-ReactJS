import { initSite, urlHelper } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";
import { setToast } from "../../../reduxers/toast.jsx";

export default function VerifyEmail() {
    const dispatch = useDispatch();

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
                dispatch(setToast(success.data));

                setTimeout(
                    () =>
                        success.data.redirect
                            ? (location.href = success.data.redirect)
                            : location.reload(),
                    5000,
                );
            })
            .catch((error) => {
                dispatch(setToast(error.response.data.message));
            });
    }

    const user = useSelector(userData);

    return (
        <Form title={web.title} image={web.image}>
            <div>
                <span>{t("Verification email has been sent")} </span>
                <strong>{user.email}</strong>
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
