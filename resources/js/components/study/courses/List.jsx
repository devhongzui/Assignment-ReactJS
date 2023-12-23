import styled from "styled-components";
import { assetHelper, urlHelper } from "../../../helper.js";
import Empty from "./Empty.jsx";
import { Link } from "react-router-dom";

const ImageStyle = styled.img`
    height: 100px;
`;

const TitleStyle = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const DescriptionStyle = styled.p`
    min-height: 70px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`;

export default function List({ list, route }) {
    return list ? (
        <div className="row">
            {list.map((value, index) => (
                <div key={index} className="col-sm-6 col-xl-3 mt-2 mb-4">
                    <div className="card border-0 bg-dark-subtle shadow-lg">
                        <Link
                            to={urlHelper(`${route}/${value.id}`)}
                            role="link"
                            aria-label={value.title}
                        >
                            <ImageStyle
                                src={
                                    value.image
                                        ? assetHelper(value.image)
                                        : value["thumbnails"][0]?.url ??
                                          assetHelper("logo.png")
                                }
                                alt={value.title}
                                className="card-img-top img-fluid bg-light object-fit-contain p-2"
                            />
                        </Link>
                        <div className="card-body">
                            <Link
                                to={urlHelper(`${route}/${value.id}`)}
                                role="link"
                                aria-label={value.title}
                            >
                                <TitleStyle className="card-title h5 overflow-hidden">
                                    {value.title}
                                </TitleStyle>
                            </Link>
                            <DescriptionStyle className="card-text overflow-hidden">
                                {value.description}
                            </DescriptionStyle>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <Empty />
    );
}
