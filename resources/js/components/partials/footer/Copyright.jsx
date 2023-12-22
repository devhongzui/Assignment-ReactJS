import { useTranslation } from "react-i18next";

export default function Copyright() {
    const { t } = useTranslation();

    const links = [
        {
            title: "Facebook",
            icon: "fa-brands fa-facebook",
            link: "https://www.facebook.com/devhongzui",
        },
        {
            title: "Github",
            icon: "fa-brands fa-github",
            link: "https://www.github.com/devhongzui",
        },
        {
            title: "Linkedin",
            icon: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/devhongzui",
        },
    ];

    return (
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between w-100 py-4 my-4 border-top">
            <p>
                <i className="fa-regular fa-copyright"></i>{" "}
                {t("2023. All rights reserved.")}
            </p>
            <ul className="list-unstyled d-flex">
                {links.map((value, index) => (
                    <li key={index} className="ms-3">
                        <a
                            // External links
                            href={value.link}
                            className="btn btn-lg"
                            target="_blank"
                            aria-label={value.title}
                        >
                            <i className={value.icon}></i>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
