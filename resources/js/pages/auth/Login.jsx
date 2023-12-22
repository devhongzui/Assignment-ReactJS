import { initSite } from "../../helper.js";
import Form from "../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Email from "../../components/auth/login/Email.jsx";
import Password from "../../components/auth/login/Password.jsx";
import RememberMe from "../../components/auth/login/RememberMe.jsx";
import Submit from "../../components/auth/login/Submit.jsx";
import { useDispatch } from "react-redux";
import { setToast } from "../../reduxers/toast.jsx";
import OAuth from "../../components/auth/login/OAuth.jsx";
import ForgotPassword from "../../components/auth/login/ForgotPassword.jsx";
import { useNavigate } from "react-router-dom";
import { refreshUser } from "../../reduxers/user.jsx";
import i18next from "i18next";
import { login } from "../../services/auth.jsx";

export default function Login() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Login"),
        image: "storage/images/undraw/Login.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        setValidate({});

        login(event.target.elements)
            .then((success) => {
                if (success.data["two_factor"]) {
                    dispatch(
                        setToast({
                            message: t(
                                "Complete two-step verification to sign in",
                            ),
                        }),
                    );

                    navigate(`/${i18next.language}/two-factor-challenge`);
                } else {
                    dispatch(
                        setToast({ message: t("Logged in successfully!") }),
                    );

                    dispatch(refreshUser());

                    navigate(`/${i18next.language}`);
                }
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
                    <div className="row">
                        <div className="col-md-6">
                            <Email validate_message={validate.email} />
                        </div>
                        <div className="col-md-6">
                            <Password validate_message={validate.password} />
                        </div>
                    </div>
                    <RememberMe />
                </fieldset>
                <Submit label={t("Login")} />
                <ForgotPassword />
                <OAuth />
            </form>
        </Form>
    );
}
