import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ImageStyle = styled.img`
    height: 500px;
`;

const LogoStyle = styled.img`
    width: 30px;
    height: 30px;
`;

export default function Information() {
    const { t } = useTranslation();

    const description = [
        t(
            "Am a software developer with significant experience in PHP programming",
        ),
        t(
            "With Laravel, I have the ability to build diverse web applications and manage databases effectively",
        ),
        t(
            "At the same time, I worked with Magento 2 to customize and develop e-commerce features",
        ),
    ];

    const links = [
        {
            title: "Facebook",
            icon: "/storage/images/flaticon/facebook.png",
            link: "https://www.facebook.com/devhongzui",
        },
        {
            title: "Twitter",
            icon: "/storage/images/flaticon/twitter.png",
            link: "https://www.twitter.com/devhongzui",
        },
        {
            title: "Github",
            icon: "/storage/images/flaticon/github.png",
            link: "https://www.github.com/devhongzui",
        },
        {
            title: "Linkedin",
            icon: "/storage/images/flaticon/linkedin.png",
            link: "https://www.linkedin.com/in/devhongzui",
        },
    ];

    return (
        <section className="row bg-dark-subtle rounded-2 mb-5 py-3">
            <div className="col-xl-6 order-xl-1">
                <h5>{t("Personal information")}</h5>
                <h3>{t("PHP programmer")}</h3>
                <div className="mb-3 mb-xl-5">
                    <p className="mb-1">{description.join(". ")}</p>
                </div>
                <div className="row mb-3">
                    <div className="col-xxl-7">
                        <div className="row mb-2">
                            <strong className="col-12 col-xxl-4">
                                {t("Full name")}
                            </strong>
                            <div className="col-12 col-xxl-8">
                                Nguyễn Đức Trí
                            </div>
                        </div>
                        <div className="row mb-2">
                            <strong className="col-12 col-xxl-4">
                                {t("Email")}
                            </strong>
                            <a
                                href="mailto:trind@devhongzui.com"
                                aria-label={t("Email")}
                                className="col-12 col-xxl-8"
                            >
                                trind@devhongzui.com
                            </a>
                        </div>
                    </div>
                    <div className="col-xxl-5">
                        <div className="row mb-2">
                            <strong className="col-12 col-xxl-5">
                                {t("Home town")}
                            </strong>
                            <div className="col-12 col-xxl-7">
                                {t("Hanoi, Vietnam")}
                            </div>
                        </div>
                        <div className="row mb-2">
                            <strong className="col-12 col-xxl-5">
                                {t("Phone number")}
                            </strong>
                            <a
                                href="tel:0982213854"
                                aria-label={t("Phone number")}
                                className="col-12 col-xxl-7"
                            >
                                0982213854
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-xxl-7">
                        <div className="row">
                            <strong className="col-12 col-xl-6 col-xxl-4 mb-2">
                                {t("Socials")}
                            </strong>
                            <div className="col-12 col-xl-6 coll-xxl-8 d-flex">
                                {links.map((value, index) => (
                                    <div key={index} className="mb-2 me-2">
                                        <a
                                            href={value.link}
                                            target="_blank"
                                            role="link"
                                            aria-label={value.title}
                                        >
                                            <LogoStyle
                                                src={value.icon}
                                                alt={value.title}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-6 d-flex justify-content-center">
                <ImageStyle
                    src="/storage/images/freepik/7036172.jpg"
                    alt={t("Personal information")}
                    className="rounded-2 object-fit-cover img-fluid"
                />
            </div>
        </section>
    );
}
