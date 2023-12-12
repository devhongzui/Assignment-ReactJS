import Header from "./partials/header/Header.jsx";
import Footer from "./partials/footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export default function App() {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <Header />
            <Outlet />
            <Footer />
        </Suspense>
    );
}
