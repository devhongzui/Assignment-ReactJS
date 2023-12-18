import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ImageStyle = styled.img`
    width: 40px;
    height: 40px;
`;

export default function Avatar({ user }) {
    const { t } = useTranslation();

    return (
        <div className="row mb-3">
            <div className="offset-md-1 col-md-3 text-primary fw-bold">
                {t("Avatar")}
            </div>
            <div className="col-md-7">
                <ImageStyle
                    src={user["avatar"]}
                    alt={t("Avatar")}
                    className="rounded-5"
                />
            </div>
        </div>
    );
}
