import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getSocials } from "../../../services/profile.jsx";

export default function Socials() {
    const { t } = useTranslation();

    const [socials, setSocials] = useState([]);

    useEffect(() => {
        getSocials().then((success) => setSocials(success.data));
    }, []);

    function getIcon(socialCode) {
        switch (socialCode) {
            case 0:
                return "fa-brands fa-facebook";
            case 1:
                return "fa-brands fa-google";
            case 2:
                return "fa-brands fa-github";
            case 3:
                return "fa-brands fa-spotify";
            case 4:
                return "fa-brands fa-yahoo";
            case 5:
                return "fa-brands fa-twitter";
            case 6:
                return "fa-brands fa-z";
        }
    }

    return (
        socials && (
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("Socials")}
                </div>
                <div className="col-md-7">
                    {socials.map((value, index) => (
                        <span key={index} className="fs-5 me-2">
                            <i className={getIcon(value["provider_code"])}></i>
                        </span>
                    ))}
                </div>
            </div>
        )
    );
}
