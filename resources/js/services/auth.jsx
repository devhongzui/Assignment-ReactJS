import axios from "axios";
import { assetHelper, urlHelper } from "../helper.js";

export const login = ({ email, password, remember_me }) =>
    axios.post(urlHelper("login"), {
        email: email.value,
        password: password.value,
        remember_me: remember_me.checked,
    });

export const logout = () => axios.post(urlHelper("logout"));

export const register = ({
    name,
    email,
    password,
    password_confirmation,
    birthdate,
    gender,
    terms,
}) =>
    axios.post(urlHelper("register"), {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
        birthdate: birthdate.value,
        gender: gender.value,
        terms: terms.checked,
    });

export const forgotPassword = ({ email }) =>
    axios.post(urlHelper("forgot-password"), { email: email.value });

export const resetPassword = (
    { password, password_confirmation },
    token,
    email,
) =>
    axios.post(urlHelper("reset-password"), {
        token: token,
        email: email,
        password: password.value,
        password_confirmation: password_confirmation.value,
    });

export const verifyEmail = () =>
    axios.post(urlHelper("email/verification-notification"));

export const twoFactorAuthentication = ({ code }) =>
    axios.post(urlHelper("two-factor-challenge"), {
        code: code.value,
    });

export const twoFactorAuthenticationRecovery = ({ recovery_code }) =>
    axios.post(urlHelper("two-factor-challenge"), {
        recovery_code: recovery_code.value === "" ? 0 : recovery_code.value,
    });

export const confirmPassword = ({ email, password }) =>
    axios.post(urlHelper("user/confirm-password"), {
        email: email.value,
        password: password.value,
    });

export const confirmedPasswordStatus = () =>
    axios.get(urlHelper("user/confirmed-password-status"));

export const changePassword = ({ email, password, password_confirmation }) =>
    axios.put(urlHelper("user/password"), {
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
    });

export const user = () => axios.get(assetHelper("api/user"));
