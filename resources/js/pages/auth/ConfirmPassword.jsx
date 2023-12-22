import { initSite } from "../../helper.js";
import Form from "../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../../components/auth/login/Submit.jsx";
import { useDispatch } from "react-redux";
import Email from "../../components/auth/confirm-password/Email.jsx";
import Password from "../../components/auth/confirm-password/Password.jsx";
import { setToast } from "../../reduxers/toast.jsx";
import { useNavigate } from "react-router-dom";
import OAuth from "../../components/auth/login/OAuth.jsx";
import ForgotPassword from "../../components/auth/login/ForgotPassword.jsx";
import { confirmPassword } from "../../services/auth.jsx";

export default function ConfirmPassword() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Confirm password"),
        image: "storage/images/undraw/Authentication.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        setValidate({});

        confirmPassword(event.target.elements)
            .then((success) => {
                dispatch(setToast(success.data));

                navigate(-1);
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
                <fieldset className="row">
                    <div className="col-md-6">
                        <Email validate_message={validate.email} />
                    </div>
                    <div className="col-md-6">
                        <Password validate_message={validate.password} />
                    </div>
                </fieldset>
                <Submit label={t("Submit")} />
                <ForgotPassword />
                <OAuth />
            </form>
        </Form>
    );
}
