import { initSite } from "../../helper.js";
import Form from "../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../../components/auth/login/Submit.jsx";
import Name from "../../components/auth/register/Name.jsx";
import Email from "../../components/auth/register/Email.jsx";
import Password from "../../components/auth/register/Password.jsx";
import PasswordConfirmation from "../../components/auth/register/PasswordConfirmation.jsx";
import Birthdate from "../../components/auth/register/Birthdate.jsx";
import Gender from "../../components/auth/register/Gender.jsx";
import Terms from "../../components/auth/register/Terms.jsx";
import { setToast } from "../../reduxers/toast.jsx";
import { useDispatch } from "react-redux";
import OAuth from "../../components/auth/login/OAuth.jsx";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";
import { refreshUser } from "../../reduxers/user.jsx";
import { register } from "../../services/auth.jsx";

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

        register(event.target.elements)
            .then((success) => {
                dispatch(setToast(success.data));

                dispatch(refreshUser());

                navigate(`/${i18next.language}/email/verify`);
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
                    <Name validate_message={validate.name} />
                    <Email validate_message={validate.email} />
                    <div className="row">
                        <div className="col-md-6">
                            <Password validate_message={validate.password} />
                        </div>
                        <div className="col-md-6">
                            <PasswordConfirmation />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Birthdate validate_message={validate.birthdate} />
                        </div>
                        <div className="col-md-6">
                            <Gender validate_message={validate.gender} />
                        </div>
                    </div>
                    <Terms validate_message={validate.terms} />
                </fieldset>
                <Submit label={t("Register")} />
                <OAuth />
            </form>
        </Form>
    );
}
