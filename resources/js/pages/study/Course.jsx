import { useTranslation } from "react-i18next";
import { assetHelper, initSite } from "../../helper.js";
import { useEffect, useState } from "react";
import { course, subjects } from "../../services/study.jsx";
import { useParams, useSearchParams } from "react-router-dom";
import Detail from "../../components/study/course/Detail.jsx";
import List from "../../components/study/course/List.jsx";
import Paginate from "../../components/study/courses/Paginate.jsx";

export default function Course() {
    const { t } = useTranslation();

    const { course_id } = useParams();

    const [searchParams] = useSearchParams();

    const page = searchParams.get("page");

    const limit = searchParams.get("limit");

    const [courseInformation, setCourseInformation] = useState(null);

    const [listSubject, setListSubject] = useState(null);

    function getSubjects(page) {
        subjects(course_id, page, limit).then((success) =>
            setListSubject(success.data),
        );
    }

    useEffect(() => {
        course(course_id).then((success) => {
            setCourseInformation(success.data);

            initSite({
                title: [t("Course"), success.data.title].join(": "),
                description: success.data.description,
                image: assetHelper(success.data.image),
            });

            getSubjects(page);
        });
    }, []);

    function switchPage(event) {
        event.preventDefault();

        getSubjects(event.target.getAttribute("data-page"));
    }

    return (
        <div className="container my-3">
            {courseInformation && (
                <Detail
                    title={courseInformation.title}
                    subTitle={""}
                    description={courseInformation.description}
                    image={{
                        src: assetHelper(courseInformation.image),
                        class: "object-fit-contain bg-light p-2",
                    }}
                    pills={[]}
                />
            )}
            {listSubject && (
                <>
                    <List list={listSubject.data} route="subject" />
                    <Paginate page={listSubject} handlePageEvent={switchPage} />
                </>
            )}
        </div>
    );
}
