import { useTranslation } from "react-i18next";
import { initSite } from "../../helper.js";
import { useEffect, useState } from "react";
import { courses } from "../../services/study.jsx";
import Paginate from "../../components/study/courses/Paginate.jsx";
import { useSearchParams } from "react-router-dom";
import List from "../../components/study/courses/List.jsx";

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

    useEffect(() => {
        courses(page, limit).then((success) => setListCourse(success.data));
    }, [page, limit]);

    return (
        listCourse && (
            <div className="container my-3">
                <List list={listCourse.data} route="course" />
                <Paginate page={listCourse} />
            </div>
        )
    );
}
