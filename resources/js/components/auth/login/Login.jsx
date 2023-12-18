import { initSite, urlHelper } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import RememberMe from "./RememberMe.jsx";
import Submit from "./Submit.jsx";
import { useDispatch } from "react-redux";
import { setToast } from "../../../reduxers/toast.jsx";
import OAuth from "./OAuth.jsx";
import ForgotPassword from "./ForgotPassword.jsx";

export default function Login() {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const web = {
        title: t("Login"),
        image: "storage/images/undraw/Login.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        const { email, password, remember_me } = event.target.elements;

        axios
            .post(urlHelper("login"), {
                email: email.value,
                password: password.value,
                remember_me: remember_me.checked,
            })
            .then((success) => {
                dispatch(setToast(success.data));

                setTimeout(() => location.reload(), 5000);
            })
            .catch((error) => {
                if (error.response.data.errors)
                    setValidate(error.response.data.errors);
                else
                    dispatch(
                        setToast({ message: error.response.data.message }),
                    );
            });
    }

    return (
        <Form title={web.title} image={web.image}>
            <form onSubmit={callApi}>
                <fieldset>
                    <div className="row">
                        <div className="col-md-6">
                            <Email validate={validate} />
                        </div>
                        <div className="col-md-6">
                            <Password validate={validate} />
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
