import Nav from "./Nav.jsx";
import Subscribe from "./Subscribe.jsx";
import Copyright from "./Copyright.jsx";
import { useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";

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
