import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App.jsx";
import Welcome from "../pages/Welcome.jsx";
import AboutMe from "../pages/about-me/AboutMe.jsx";
import Contact from "../pages/Contact.jsx";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy.jsx";
import SecurityPolicy from "../pages/security-policy/SecurityPolicy.jsx";
import Login from "../pages/auth/login/Login.jsx";

export const router = createBrowserRouter([
    {
        path: `/:lang`,
        element: <App />,
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
            {
                path: "security-policy",
                element: <SecurityPolicy />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
]);
