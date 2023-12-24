import styled from "styled-components";
import { assetHelper, urlHelper } from "../../../helper.js";
import Empty from "../courses/Empty.jsx";
import { Link } from "react-router-dom";

const ImageSubjectStyle = styled.img`
    height: 100px;
`;

const ImageChannelStyle = styled.img`
    width: 45px;
    height: 45px;
`;

const TitleStyle = styled.div`
    min-height: 50px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
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
                            <ImageSubjectStyle
                                src={
                                    value["thumbnails"][
                                        value["thumbnails"].length - 1
                                    ]?.url ?? assetHelper("logo.png")
                                }
                                alt={value.title}
                                className="card-img-top img-fluid bg-light object-fit-cover"
                            />
                        </Link>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <Link to="" aria-label="">
                                        <ImageChannelStyle
                                            src={
                                                value.channel["thumbnails"][0]
                                                    ?.url ??
                                                assetHelper("logo.png")
                                            }
                                            className="rounded-5 img-fluid"
                                            alt={value.channel.title}
                                        />
                                    </Link>
                                </div>
                                <div className="col-9">
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
                                        <Link
                                            to=""
                                            role="link"
                                            aria-label={value.channel.title}
                                        >
                                            {value.channel.title}
                                        </Link>
                                    </DescriptionStyle>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <Empty />
    );
}
