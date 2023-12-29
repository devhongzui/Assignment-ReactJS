import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";
import { assetHelper, urlHelper } from "../../../helper.js";

const ImageStyle = styled.img`
    width: 45px;
    height: 45px;
`;

export default function Logo() {
    const { t } = useTranslation();

    const user = useSelector(userData);

    const image = (
        <ImageStyle
            src={assetHelper("logo.png")}
            className="ms-auto me-2"
            alt={t("Logo")}
        />
    );

    return user && !user["email_verified_at"] ? (
        <div className="navbar-brand">{image}</div>
    ) : (
        <Link to={urlHelper("")} className="nav-brand" aria-label={t("Logo")}>
            {image}
        </Link>
    );
}
