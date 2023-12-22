import Submit from "../../../auth/login/Submit.jsx";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { setToast } from "../../../../reduxers/toast.jsx";
import Code from "./Code.jsx";
import { refreshUser } from "../../../../reduxers/user.jsx";
import { confirmedTwoFactorAuthentication } from "../../../../services/profile.jsx";

export default function ConfirmedEnableTwoFactorAuth({ qr }) {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        setValidate({});

        confirmedTwoFactorAuthentication(event.target.elements)
            .then((success) => {
                dispatch(setToast(success.data));

                dispatch(refreshUser());
            })
            .catch((error) => {
                if (error.response.data.errors)
                    setValidate(error.response.data.errors);
                else dispatch(setToast(error.response.data));
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
                                    <Code validate_message={validate.code} />
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
