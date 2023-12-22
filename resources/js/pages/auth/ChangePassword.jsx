import { checkPasswordConfirm, initSite } from "../../helper.js";
import Form from "../../templates/Form.jsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Submit from "../../components/auth/login/Submit.jsx";
import { useDispatch } from "react-redux";
import Email from "../../components/auth/change-password/Email.jsx";
import Password from "../../components/auth/change-password/Password.jsx";
import PasswordConfirmation from "../../components/auth/change-password/PasswordConfirmation.jsx";
import { setToast } from "../../reduxers/toast.jsx";
import i18next from "i18next";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../services/auth.jsx";

export default function ChangePassword() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Change password"),
        image: "storage/images/undraw/Secure_login.png",
    };

    initSite(web);

    useEffect(() => {
        checkPasswordConfirm();
    }, []);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        setValidate({});

        changePassword(event.target.elements)
            .then(() => {
                dispatch(
                    setToast({ message: t("Password changed successfully!") }),
                );

                navigate(`/${i18next.language}`);
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
                    <Email validate_message={validate.email} />
                    <div className="row">
                        <div className="col-md-6">
                            <Password validate_message={validate.password} />
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
