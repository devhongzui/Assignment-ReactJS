import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { userData } from "../../../../reduxers/user.jsx";
import User from "./User.jsx";
import Guest from "./Guest.jsx";

export default function Actions() {
    const { t } = useTranslation();

    const user = useSelector(userData);

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
                    {user ? <User user={user} /> : <Guest />}
                </div>
            </div>
        </div>
    );
}
