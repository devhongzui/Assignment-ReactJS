import axios from "axios";
import { urlHelper } from "../helper.js";

export const getState = (state, stateCode) =>
    axios.get(urlHelper(`api/address/${state}/${stateCode}`));

export const getProvinces = () => axios.get(urlHelper("api/address/provinces"));

export const getDistricts = () => axios.get(urlHelper("api/address/districts"));

export const getSubDistricts = () =>
    axios.get(urlHelper("api/address/sub_districts"));

export const getSocials = () => axios.get(urlHelper("api/user/social"));

export const edit = ({
    name,
    email,
    phone_number,
    province_code,
    district_code,
    sub_district_code,
    address_detail,
    birthdate,
    gender,
}) =>
    axios.put(urlHelper("user/profile-information"), {
        name: name.value,
        email: email.value,
        phone_number: phone_number.value,
        province_code: province_code.value,
        district_code: district_code.value,
        sub_district_code: sub_district_code.value,
        address_detail: address_detail.value,
        birthdate: birthdate.value,
        gender: gender.value,
    });

export const destroy = () => axios.delete(urlHelper("user/profile-destroy"));

export const confirmedTwoFactorAuthentication = ({ code }) =>
    axios.post(urlHelper("user/confirmed-two-factor-authentication"), {
        code: code.value,
    });

export const enableTwoFactorAuthentication = () =>
    axios.post(urlHelper("user/two-factor-authentication"));

export const disableTwoFactorAuthentication = () =>
    axios.delete(urlHelper("user/two-factor-authentication"));

export const twoFactorRecoveryCodes = () =>
    axios.get(urlHelper("user/two-factor-recovery-codes"));
