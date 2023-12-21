import { initSite } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import RememberMe from "./RememberMe.jsx";
import Submit from "./Submit.jsx";
import { useDispatch } from "react-redux";
import { setToast } from "../../../reduxers/toast.jsx";
import OAuth from "./OAuth.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import { useNavigate } from "react-router-dom";
import { refreshUser } from "../../../reduxers/user.jsx";
import i18next from "i18next";
import { login } from "../../../services/auth.jsx";

export default function Login() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Login"),
        image: "storage/images/undraw/Login.png",
    };

    initSite(web);

    const [validate, setValidate] = useState(null);

    function callApi(event) {
        event.preventDefault();

        setValidate(null);

        login(event.target.elements)
            .then((success) => {
                dispatch(setToast(success.data));

                if (success.data["two_factor"]) {
                    navigate(`/${i18next.language}/two-factor-challenge`);
                } else {
                    dispatch(refreshUser());

                    navigate(`/${i18next.language}`);
                }
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
