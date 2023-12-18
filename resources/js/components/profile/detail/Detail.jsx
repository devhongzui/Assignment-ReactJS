import { useTranslation } from "react-i18next";
import { initSite } from "../../../helper.js";
import { useSelector } from "react-redux";
import { userData } from "../../../reduxers/user.jsx";
import Form from "../../../templates/Form.jsx";
import Socials from "./Socials.jsx";
import TwoFactorAuth from "./TwoFactorAuth.jsx";
import AddressDetail from "./AddressDetail.jsx";
import Gender from "./Gender.jsx";
import Avatar from "./Avatar.jsx";
import Fullname from "./Fullname.jsx";
import Birthdate from "./Birthdate.jsx";
import Email from "./Email.jsx";
import PhoneNumber from "./PhoneNumber.jsx";
import Actions from "./Actions.jsx";
import State from "./State.jsx";

export default function Detail() {
    const { t } = useTranslation();

    const web = {
        title: t("Profile"),
        image: "storage/images/undraw/Contract.png",
    };

    initSite(web);

    const verifiedBadge = (
        <span className="badge rounded-pill text-bg-success">
            <i className="fa-solid fa-check"></i>
        </span>
    );

    const notVerifyBadge = (
        <span className="badge rounded-pill text-bg-danger">
            <i className="fa-solid fa-exclamation"></i>
        </span>
    );

    const user = useSelector(userData);

    return (
        <Form title={web.title} image={web.image}>
            <Avatar user={user} />
            <Fullname user={user} />
            <Birthdate user={user} />
            <Gender user={user} />
            <Email user={user} verifiedBadge={verifiedBadge} />
            <PhoneNumber
                user={user}
                verifiedBadge={verifiedBadge}
                notVerifyBadge={notVerifyBadge}
            />
            <State
                label={t("Province")}
                state="provinces"
                stateCode={user["province_code"]}
            />
            <State
                label={t("District")}
                state="districts"
                stateCode={user["district_code"]}
            />
            <State
                label={t("Sub district")}
                state="sub_districts"
                stateCode={user["sub_district_code"]}
            />
            <AddressDetail user={user} />
            <TwoFactorAuth user={user} />
            <Socials />
            <Actions />
        </Form>
    );
}
