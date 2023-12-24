import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../layouts/App.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import VerifyEmail from "../pages/auth/VerifyEmail.jsx";
import ConfirmPassword from "../pages/auth/ConfirmPassword.jsx";
import ChangePassword from "../pages/auth/ChangePassword.jsx";
import ForgotPassword from "../pages/auth/ForgotPassword.jsx";
import ResetPassword from "../pages/auth/ResetPassword.jsx";
import Detail from "../pages/profile/Detail.jsx";
import Welcome from "../pages/quick-link/Welcome.jsx";
import AboutMe from "../pages/quick-link/AboutMe.jsx";
import Contact from "../pages/quick-link/Contact.jsx";
import PrivacyPolicy from "../pages/quick-link/PrivacyPolicy.jsx";
import SecurityPolicy from "../pages/quick-link/SecurityPolicy.jsx";
import Edit from "../pages/profile/Edit.jsx";
import TwoFactorAuthenticationProfile from "../pages/profile/TwoFactorAuthentication.jsx";
import TwoFactorAuthenticationChallenge from "../pages/auth/TwoFactorAuthentication.jsx";
import Courses from "../pages/study/Courses.jsx";
import Course from "../pages/study/Course.jsx";
import Subject from "../pages/study/Subject.jsx";
import Lesson from "../pages/study/Lesson.jsx";

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
                {
                    path: "courses",
                    element: <Courses />,
                },
                {
                    path: "course/:course_id",
                    element: <Course />,
                },
                {
                    path: "subject/:subject_id",
                    element: <Subject />,
                },
                {
                    path: "lesson/:lesson_id",
                    element: <Lesson />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
