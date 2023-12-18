import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../layouts/App.jsx";
import Welcome from "../pages/Welcome.jsx";
import AboutMe from "../pages/about-me/AboutMe.jsx";
import Contact from "../pages/Contact.jsx";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy.jsx";
import SecurityPolicy from "../pages/security-policy/SecurityPolicy.jsx";
import Login from "../pages/auth/login/Login.jsx";
import Register from "../pages/auth/register/Register.jsx";
import VerifyEmail from "../pages/auth/verify-email/VerifyEmail.jsx";
import ConfirmPassword from "../pages/auth/confirm-password/ConfirmPassword.jsx";
import ChangePassword from "../pages/auth/change-password/ChangePassword.jsx";
import ForgotPassword from "../pages/auth/forgot-password/ForgotPassword.jsx";
import ResetPassword from "../pages/auth/reset-password/ResetPassword.jsx";
import Detail from "../pages/profile/detail/Detail.jsx";

export default function () {
    const router = createBrowserRouter([
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
                {
                    path: "register",
                    element: <Register />,
                },
                {
                    path: "forgot-password",
                    element: <ForgotPassword />,
                },
                {
                    path: "reset-password/:token",
                    element: <ResetPassword />,
                },
                {
                    path: "email/verify",
                    element: <VerifyEmail />,
                },
                {
                    path: "user/confirm-password",
                    element: <ConfirmPassword />,
                },
                {
                    path: "user/change-password",
                    element: <ChangePassword />,
                },
                {
                    path: "user/detail",
                    element: <Detail />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
