import Nav from "./Nav.jsx";
import Subscribe from "./Subscribe.jsx";
import Copyright from "./Copyright.jsx";

export default function Footer() {
    return (
        <footer>
            <nav className="navbar bg-body-tertiary py-5">
                <div className="container">
                    <div className="row w-100">
                        <Nav />
                        <Subscribe />
                    </div>
                    <Copyright />
                </div>
            </nav>
        </footer>
    );
}
