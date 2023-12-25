import Logo from "../../components/partials/header/Logo.jsx";
import Nav from "../../components/partials/header/Nav.jsx";
import Search from "../../components/partials/header/Search.jsx";
import Actions from "../../components/partials/header/actions/Actions.jsx";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="position-fixed z-3 w-100">
            <nav className="navbar navbar-expand-xl bg-body-secondary p-3">
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
                        <div className="row align-items-center w-100">
                            <div className="col-xl-3">
                                <Nav />
                            </div>
                            <div className="col-xl-6">
                                <Search />
                            </div>
                            <div className="col-xl-3">
                                <Actions />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
