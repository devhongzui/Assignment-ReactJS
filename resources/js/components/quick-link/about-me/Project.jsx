import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { assetHelper, urlHelper } from "../../../helper.js";

const ImageStyle = styled.img`
    height: 300px;
`;

const DescriptionStyle = styled.div`
    min-height: 50px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

export default function Project() {
    const { t } = useTranslation();

    const cards = [
        {
            project_name: "Genki Sushi",
            type: t("Enterprise"),
            tech: "Magento 2",
            short_introduce: t(
                "Genki Sushi Hong Kong bestsellers comprise sushi, sashimi, light foods, hot dishes, desserts and kids",
            ),
            image: {
                src: "storage/images/others/genki.png",
                class: "object-fit-cover",
            },
            url: "https://order.genkisushi.com.hk/en",
        },
        {
            project_name: "Galle",
            type: t("Enterprise"),
            tech: "Magento 2",
            short_introduce: t(
                "Galle Genuine Watch System is gradually increasing its position as the number 1 watch distributor in Vietnam",
            ),
            image: {
                src: "storage/images/others/gallewatch.png",
                class: "object-fit-cover",
            },
            url: "https://galle.vn",
        },
        {
            project_name: "hy!",
            type: t("Enterprise"),
            tech: "Magento 2",
            short_introduce: t(
                "Shop thousands products (beauty, clothing, lifestyle) and order takeaway foods from Lee Gardens",
            ),
            image: {
                src: "storage/images/others/hy.jpg",
                class: "object-fit-cover",
            },
            url: "https://hyleegardens.com.hk/en",
        },
        {
            project_name: "Routine",
            type: t("Enterprise"),
            tech: "Magento 2",
            short_introduce: t(
                "ROUTINE is a famous, high-end fashion clothing brand in Vietnam, specializing in genuine everyday wear",
            ),
            image: {
                src: "storage/images/others/routine.jpg",
                class: "object-fit-cover",
            },
            url: "https://routine.vn",
        },
        {
            project_name: "devhongzui",
            type: t("Individual"),
            tech: "Laravel, ReactJs",
            short_introduce: t(
                "Practice CRUD, Authentication, OAuth operations on Laravel with MySQL Database",
            ),
            image: {
                src: "storage/images/pngwing/laravel.png",
                class: "object-fit-contain bg-light p-2",
            },
            url: urlHelper(""),
        },
        {
            project_name: "devhongzui API",
            type: t("Individual"),
            tech: "NodeJs, GraphQL",
            short_introduce: t(
                "Get familiar with Back-end development using NodeJs, MongoDB, GraphQL. Deploy the project on the Product environment (Ubuntu)",
            ),
            image: {
                src: "storage/images/brandfetch/nodejs.png",
                class: "object-fit-contain bg-light p-2",
            },
            url: urlHelper(""),
        },
    ];

    return (
        <section className="mb-5 px-2">
            <h3 className="text-center">{t("Project")}</h3>
            <div className="row">
                {cards.map((value, index) => (
                    <div key={index} className="col-xl-4 mt-3 mb-5">
                        <div className="card mx-auto">
                            <a
                                href={value.url}
                                target="_blank"
                                aria-label={value.project_name}
                            >
                                <ImageStyle
                                    src={assetHelper(value.image.src)}
                                    className={
                                        "card-img-top " + value.image.class
                                    }
                                    alt={value.project_name}
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bold">
                                    {value.project_name}
                                </h5>
                                <div className="card-text text-center">
                                    <strong>{t("Type")}</strong>
                                    <span> {value.type}</span>
                                    <br />
                                    <strong>{t("Technology")}</strong>
                                    <span> {value.tech}</span>
                                    <br />
                                    <DescriptionStyle className="overflow-hidden mb-2">
                                        <strong>{t("Introduce")}</strong>
                                        <span> {value.short_introduce}</span>
                                    </DescriptionStyle>
                                </div>
                                <a
                                    href={value.url}
                                    target="_blank"
                                    aria-label={t("Quick view")}
                                    className="btn btn-primary w-100"
                                >
                                    {t("Quick view")}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
