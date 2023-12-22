import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { assetHelper, initSite } from "../../helper.js";
import { useEffect, useState } from "react";
import { courses } from "../../services/study.jsx";
import Empty from "../../components/study/courses/Empty.jsx";
import Paginate from "../../components/study/courses/Paginate.jsx";
import { useSearchParams } from "react-router-dom";

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

export default function Courses() {
    const { t } = useTranslation();

    const [searchParams] = useSearchParams();

    const page = searchParams.get("page");

    const limit = searchParams.get("limit");

    const web = {
        title: t("Summary of programming courses"),
        description: [
            t("Welcome to the top programming course aggregator"),
            t(
                "We offer a variety of programming courses, from basic to advanced, to help you improve your programming skills",
            ),
            t(
                "With courses in Python, Java, JavaScript, and many other languages, you have the opportunity to learn syntax, programming logic, and practice through real-life projects",
            ),
            t(
                "Experienced teaching staff ensure your learning brings real value",
            ),
            t("Explore new opportunities with us today!"),
        ].join(". "),
        image: "storage/images/undraw/Learning.png",
    };

    initSite(web);

    const [listCourse, setListCourse] = useState(null);

    function getCourses(page, limit) {
        courses(page, limit).then((success) => setListCourse(success.data));
    }

    useEffect(() => {
        getCourses(page, limit);
    }, []);

    function switchPage(event) {
        event.preventDefault();

        getCourses(event.target.getAttribute("data-page"), limit);
    }

    return (
        listCourse && (
            <div className="container my-3">
                {listCourse.data ? (
                    <div className="row">
                        {listCourse.data.map((value, index) => (
                            <div
                                key={index}
                                className="col-sm-6 col-xl-3 mt-2 mb-4"
                            >
                                <div className="card border-0 bg-dark-subtle shadow-lg">
                                    <a
                                        href=""
                                        role="link"
                                        aria-label={value.title}
                                    >
                                        <ImageStyle
                                            src={assetHelper(value.image)}
                                            alt={value.title}
                                            className="card-img-top img-fluid bg-light object-fit-contain p-2"
                                        />
                                    </a>
                                    <div className="card-body">
                                        <a href="" role="link" aria-label="">
                                            <TitleStyle className="card-title h5 overflow-hidden">
                                                {value.title}
                                            </TitleStyle>
                                        </a>
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
                )}

                <div className="d-flex justify-content-center d-md-block mt-2">
                    <Paginate page={listCourse} handlePageEvent={switchPage} />
                </div>
            </div>
        )
    );
}
