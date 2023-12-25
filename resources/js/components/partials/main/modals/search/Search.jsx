import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { search } from "../../../../../services/search.jsx";
import List1 from "../../../../study/courses/List.jsx";
import List2 from "../../../../study/course/List.jsx";
import Paginate from "../../../../study/courses/Paginate.jsx";

export default function Search() {
    const { t } = useTranslation();

    const [searchQuery, setSearchQuery] = useState(null);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (searchQuery) {
                getCourses();
                getSubjects();
                getLessons();
            }
        }, 1000);

        return () => clearTimeout(timeOutId);
    }, [searchQuery]);

    function getQuery(event) {
        setSearchQuery(event.target.value);
    }

    const [listCourse, setListCourse] = useState(null);

    function getCourses(page) {
        search("course", searchQuery, page).then((success) =>
            setListCourse(success.data),
        );
    }

    function switchPageCourse(event) {
        event.preventDefault();

        getCourses(event.target.getAttribute("data-page"));
    }

    const [listSubject, setListSubject] = useState(null);

    function getSubjects(page) {
        search("subject", searchQuery, page).then((success) =>
            setListSubject(success.data),
        );
    }

    function switchPageSubject(event) {
        event.preventDefault();

        getSubjects(event.target.getAttribute("data-page"));
    }

    const [listLesson, setListLesson] = useState(null);

    function getLessons(page) {
        search("lesson", searchQuery, page).then((success) =>
            setListLesson(success.data),
        );
    }

    function switchPageLesson(event) {
        event.preventDefault();

        getLessons(event.target.getAttribute("data-page"));
    }

    return (
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden>
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content" style={{ minHeight: "300px" }}>
                    <div className="modal-body">
                        <form role="search">
                            <fieldset>
                                <input
                                    type="search"
                                    className="form-control border-primary me-2"
                                    placeholder={t("Search")}
                                    aria-label={t("Search")}
                                    onChange={getQuery}
                                />
                            </fieldset>
                        </form>
                        {listCourse && (
                            <div className="container my-3">
                                <List1 list={listCourse.data} route="course" />
                                <Paginate
                                    page={listCourse}
                                    handlePageEvent={switchPageCourse}
                                />
                            </div>
                        )}
                        {listSubject && (
                            <div className="container my-3">
                                <List2 list={listSubject.data} route="course" />
                                <Paginate
                                    page={listSubject}
                                    handlePageEvent={switchPageSubject}
                                />
                            </div>
                        )}
                        {listLesson && (
                            <div className="container my-3">
                                <List2 list={listLesson.data} route="course" />
                                <Paginate
                                    page={listLesson}
                                    handlePageEvent={switchPageLesson}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
