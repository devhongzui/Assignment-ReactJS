import { useTranslation } from "react-i18next";
import { initSite } from "../../../helper.js";
import { useDispatch } from "react-redux";
import Form from "../../../templates/Form.jsx";
import Submit from "../login/Submit.jsx";
import { useState } from "react";
import { setToast } from "../../../reduxers/toast.jsx";
import i18next from "i18next";
import { useNavigate } from "react-router-dom";
import { refreshUser } from "../../../reduxers/user.jsx";
import {
    twoFactorAuthentication,
    twoFactorAuthenticationRecovery,
} from "../../../services/auth.jsx";
import Code from "./Code.jsx";
import RecoveryCode from "./RecoveryCode.jsx";

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

    function switchMethod() {
        setMethod(method === 0 ? 1 : 0);
    }

    const [validate, setValidate] = useState(null);

    function callApi(event) {
        event.preventDefault();

        setValidate(null);

        const api =
            method === 0
                ? twoFactorAuthentication(event.target.elements)
                : twoFactorAuthenticationRecovery(event.target.elements);

        api.then((success) => {
            dispatch(setToast(success.data));

            dispatch(refreshUser());

            navigate(`/${i18next.language}`);
        }).catch((error) => {
            if (error.response.data.errors)
                setValidate(error.response.data.errors);
            else dispatch(setToast({ message: error.response.data.message }));
        });
    }

    return (
        <Form title={web.title} image={web.image}>
            <form onSubmit={callApi}>
                {method === 0 ? (
                    <Code validate={validate} />
                ) : (
                    <RecoveryCode validate={validate} />
                )}
                <Submit label={t("Submit")} />
                <button
                    className="btn mb-2"
                    type="button"
                    role="button"
                    aria-label={t("Choose another method")}
                    onClick={switchMethod}
                >
                    {t("Choose another method")}
                </button>
            </form>
        </Form>
    );
}
