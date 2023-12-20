import { initSite, urlHelper } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../login/Submit.jsx";
import axios from "axios";
import Name from "./Name.jsx";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import PasswordConfirmation from "./PasswordConfirmation.jsx";
import Birthdate from "./Birthdate.jsx";
import Gender from "./Gender.jsx";
import Terms from "./Terms.jsx";
import { setToast } from "../../../reduxers/toast.jsx";
import { useDispatch } from "react-redux";
import OAuth from "../login/OAuth.jsx";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";
import { refreshUser } from "../../../reduxers/user.jsx";

export default function Register() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Register"),
        image: "storage/images/undraw/Sign_up.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        setValidate({});

        const {
            name,
            email,
            password,
            password_confirmation,
            birthdate,
            gender,
            terms,
        } = event.target.elements;

        axios
            .post(urlHelper("register"), {
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: password_confirmation.value,
                birthdate: birthdate.value,
                gender: gender.value,
                terms: terms.checked,
            })
            .then((success) => {
                const close_event = () => {
                    navigate(`/${i18next.language}/email/verify`);

                    dispatch(refreshUser());

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
                    <Name validate={validate} />
                    <Email validate={validate} />
                    <div className="row">
                        <div className="col-md-6">
                            <Password validate={validate} />
                        </div>
                        <div className="col-md-6">
                            <PasswordConfirmation validate={validate} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Birthdate validate={validate} />
                        </div>
                        <div className="col-md-6">
                            <Gender validate={validate} />
                        </div>
                    </div>
                    <Terms validate={validate} />
                </fieldset>
                <Submit label={t("Register")} />
                <OAuth />
            </form>
        </Form>
    );
}
