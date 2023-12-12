import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App.jsx";
import Welcome from "../pages/Welcome.jsx";
import AboutMe from "../pages/about-me/AboutMe.jsx";
import Contact from "../pages/Contact.jsx";
import LanguagePath from "../i18n/LangPath.jsx";

export const router = createBrowserRouter([
    {
        path: `/`,
        element: <App />,
        children: [
            {
                path: ":lang",
                element: <LanguagePath />,
                children: [
                    {
                        index: true,
                        element: <Welcome />,
                    },
                    {
                        path: "about-me",
                        element: <AboutMe />,
                    },
                    {
                        path: "contact",
                        element: <Contact />,
                    },
                ],
            },
        ],
    },
]);
