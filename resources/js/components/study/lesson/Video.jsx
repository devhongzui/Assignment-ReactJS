import { Link } from "react-router-dom";
import { assetHelper, urlHelper } from "../../../helper.js";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ImageSubjectStyle = styled.img`
    width: 45px;
`;

const ImageChannelStyle = styled.img`
    width: 45px;
    height: 45px;
`;

const DescriptionStyle = styled.div`
    max-height: 262px;
`;

export default function Video({ lesson }) {
    const { t } = useTranslation();

    return (
        <div className="card">
            <div className="card-body p-0 rounded-top-2 ratio ratio-4x3">
                <iframe
                    className="rounded-top-2"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${lesson.url}`}
                    title={lesson.title}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
            <div className="card-header h3">{lesson.title}</div>
            <DescriptionStyle className="card-body overflow-auto">
                <div className="row mb-2">
                    <strong className="col-3 col-xl-2">{t("Introduce")}</strong>
                    <div className="col-9 col-xl-10">
                        <pre className="mb-0">{lesson.description}</pre>
                    </div>
                </div>
                <div className="row mb-2">
                    <strong className="col-3 col-xl-2">{t("Subject")}</strong>
                    <div className="col-9 col-xl-10">
                        <Link
                            to={urlHelper(`subject/${lesson.subject.id}`)}
                            role="link"
                            className="text-decoration-underline"
                            aria-label={lesson.subject.title}
                        >
                            <ImageSubjectStyle
                                src={
                                    lesson.subject["thumbnails"][0]?.url ??
                                    assetHelper("logo.png")
                                }
                                alt={lesson.subject.title}
                                className="me-2"
                            />
                            {lesson.subject.title}
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <strong className="col-3 col-xl-2">
                        {t("Publish at")}
                    </strong>
                    <div className="col-9 col-xl-10">
                        {lesson["created_at"]}
                    </div>
                </div>
            </DescriptionStyle>
            <div className="card-header rounded-bottom-2">
                <Link to="" aria-label={lesson.channel.title} role="link">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <ImageChannelStyle
                                src={
                                    lesson.channel["thumbnails"][1]?.url ??
                                    assetHelper("logo.png")
                                }
                                alt={lesson.channel.title}
                                className="rounded-5"
                            />
                        </div>
                        <span className="h5 col-9 mb-0">
                            {lesson.channel.title}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
