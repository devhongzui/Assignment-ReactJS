import { useSelector } from "react-redux";
import { userData } from "../../../../reduxers/user.jsx";
import User from "./User.jsx";
import Guest from "./Guest.jsx";
import Theme from "./Theme.jsx";
import Language from "./Language.jsx";

export default function Actions() {
    const user = useSelector(userData);

    return (
        <div className="row">
            <div className="col-md-6 col-xl-auto mb-2 mb-xl-0 me-xl-2">
                <div className="d-flex justify-content-end justify-content-md-start">
                    <Theme />
                    <Language />
                </div>
            </div>
            <div className="col-md-6 col-xl-auto mb-2 mb-xl-0 ms-xl-2">
                <div className="d-flex justify-content-end">
                    {user ? <User user={user} /> : <Guest />}
                </div>
            </div>
        </div>
    );
}
