import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../layouts/App.jsx";
import Login from "../components/auth/login/Login.jsx";
import Register from "../components/auth/register/Register.jsx";
import VerifyEmail from "../components/auth/verify-email/VerifyEmail.jsx";
import ConfirmPassword from "../components/auth/confirm-password/ConfirmPassword.jsx";
import ChangePassword from "../components/auth/change-password/ChangePassword.jsx";
import ForgotPassword from "../components/auth/forgot-password/ForgotPassword.jsx";
import ResetPassword from "../components/auth/reset-password/ResetPassword.jsx";
import Detail from "../components/profile/detail/Detail.jsx";
import Welcome from "../components/quick-link/Welcome.jsx";
import AboutMe from "../components/quick-link/about-me/AboutMe.jsx";
import Contact from "../components/quick-link/Contact.jsx";
import PrivacyPolicy from "../components/quick-link/privacy-policy/PrivacyPolicy.jsx";
import SecurityPolicy from "../components/quick-link/security-policy/SecurityPolicy.jsx";
import Edit from "../components/profile/edit/Edit.jsx";
import TwoFactorAuthenticationProfile from "../components/profile/two-step-authentication/TwoFactorAuthentication.jsx";
import TwoFactorAuthenticationChallenge from "../components/auth/two-step-authentication/TwoFactorAuthentication.jsx";

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
                    path: "two-factor-challenge",
                    element: <TwoFactorAuthenticationChallenge />,
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
                    path: "user/profile-information",
                    element: <Detail />,
                },
                {
                    path: "user/profile-edit",
                    element: <Edit />,
                },
                {
                    path: "user/profile-two-step-authentication",
                    element: <TwoFactorAuthenticationProfile />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
