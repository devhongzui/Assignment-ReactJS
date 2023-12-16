import Header from "./partials/header/Header.jsx";
import Footer from "./partials/footer/Footer.jsx";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Toast from "./partials/main/Toast.jsx";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { userData } from "../reduxers/user.jsx";

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

    const user = useSelector(userData);

    return (
        <Suspense fallback={<div>...loading</div>}>
            <Header />
            <main>
                <Toast />
                <Outlet />
            </main>
            {user && !user["email_verified_at"] ? null : <Footer />}
        </Suspense>
    );
}
