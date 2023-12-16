import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
import Search from "./Search.jsx";
import Actions from "./actions/Actions.jsx";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="position-fixed z-3 w-100">
            <nav className="navbar navbar-expand-xl bg-body-tertiary p-3">
                <div className="container">
                    <Logo />

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label={t("Toggle navigation")}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Nav />
                        <Search />
                        <Actions />
                    </div>
                </div>
            </nav>
        </header>
    );
}
