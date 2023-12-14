import { initSite } from "../../../helper.js";
import Form from "../../../templates/Form.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import axios from "axios";

export default function Login() {
    const { t } = useTranslation();

    const web = {
        title: t("Login"),
        image: "/storage/images/undraw/Login.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        const { email, password, remember_me } = event.target.elements;

        axios
            .post(`/${i18n.language}/login`, {
                email: email.value,
                password: password.value,
                remember_me: remember_me.value,
            })
            .then()
            .catch((error) => {
                if (error.response.data.errors)
                    setValidate(error.response.data.errors);

                console.log(error);
            });
    }

    return (
        <Form title={web.title} image={web.image}>
            <form onSubmit={callApi}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className={
                                    validate?.email
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                name="email"
                                autoFocus
                                autoComplete="email"
                            />
                            <label>{t("Email")}</label>
                            {validate?.email && (
                                <strong
                                    className="invalid-feedback"
                                    role="alert"
                                >
                                    {validate.email[0]}
                                </strong>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className={
                                    validate?.password
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                name="password"
                            />
                            <label>{t("Password")}</label>
                            {validate?.password && (
                                <strong
                                    className="invalid-feedback"
                                    role="alert"
                                >
                                    {validate.password[0]}
                                </strong>
                            )}
                        </div>
                    </div>
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="remember_me"
                        defaultChecked
                    />

                    <label className="form-check-label">
                        {t("Remember me")}
                    </label>
                </div>
                <button
                    className="btn btn-primary me-2 mb-2"
                    type="submit"
                    role="button"
                    aria-label={t("Login")}
                >
                    {t("Login")}
                </button>
                {/*@include('auth.components.forgot-password-button')*/}
            </form>
        </Form>
    );
}
