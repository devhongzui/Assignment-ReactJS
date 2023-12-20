import Submit from "../../../auth/login/Submit.jsx";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";
import { urlHelper } from "../../../../helper.js";
import { setToast } from "../../../../reduxers/toast.jsx";
import Code from "./Code.jsx";
import { refreshUser } from "../../../../reduxers/user.jsx";

export default function ConfirmedEnableTwoFactorAuth({ qr }) {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        setValidate({});

        const { code } = event.target.elements;

        axios
            .post(urlHelper("user/confirmed-two-factor-authentication"), {
                code: code.value,
            })
            .then((success) => {
                const close_event = () => {
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
        qr && (
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("QR")}
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex">
                                <div
                                    dangerouslySetInnerHTML={qr}
                                    className="bg-light p-2 mb-3"
                                ></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form onSubmit={callApi}>
                                <fieldset>
                                    <Code validate={validate} />
                                </fieldset>
                                <Submit label={t("Submit")} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
