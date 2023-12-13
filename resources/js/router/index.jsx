import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App.jsx";
import LanguagePath from "../i18n/LangPath.jsx";
import Welcome from "../pages/Welcome.jsx";
import AboutMe from "../pages/about-me/AboutMe.jsx";
import Contact from "../pages/Contact.jsx";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy.jsx";

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
                    {
                        path: "privacy-policy",
                        element: <PrivacyPolicy />,
                    },
                ],
            },
        ],
    },
]);
