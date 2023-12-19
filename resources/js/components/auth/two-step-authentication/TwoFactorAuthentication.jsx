import { useTranslation } from "react-i18next";
import { initSite, urlHelper } from "../../../helper.js";
import { useDispatch } from "react-redux";
import Form from "../../../templates/Form.jsx";
import ValidateMessage from "../login/ValidateMessage.jsx";
import Submit from "../login/Submit.jsx";
import { useState } from "react";
import axios from "axios";
import { setToast } from "../../../reduxers/toast.jsx";

export default function TwoFactorAuthentication() {
    const dispatch = useDispatch();

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

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        const data =
            method === 0
                ? { code: event.target.elements.code.value }
                : {
                      recovery_code:
                          event.target.elements.recovery_code.value === ""
                              ? 0
                              : event.target.elements.recovery_code.value,
                  };

        axios
            .post(urlHelper("two-factor-challenge"), data)
            .then((success) => {
                dispatch(setToast(success.data));

                setTimeout(() => location.reload(), 5000);
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
                {method === 0 ? (
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className={
                                validate?.code
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                            name="code"
                        />
                        <label>{t("Code")}</label>
                        <ValidateMessage field={validate?.code} />
                    </div>
                ) : (
                    <div className="card-body p-0">
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={
                                    validate["recovery_code"]
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                name="recovery_code"
                            />
                            <label>{t("Recovery Code")}</label>
                            <ValidateMessage
                                field={validate["recovery_code"]}
                            />
                        </div>
                    </div>
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
