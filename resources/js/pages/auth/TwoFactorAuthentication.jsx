import { useTranslation } from "react-i18next";
import { initSite } from "../../helper.js";
import { useDispatch } from "react-redux";
import Form from "../../templates/Form.jsx";
import Submit from "../../components/auth/login/Submit.jsx";
import { useState } from "react";
import { setToast } from "../../reduxers/toast.jsx";
import i18next from "i18next";
import { useNavigate } from "react-router-dom";
import { refreshUser } from "../../reduxers/user.jsx";
import {
    twoFactorAuthentication,
    twoFactorAuthenticationRecovery,
} from "../../services/auth.jsx";
import Code from "../../components/auth/two-step-authentication/Code.jsx";
import RecoveryCode from "../../components/auth/two-step-authentication/RecoveryCode.jsx";
import SwitchAnotherMethod from "../../components/auth/two-step-authentication/SwitchAnotherMethod.jsx";

export default function TwoFactorAuthentication() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Two step authentication"),
        image: "storage/images/undraw/Login.png",
    };

    initSite(web);

    const [method, setMethod] = useState(0);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        setValidate({});

        const api =
            method === 0
                ? twoFactorAuthentication(event.target.elements)
                : twoFactorAuthenticationRecovery(event.target.elements);

        api.then(() => {
            dispatch(
                setToast({ message: t("Complete two-step verification!") }),
            );

            dispatch(refreshUser());

            navigate(`/${i18next.language}`);
        }).catch((error) => {
            if (error.response.data.errors)
                setValidate(error.response.data.errors);
            else dispatch(setToast(error.response.data));
        });
    }

    return (
        <Form title={web.title} image={web.image}>
            <form onSubmit={callApi}>
                {method === 0 ? (
                    <Code validate_message={validate.code} />
                ) : (
                    <RecoveryCode validate_message={validate.recovery_code} />
                )}
                <Submit label={t("Submit")} />
                <SwitchAnotherMethod method={method} setMethod={setMethod} />
            </form>
        </Form>
    );
}
