import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { assetHelper } from "../../helper.js";

const DescriptionStyle = styled.p`
    min-height: 50px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

export default function Skill() {
    const { t } = useTranslation();

    const skills = [
        {
            image: "storage/images/freepik/7054831.jpg",
            title: t("Web Development"),
            description: t(
                "Use experience handling Framework, Library Back-End and Front-End in designing, deploying and maintaining Website and Webapp",
            ),
        },
        {
            image: "storage/images/freepik/7054834.jpg",
            title: t("Database Optimization"),
            description: [
                t(
                    "Provide solutions for data management and system monitoring",
                ),
                t(
                    "Report data security risks and remediate known security vulnerabilities",
                ),
            ].join(". "),
        },
        {
            image: "storage/images/freepik/7055152.jpg",
            title: t("Server Deployment"),
            description: t(
                "Create, maintain, upgrade Cloud VPS servers and support Hosting solutions for small and medium businesses.",
            ),
        },
    ];

    return (
        <section className="bg-dark-subtle rounded-2 mb-3 px-2 py-3">
            <h3 className="text-center">{t("Personal skills")}</h3>

            <div className="row">
                {skills.map((value, index) => (
                    <div key={index} className="col-xl-4 mt-3 mb-5">
                        <div className="card mx-auto">
                            <img
                                src={assetHelper(value.image)}
                                className="card-img-top"
                                alt={value.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">
                                    {value.title}
                                </h5>
                                <DescriptionStyle className="card-text overflow-hidden">
                                    {value.description}
                                </DescriptionStyle>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
