import { initSite } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../login/Submit.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../../../reduxers/toast.jsx";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Email from "./Email.jsx";
import Password from "./Password.jsx";
import PasswordConfirmation from "./PasswordConfirmation.jsx";
import i18next from "i18next";
import { userData } from "../../../reduxers/user.jsx";
import { resetPassword } from "../../../services/auth.jsx";

export default function ResetPassword() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Reset password"),
        image: "storage/images/undraw/My_password.png",
    };

    initSite(web);

    const [validate, setValidate] = useState(null);

    const { token } = useParams();

    const [searchParams] = useSearchParams();

    const email = searchParams.get("email");

    const user = useSelector(userData);

    function callApi(event) {
        event.preventDefault();

        setValidate(null);

        resetPassword(event.target.elements, token, email)
            .then((success) => {
                dispatch(setToast(success.data));

                navigate(
                    user
                        ? `/${i18next.language}`
                        : `/${i18next.language}/login`,
                );
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
