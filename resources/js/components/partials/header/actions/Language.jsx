import { useTranslation } from "react-i18next";
import { useState } from "react";
import { changeLanguage } from "i18next";
import { useParams } from "react-router-dom";

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
            aria-label={t("Language")}
            onClick={handleLanguage}
        >
            {language.toUpperCase()}
        </button>
    );
}
