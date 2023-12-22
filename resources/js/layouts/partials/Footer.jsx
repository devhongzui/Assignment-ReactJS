import Nav from "../../components/partials/footer/Nav.jsx";
import Subscribe from "../../components/partials/footer/Subscribe.jsx";
import Copyright from "../../components/partials/footer/Copyright.jsx";
import { useSelector } from "react-redux";
import { userData } from "../../reduxers/user.jsx";

export default function Footer() {
    const user = useSelector(userData);

    return user && !user["email_verified_at"] ? null : (
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
