import { useTranslation } from "react-i18next";
import { assetHelper, initSite } from "../../helper.js";
import { useEffect, useState } from "react";
import { lessons, subject } from "../../services/study.jsx";
import { useParams, useSearchParams } from "react-router-dom";
import Detail from "../../components/study/course/Detail.jsx";
import List from "../../components/study/courses/List.jsx";
import Paginate from "../../components/study/courses/Paginate.jsx";

export default function Subject() {
    const { t } = useTranslation();

    const { subject_id } = useParams();

    const [searchParams] = useSearchParams();

    const page = searchParams.get("page");

    const limit = searchParams.get("limit");

    const [subjectInformation, setSubjectInformation] = useState(null);

    const [listLesson, setListLesson] = useState(null);

    function getSubjects(page) {
        lessons(subject_id, page, limit).then((success) =>
            setListLesson(success.data),
        );
    }

    useEffect(() => {
        subject(subject_id).then((success) => {
            setSubjectInformation(success.data);

            initSite({
                title: [t("Subject"), success.data.title].join(": "),
                description: success.data.description,
                image:
                    success.data["thumbnails"][0]?.url ??
                    assetHelper("logo.png"),
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
            {subjectInformation && (
                <Detail
                    title={subjectInformation.title}
                    subTitle={""}
                    description={subjectInformation.description}
                    image={{
                        src:
                            subjectInformation["thumbnails"][0]?.url ??
                            assetHelper("logo.png"),
                        class: "object-fit-cover",
                    }}
                    pills={[]}
                />
            )}
            {listLesson && (
                <>
                    <List list={listLesson.data} route="subject" />
                    <Paginate page={listLesson} handlePageEvent={switchPage} />
                </>
            )}
        </div>
    );
}
