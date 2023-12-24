import Header from "./partials/Header.jsx";
import Footer from "./partials/Footer.jsx";
import { Outlet } from "react-router-dom";
import Toast from "../components/partials/main/Toast.jsx";
import { Suspense } from "react";
import Actions from "../components/partials/main/actions/Actions.jsx";
import Modals from "../components/partials/main/modals/Modals.jsx";

export default function App() {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <Header />
            <main>
                <Outlet />
                <Toast />
                <Modals />
                <Actions />
            </main>
            <Footer />
        </Suspense>
    );
}
