import styled from "styled-components";

const ImageStyle = styled.img`
    min-height: 200px;
    max-height: 200px;
`;

const DescriptionMobileStyle = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
`;

const DescriptionDesktopStyle = styled.pre`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
`;

export default function Detail({ title, subTitle, description, image, pills }) {
    return (
        <>
            <div className="card border-0 d-lg-none">
                <div className="card-body">
                    <div className="card-title h5">{title}</div>
                    <div className="card-subtitle h6 mb-2 text-body-secondary">
                        {subTitle}
                    </div>
                    <DescriptionMobileStyle className="card-text overflow-hidden">
                        {description}
                    </DescriptionMobileStyle>
                </div>
            </div>

            <div className="row d-none d-lg-flex align-items-end">
                <div className="col-3 mt-2">
                    <ImageStyle
                        src={image.src}
                        className={`card-img rounded-4 ${image.class}`}
                        alt={title}
                    />
                </div>
                <div className="col-9 mt-2">
                    <div className="h5">{subTitle}</div>
                    <div className="h2">{title}</div>
                    <DescriptionDesktopStyle className="overflow-hidden">
                        {description}
                    </DescriptionDesktopStyle>
                    <div className="mb-2">
                        {pills.map((value, index) => (
                            <span
                                key={index}
                                className={`badge rounded-pill shadow-lg ${value.class}`}
                            >
                                {value.description}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
