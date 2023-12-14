import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Actions() {
    const { t } = useTranslation();

    return (
        <div className="row">
            <div className="col-md-6 col-xl-auto mb-2 mb-xl-0 me-xl-2">
                <div className="d-flex justify-content-end justify-content-md-start">
                    <button
                        className="btn"
                        type="button"
                        role="button"
                        aria-label={t("Theme")}
                    >
                        <i className="fa-solid fa-moon"></i>
                    </button>
                    <button
                        className="btn"
                        type="button"
                        role="button"
                        aria-label={t("Language")}
                    >
                        <i className="fa-solid fa-language"></i>
                    </button>
                </div>
            </div>
            <div className="col-md-6 col-xl-auto mb-2 mb-xl-0 ms-xl-2">
                <div className="d-flex justify-content-end">
                    <Link
                        to="login"
                        role="button"
                        className="btn btn-outline-primary me-2"
                        aria-label={t("Login")}
                    >
                        {t("Login")}
                    </Link>
                    <Link
                        to="register"
                        role="button"
                        className="btn btn-primary"
                        aria-label={t("Register")}
                    >
                        {t("Register")}
                    </Link>
                </div>
            </div>
        </div>
    );
}
