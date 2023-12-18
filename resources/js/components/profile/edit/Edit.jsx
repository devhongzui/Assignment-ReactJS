import { useTranslation } from "react-i18next";
import { initSite, urlHelper } from "../../../helper.js";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";
import Form from "../../../templates/Form.jsx";
import Submit from "../../auth/login/Submit.jsx";
import axios from "axios";
import { setToast } from "../../../reduxers/toast.jsx";
import { useState } from "react";
import Name from "./Name.jsx";
import Email from "./Email.jsx";
import PhoneNumber from "./PhoneNumber.jsx";
import Address from "./Address.jsx";
import Birthdate from "./Birthdate.jsx";
import Gender from "./Gender.jsx";

export default function Edit() {
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const web = {
        title: t("Profile edit"),
        image: "storage/images/undraw/Profile_details.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        const {
            name,
            email,
            phone_number,
            province_code,
            district_code,
            sub_district_code,
            address_detail,
            birthdate,
            gender,
        } = event.target.elements;

        axios
            .put(urlHelper("user/profile-information"), {
                name: name.value,
                email: email.value,
                phone_number: phone_number.value,
                province_code: province_code.value,
                district_code: district_code.value,
                sub_district_code: sub_district_code.value,
                address_detail: address_detail.value,
                birthdate: birthdate.value,
                gender: gender.value,
            })
            .then((success) => {
                dispatch(setToast(success.data));

                setTimeout(() => (location.href = success.data.redirect), 5000);
            })
            .catch((error) => {
                if (error.response.data.errors)
                    setValidate(error.response.data.errors);
                else
                    dispatch(
                        setToast({ message: error.response.data.message }),
                    );
            });
    }

    const user = useSelector(userData);

    return (
        <Form title={web.title} image={web.image}>
            <form onSubmit={callApi}>
                <fieldset>
                    <Name validate={validate} user={user} />
                    <Email validate={validate} user={user} />
                    <PhoneNumber validate={validate} user={user} />
                    <Address validate={validate} user={user} />

                    <div className="row">
                        <div className="col-md-6">
                            <Birthdate validate={validate} user={user} />
                        </div>
                        <div className="col-md-6">
                            <Gender validate={validate} user={user} />
                        </div>
                    </div>
                </fieldset>
                <Submit label={t("Submit")} />
            </form>
        </Form>
    );
}
