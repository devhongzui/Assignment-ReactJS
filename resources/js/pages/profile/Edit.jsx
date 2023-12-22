import { useTranslation } from "react-i18next";
import { initSite } from "../../helper.js";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, userData } from "../../reduxers/user.jsx";
import Form from "../../templates/Form.jsx";
import Submit from "../../components/auth/login/Submit.jsx";
import { setToast } from "../../reduxers/toast.jsx";
import { useState } from "react";
import Name from "../../components/profile/edit/Name.jsx";
import Email from "../../components/profile/edit/Email.jsx";
import PhoneNumber from "../../components/profile/edit/PhoneNumber.jsx";
import Address from "../../components/profile/edit/Address.jsx";
import Birthdate from "../../components/profile/edit/Birthdate.jsx";
import Gender from "../../components/profile/edit/Gender.jsx";
import i18next from "i18next";
import { useNavigate } from "react-router-dom";
import { edit } from "../../services/profile.jsx";

export default function Edit() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { t } = useTranslation();

    const web = {
        title: t("Profile edit"),
        image: "storage/images/undraw/Profile_details.png",
    };

    initSite(web);

    const [validate, setValidate] = useState({});

    function callApi(event) {
        event.preventDefault();

        setValidate({});

        edit(event.target.elements)
            .then(() => {
                dispatch(
                    setToast({ message: t("Profile updated successfully!") }),
                );

                dispatch(refreshUser());

                navigate(`/${i18next.language}/user/profile-information`);
            })
            .catch((error) => {
                if (error.response.data.errors)
                    setValidate(error.response.data.errors);
                else dispatch(setToast(error.response.data));
            });
    }

    const user = useSelector(userData);

    return (
        <Form title={web.title} image={web.image}>
            <form onSubmit={callApi}>
                <fieldset>
                    <Name name={user.name} validate_message={validate.name} />
                    <Email
                        email={user.email}
                        validate_message={validate.email}
                    />
                    <PhoneNumber
                        phone_number={user.phone_number}
                        validate_message={validate.phone_number}
                    />
                    <Address user={user} validate={validate} />
                    <div className="row">
                        <div className="col-md-6">
                            <Birthdate
                                birthdate={user.birthdate}
                                validate_message={validate.birthdate}
                            />
                        </div>
                        <div className="col-md-6">
                            <Gender
                                gender={user.gender}
                                validate_message={validate.gender}
                            />
                        </div>
                    </div>
                </fieldset>
                <Submit label={t("Submit")} />
            </form>
        </Form>
    );
}
