import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ImageStyle = styled.img`
    width: 45px;
    height: 45px;
`;

export default function Logo() {
    const { t, i18n } = useTranslation();

    return (
        <Link
            to={"/" + i18n.language}
            className="nav-brand"
            role="link"
            aria-label={t("Logo")}
        >
            <ImageStyle
                src="/logo.png"
                className="ms-auto me-2"
                alt={t("Logo")}
            />
        </Link>
    );
}
