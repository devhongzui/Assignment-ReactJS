import { useTranslation } from "react-i18next";
import { useState } from "react";
import { assetHelper } from "../../../../helper.js";
import { changeLanguage } from "i18next";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ImageStyle = styled.img`
    width: 23px;
    height: 23px;
`;

export default function Language() {
    const { t } = useTranslation();

    const { lang } = useParams();

    const [language, setLanguage] = useState(lang);

    function handleLanguage() {
        const lang = language === "vi" ? "en" : "vi";

        changeLanguage(lang).then(() => {
            setLanguage(lang);
        });
    }

    return (
        <button
            className="btn"
            type="button"
            role="button"
            aria-label={t("Language")}
            onClick={handleLanguage}
        >
            <ImageStyle
                src={assetHelper(
                    language === "vi"
                        ? "storage/images/flaticon/vietnam.png"
                        : "storage/images/flaticon/united-states.png",
                )}
                alt={language === "vi" ? "Vietnamese" : "English"}
            />
        </button>
    );
}
