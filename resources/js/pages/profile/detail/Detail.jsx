import { useTranslation } from "react-i18next";
import { initSite, urlHelper } from "../../../helper.js";
import { useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";
import Form from "../../../templates/Form.jsx";
import { Link } from "react-router-dom";
import Socials from "./Socials.jsx";
import TwoFactorAuth from "./TwoFactorAuth.jsx";
import Address from "./address/Address.jsx";
import Gender from "./Gender.jsx";
import Avatar from "./Avatar.jsx";

export default function Detail() {
    const { t } = useTranslation();

    const web = {
        title: t("Profile"),
        image: "storage/images/undraw/Contract.png",
    };

    initSite(web);

    const verifiedBadge = (
        <span className="badge rounded-pill text-bg-success">
            <i className="fa-solid fa-check"></i>
        </span>
    );

    const notVerifyBadge = (
        <span className="badge rounded-pill text-bg-danger">
            <i className="fa-solid fa-exclamation"></i>
        </span>
    );

    const user = useSelector(userData);

    return (
        <Form title={web.title} image={web.image}>
            <Avatar user={user} />
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("Full name")}
                </div>
                <div className="col-md-7">{user.name}</div>
            </div>
            {user.birthdate && (
                <div className="row mb-3">
                    <div className="offset-md-1 col-md-3 text-primary fw-bold">
                        {t("Birthdate")}
                    </div>
                    <div className="col-md-7">{user.birthdate}</div>
                </div>
            )}
            <Gender user={user} />
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("Email")}
                </div>
                <div className="col-md-7">
                    <span className="me-2">{user.email}</span>
                    {verifiedBadge}
                </div>
            </div>
            {user["phone_number"] && (
                <div className="row mb-3">
                    <div className="offset-md-1 col-md-3 text-primary fw-bold">
                        {t("Phone number")}
                    </div>
                    <div className="col-md-7">
                        <span className="me-2">{user["phone_number"]}</span>
                        {user["phone_number_verified_at"]
                            ? verifiedBadge
                            : notVerifyBadge}
                    </div>
                </div>
            )}
            <Address user={user} />
            <TwoFactorAuth user={user} />
            <Socials />
            <div className="offset-md-4">
                <Link
                    to={urlHelper("#")}
                    role="link"
                    className="btn btn-primary mb-2 me-2"
                    aria-label={t("Profile edit")}
                >
                    {t("Profile edit")}
                </Link>
                <Link
                    to={urlHelper("#")}
                    role="link"
                    className="btn btn-warning mb-2 me-2"
                    aria-label={t("Change password")}
                >
                    {t("Change password")}
                </Link>
                <Link
                    to={urlHelper("#")}
                    role="link"
                    className="btn btn-danger mb-2"
                    aria-label={t("Profile destroy")}
                >
                    {t("Profile destroy")}
                </Link>
            </div>
        </Form>
    );
}
