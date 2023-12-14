import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Nav() {
    const { t } = useTranslation();

    const links = [
        {
            title: t("See more"),
            items: [
                {
                    title: t("Contact"),
                    link: "contact",
                },
                {
                    title: t("About me"),
                    link: "about-me",
                },
                {
                    title: t("Privacy policy"),
                    link: "privacy-policy",
                },
                {
                    title: t("Security policy"),
                    link: "security-policy",
                },
            ],
        },
        {
            title: t("Other projects"),
            items: [
                {
                    title: t("Magento Project"),
                    link: "#",
                },
                {
                    title: t("NodeJs Project"),
                    link: "#",
                },
            ],
        },
    ];

    return links.map((value, index) => (
        <div className="col-6 col-md-3 mb-3" key={index}>
            <h5>{value.title}</h5>
            <ul className="nav flex-column">
                {value.items.map((value, index) => (
                    <li className="nav-item mb-2" key={index}>
                        <Link
                            to={value.link}
                            className="nav-link p-0 text-body-secondary"
                            aria-label={value.title}
                        >
                            {value.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    ));
}
