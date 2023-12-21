import { initSite } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../login/Submit.jsx";
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
import { register } from "../../../services/auth.jsx";

export default function Register() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Register"),
        image: "storage/images/undraw/Sign_up.png",
    };

    initSite(web);

    const [validate, setValidate] = useState(null);

    function callApi(event) {
        event.preventDefault();

        setValidate(null);

        register(event.target.elements)
            .then((success) => {
                dispatch(setToast(success.data));

                dispatch(refreshUser());

                navigate(`/${i18next.language}/email/verify`);
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
