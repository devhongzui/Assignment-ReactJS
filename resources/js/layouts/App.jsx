import Header from "./partials/header/Header.jsx";
import Footer from "./partials/footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import Toast from "./partials/main/Toast.jsx";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { userData } from "../reduxers/user.jsx";

export default function App() {
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
