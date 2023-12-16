import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ImageStyle = styled.img`
    width: 45px;
    height: 45px;
`;

export default function Logo() {
    const { t, i18n } = useTranslation();

    const user = useSelector((state) => state.user.value);

    const image = (
        <ImageStyle src="/logo.png" className="ms-auto me-2" alt={t("Logo")} />
    );

    return user && !user["email_verified_at"] ? (
        <div className="navbar-brand">{image}</div>
    ) : (
        <Link
            to={"/" + i18n.language}
            className="nav-brand"
            role="link"
            aria-label={t("Logo")}
        >
            {image}
        </Link>
    );
}
