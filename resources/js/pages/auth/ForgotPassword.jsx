import { initSite } from "../../helper.js";
import Form from "../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../../components/auth/login/Submit.jsx";
import { useDispatch } from "react-redux";
import { setToast } from "../../reduxers/toast.jsx";
import Email from "../../components/auth/forgot-password/Email.jsx";
import { forgotPassword } from "../../services/auth.jsx";

export default function ForgotPassword() {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const web = {
        title: t("Forgot password"),
        image: "storage/images/undraw/Forgot_password.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        setValidate({});

        forgotPassword(event.target.elements)
            .then((success) => {
                dispatch(setToast(success.data));
            })
            .catch((error) => {
                if (error.response.data.errors)
                    setValidate(error.response.data.errors);
                else dispatch(setToast(error.response.data));
            });
    }

    return (
        <Form title={web.title} image={web.image}>
            <form onSubmit={callApi}>
                <fieldset>
                    <Email validate_message={validate.email} />
                </fieldset>
                <Submit label={t("Submit")} />
            </form>
        </Form>
    );
}
