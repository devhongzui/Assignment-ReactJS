import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { assetHelper } from "../../../helper.js";

const ImageStyle = styled.img`
    height: 500px;
`;

const LogoStyle = styled.img`
    height: 50px;
    width: 50px;
`;

const DescriptionStyle = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export default function Technology() {
    const { t } = useTranslation();

    const framework = [
        {
            image: "storage/images/iconscout/magento.png",
            title: "Magento 2",
            description: t("Powerful, flexible e-commerce platform"),
            progress: 75,
        },
        {
            image: "storage/images/iconscout/laravel.png",
            title: "Laravel",
            description: t("Powerful web application development framework"),
            progress: 60,
        },
        {
            image: "storage/images/iconscout/react.png",
            title: "React Js",
            description: t(
                "A JavaScript library used to build flexible and efficient user interfaces.",
            ),
            progress: 40,
        },
        {
            image: "storage/images/iconscout/bootstrap.png",
            title: "Bootstrap",
            description: t("Reliable and flexible web development framework"),
            progress: 75,
        },
    ];

    const library = [
        {
            image: "storage/images/iconscout/jquery.png",
            title: "JQuery",
            description: t("JavaScript library that optimizes DOM processing"),
            progress: 85,
        },
        {
            image: "storage/images/iconscout/nodejs.png",
            title: "NodeJs",
            description: t(
                "High-performance server-side JavaScript code execution environment",
            ),
            progress: 60,
        },
    ];

    const database = [
        {
            image: "storage/images/iconscout/mysql.png",
            title: "MySQL",
            description: t("Popular, open source database management system"),
            progress: 80,
        },
        {
            image: "storage/images/iconscout/mongodb.png",
            title: "MongoDB",
            description: t(
                "NoSQL database management system, flexible JSON storage",
            ),
            progress: 50,
        },
    ];

    const others = [
        {
            image: "storage/images/iconscout/graphql.png",
            title: "GraphQL",
            description: t("Flexible and efficient data query language"),
            progress: 75,
        },
    ];

    const progressElement = (tech) =>
        tech.map((value, index) => (
            <div key={index} className="col-xxl-6">
                <div className="row">
                    <div className="col-xxl-3">
                        <LogoStyle
                            src={assetHelper(value.image)}
                            alt={value.title}
                            className="bg-light rounded-2 mb-2"
                        />
                    </div>
                    <div className="col-xxl-9">
                        <strong>{value.title}</strong>
                        <DescriptionStyle className="overflow-hidden">
                            {value.description}
                        </DescriptionStyle>
                    </div>
                </div>
                <div className="progress mb-3" role="progressbar">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: `${value.progress}%` }}
                    >
                        {value.progress}%
                    </div>
                </div>
            </div>
        ));
    return (
        <section className="row mb-5">
            <div className="col-xl-6 order-xl-1">
                <h5>{t("Technology")}</h5>

                <h3>{t("Programming framework")}</h3>
                <div className="row">{progressElement(framework)}</div>

                <h3>{t("Library")}</h3>
                <div className="row">{progressElement(library)}</div>

                <h3>{t("Database")}</h3>
                <div className="row">{progressElement(database)}</div>

                <h3>{t("Others")}</h3>
                <div className="row">{progressElement(others)}</div>
            </div>

            <div className="col-xl-6 d-flex align-items-center order-xl-0">
                <ImageStyle
                    src={assetHelper("storage/images/freepik/7055173.jpg")}
                    alt={t("Technology")}
                    className="rounded-2 w-100 object-fit-cover"
                />
            </div>
        </section>
    );
}
