import { checkPasswordConfirm, initSite, urlHelper } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../login/Submit.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import PasswordConfirmation from "./PasswordConfirmation.jsx";
import { setToast } from "../../../reduxers/toast.jsx";

export default function ChangePassword() {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const web = {
        title: t("Change password"),
        image: "storage/images/undraw/Secure_login.png",
    };

    initSite(web);

    checkPasswordConfirm();

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        const { email, password, password_confirmation } =
            event.target.elements;

        axios
            .put(urlHelper("user/password"), {
                email: email.value,
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
                    <Email validate={validate} />
                    <div className="row">
                        <div className="col-md-6">
                            <Password validate={validate} />
                        </div>
                        <div className="col-md-6">
                            <PasswordConfirmation />
                        </div>
                    </div>
                </fieldset>
                <Submit label={t("Change password")} />
            </form>
        </Form>
    );
}
