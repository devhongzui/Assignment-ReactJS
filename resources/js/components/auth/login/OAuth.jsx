import { useTranslation } from "react-i18next";
import { urlHelper } from "../../../helper.js";

export default function OAuth() {
    const { t } = useTranslation();

    const services = {
        main: [
            {
                name: "Facebook",
                link: "auth/redirect/facebook",
                icon: "fa-brands fa-facebook",
            },
            {
                name: "Google",
                link: "auth/redirect/google",
                icon: "fa-brands fa-google",
            },
        ],
        others: [
            {
                name: "Github",
                link: "auth/redirect/github",
                icon: "fa-brands fa-github",
            },
            {
                name: "Spotify",
                link: "auth/redirect/spotify",
                icon: "fa-brands fa-spotify",
            },
            {
                name: "Yahoo",
                link: "auth/redirect/yahoo",
                icon: "fa-brands fa-yahoo",
            },
            {
                name: "Twitter",
                link: "auth/redirect/twitter-oauth-2",
                icon: "fa-brands fa-twitter",
            },
            {
                name: "Zalo",
                link: "auth/redirect/zalo",
                icon: "fa-solid fa-z",
            },
        ],
    };

    return (
        <>
            <hr className="mt-4" />

            <h4 className="my-4">{t("Fast authentication")}</h4>

            <div className="row">
                {services.main.map((value, index) => (
                    <div key={index} className="col-xl-4">
                        <a
                            href={urlHelper(value.link)}
                            className="w-100 mb-2 me-2 btn btn-primary"
                            aria-label={value.name}
                        >
                            <i className={value.icon}></i>
                            <strong> {value.name}</strong>
                        </a>
                    </div>
                ))}
                <div className="col-xl-4">
                    <button
                        className="mb-2 btn btn-outline-primary"
                        aria-label={t("Others")}
                        data-bs-toggle="collapse"
                        data-bs-target="#oauth-collapse"
                    >
                        <i className="fa-solid fa-sort-down"></i>
                    </button>
                    <div id="oauth-collapse" className="collapse">
                        {services.others.map((value, index) => (
                            <a
                                href={urlHelper(value.link)}
                                key={index}
                                className="w-100 mb-2 me-2 btn btn-primary"
                                aria-label={value.name}
                            >
                                <i className={value.icon}></i>
                                <strong> {value.name}</strong>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
