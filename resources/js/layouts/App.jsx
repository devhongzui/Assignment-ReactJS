import Header from "./partials/header/Header.jsx";
import Footer from "./partials/footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import Toast from "./partials/main/Toast.jsx";
import { Suspense } from "react";
import Actions from "./partials/main/Actions.jsx";

export default function App() {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <Header />
            <main>
                <Toast />
                <Outlet />
                <Actions />
            </main>
            <Footer />
        </Suspense>
    );
}
