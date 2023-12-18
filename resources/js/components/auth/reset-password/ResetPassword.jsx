import { initSite, urlHelper } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../login/Submit.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToast } from "../../../reduxers/toast.jsx";
import { useParams, useSearchParams } from "react-router-dom";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import PasswordConfirmation from "./PasswordConfirmation.jsx";

export default function ResetPassword() {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const web = {
        title: t("Reset password"),
        image: "storage/images/undraw/My_password.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    const { token } = useParams();

    const [searchParams] = useSearchParams();

    const email = searchParams.get("email");

    function callApi(event) {
        event.preventDefault();

        const { password, password_confirmation } = event.target.elements;

        axios
            .post(urlHelper("reset-password"), {
                token: token,
                email: email,
                password: password.value,
                password_confirmation: password_confirmation.value,
            })
            .then((success) => {
                dispatch(setToast(success.data));

                setTimeout(() => (location.href = success.data.redirect), 5000);
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
                    <Email email={email} validate={validate} />
                    <div className="row">
                        <div className="col-md-6">
                            <Password validate={validate} />
                        </div>
                        <div className="col-md-6">
                            <PasswordConfirmation />
                        </div>
                    </div>
                </fieldset>
                <Submit label={t("Submit")} />
            </form>
        </Form>
    );
}
