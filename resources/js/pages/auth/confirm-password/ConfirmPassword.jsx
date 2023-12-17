import { initSite, urlHelper } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../login/Submit.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import { setToast } from "../../../reduxers/toast.jsx";
import { useNavigate } from "react-router-dom";
import OAuth from "../login/OAuth.jsx";

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

        const { email, password } = event.target.elements;

        axios
            .post(urlHelper("user/confirm-password"), {
                email: email.value,
                password: password.value,
            })
            .then((success) => {
                dispatch(setToast(success.data));

                setTimeout(() => navigate(-1), 5000);
            })
            .catch((error) => {
                if (error.response.data.errors)
                    setValidate(error.response.data.errors);
                else dispatch(setToast(error.response.data.message));
            });
    }

    return (
        <Form title={web.title} image={web.image}>
            <form onSubmit={callApi}>
                <fieldset className="row">
                    <div className="col-md-6">
                        <Email validate={validate} />
                    </div>
                    <div className="col-md-6">
                        <Password validate={validate} />
                    </div>
                </fieldset>
                <Submit label={t("Submit")} />
                <OAuth />
            </form>
        </Form>
    );
}