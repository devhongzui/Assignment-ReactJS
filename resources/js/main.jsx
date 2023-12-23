import "../scss/main.scss";
import "bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import I18nextProvider from "./features/i18n.jsx";
import Provider from "./features/redux.jsx";
import RouterProvider from "./routers/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <I18nextProvider>
            <Provider>
                <RouterProvider />
            </Provider>
        </I18nextProvider>
    </React.StrictMode>,
);
