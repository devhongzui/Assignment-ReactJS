import { useTranslation } from "react-i18next";
import { assetHelper, initSite } from "../../helper.js";
import { useEffect, useState } from "react";
import { lesson } from "../../services/study.jsx";
import { useParams } from "react-router-dom";
import Video from "../../components/study/lesson/Video.jsx";
import List from "../../components/study/lesson/List.jsx";
import Comment from "../../components/study/lesson/Comment.jsx";

export default function Lesson() {
    const { t } = useTranslation();

    const { lesson_id } = useParams();

    const [lessonInformation, setLessonInformation] = useState(null);

    const [listLesson, setListLesson] = useState(null);

    useEffect(() => {
        lesson(lesson_id).then((success) => {
            setLessonInformation(success.data);

            initSite({
                title: [t("Lesson"), success.data.title].join(": "),
                description: success.data.description,
                image:
                    success.data["thumbnails"][0]?.url ??
                    assetHelper("logo.png"),
            });
        });

        lesson(lesson_id, true).then((success) => setListLesson(success.data));
    }, [lesson_id]);

    return (
        <div className="container my-3">
            {lessonInformation && (
                <div className="row">
                    <div className="col-xl-8 order-0 mb-3">
                        <Video lesson={lessonInformation} />
                    </div>
                    <div className="col-xl-4 order-2 order-xl-1 mb-3">
                        {listLesson && (
                            <List
                                listLesson={listLesson}
                                lessonId={lessonInformation.id}
                            />
                        )}
                    </div>
                    <div className="col-12 order-1 order-xl-2 mb-3">
                        <Comment />
                    </div>
                </div>
            )}
        </div>
    );
}
