import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../reduxers/user.jsx";
import toastReducer from "../reduxers/toast.jsx";

export default function ({ children }) {
    const store = configureStore({
        reducer: {
            user: userReducer,
            toast: toastReducer,
        },
    });

    return <Provider store={store} children={children} />;
}
