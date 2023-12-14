import { initSite } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import axios from "axios";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import RememberMe from "./RememberMe.jsx";
import Submit from "./Submit.jsx";

export default function Login() {
    const { t } = useTranslation();

    const web = {
        title: t("Login"),
        image: "/storage/images/undraw/Login.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        const { email, password, remember_me } = event.target.elements;

        axios
            .post(`/${i18n.language}/login`, {
                email: email.value,
                password: password.value,
                remember_me: remember_me.value,
            })
            .then()
            .catch((error) => {
                if (error.response.data.errors)
                    setValidate(error.response.data.errors);

                console.log(error);
            });
    }

    return (
        <Form title={web.title} image={web.image}>
            <form onSubmit={callApi}>
                <div className="row">
                    <div className="col-md-6">
                        <Email validate={validate} />
                    </div>
                    <div className="col-md-6">
                        <Password validate={validate} />
                    </div>
                </div>
                <RememberMe />
                <Submit label={t("Login")} />
                {/*@include('auth.components.forgot-password-button')*/}
            </form>
        </Form>
    );
}
