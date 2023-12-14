import Header from "./partials/header/Header.jsx";
import Footer from "./partials/footer/Footer.jsx";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function App() {
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

    return (
        <Suspense fallback={<div>...loading</div>}>
            <Header />
            <Outlet />
            <Footer />
        </Suspense>
    );
}
