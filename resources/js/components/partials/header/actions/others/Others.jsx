import User from "./User.jsx";
import Guest from "./Guest.jsx";
import { useSelector } from "react-redux";
import { userData } from "../../../../../reduxers/user.jsx";

export default function Others() {
    const user = useSelector(userData);

    return user ? <User user={user} /> : <Guest />;
}
