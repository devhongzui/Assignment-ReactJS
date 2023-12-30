import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { search } from "../../../../../services/search.jsx";
import List1 from "../../../../study/courses/List.jsx";
import List2 from "../../../../study/course/List.jsx";
import List3 from "../../../../study/channel/List.jsx";
import Paginate from "../../../../study/courses/Paginate.jsx";

export default function Search() {
    const { t } = useTranslation();

    const [searchQuery, setSearchQuery] = useState(null);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (searchQuery) {
                getLessons();
                getSubjects();
                getChannels();
                getCourses();
            }
        }, 1000);

        return () => clearTimeout(timeOutId);
    }, [searchQuery]);

    function getQuery(event) {
        setSearchQuery(event.target.value.trim());
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

    const [listChannel, setListChannel] = useState(null);

    function getChannels(page) {
        search("channel", searchQuery, page).then((success) =>
            setListChannel(success.data),
        );
    }

    function switchPageChannel(event) {
        event.preventDefault();

        getChannels(event.target.getAttribute("data-page"));
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

    return (
        <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden>
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content" style={{ minHeight: "300px" }}>
                    <div className="modal-body">
                        <form
                            role="search"
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <fieldset>
                                <input
                                    type="search"
                                    className="form-control border-primary me-2 mb-2"
                                    placeholder={t("Search")}
                                    aria-label={t("Search")}
                                    onChange={getQuery}
                                />
                            </fieldset>
                        </form>
                        {searchQuery && (
                            <strong>
                                {t("Results for")} `{searchQuery}`
                            </strong>
                        )}
                        {listLesson && (
                            <div className="my-3">
                                <div className="h3 text-center">
                                    {t("Lessons")}
                                </div>
                                <List2 list={listLesson.data} route="lesson" />
                                <Paginate
                                    page={listLesson}
                                    handlePageEvent={switchPageLesson}
                                />
                            </div>
                        )}
                        {listSubject && (
                            <div className="my-3">
                                <div className="h3 text-center">
                                    {t("Subjects")}
                                </div>
                                <List2
                                    list={listSubject.data}
                                    route="subject"
                                />
                                <Paginate
                                    page={listSubject}
                                    handlePageEvent={switchPageSubject}
                                />
                            </div>
                        )}
                        {listChannel && (
                            <div className="my-3">
                                <div className="h3 text-center">
                                    {t("Channels")}
                                </div>
                                <List3
                                    list={listChannel.data}
                                    route="channel"
                                />
                                <Paginate
                                    page={listChannel}
                                    handlePageEvent={switchPageChannel}
                                />
                            </div>
                        )}
                        {listCourse && (
                            <div className="my-3">
                                <div className="h3 text-center">
                                    {t("Courses")}
                                </div>
                                <List1 list={listCourse.data} route="course" />
                                <Paginate
                                    page={listCourse}
                                    handlePageEvent={switchPageCourse}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
