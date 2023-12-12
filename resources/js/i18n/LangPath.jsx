import { useTranslation } from "react-i18next";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function LanguagePath() {
    const { i18n } = useTranslation();
    const { lang } = useParams();
    const navigate = useNavigate();
    const curPath = location.pathname;

    useEffect(() => {
        if (lang && i18n.resolvedLanguage !== lang)
            i18n.options.fallbackLng.includes(lang)
                ? i18n.changeLanguage(lang).finally()
                : navigate("/" + i18n.resolvedLanguage + curPath, {
                      replace: true,
                  });
    }, [lang]);

    return <Outlet />;
}
