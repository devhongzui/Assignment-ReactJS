import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { assetHelper, urlHelper } from "../../../helper.js";

const ImageStyle = styled.img`
    width: 100%;
    height: 45px;
`;

const TitleStyle = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

export default function List({ listLesson, lessonId }) {
    const { t } = useTranslation();

    return (
        listLesson && (
            <div className="card">
                <div className="card-header h3">{t("Next lesson")}</div>
                <div className="card-body">
                    {listLesson.map((value, index) => (
                        <Link
                            key={index}
                            to={urlHelper(`lesson/${value.id}`)}
                            aria-label={value.title}
                            className={
                                value.id < lessonId ? "opacity-50" : null
                            }
                        >
                            <div className="row mb-2">
                                <div className="col-3">
                                    <ImageStyle
                                        src={
                                            value["thumbnails"][1]?.url ??
                                            assetHelper("logo.png")
                                        }
                                        alt={value.title}
                                        className="object-fit-contain"
                                    />
                                </div>
                                <TitleStyle
                                    className={
                                        value.id > lessonId
                                            ? "col-9 overflow-hidden"
                                            : "col-9 overflow-hidden fw-bolder"
                                    }
                                >
                                    {value.title}
                                </TitleStyle>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    );
}
