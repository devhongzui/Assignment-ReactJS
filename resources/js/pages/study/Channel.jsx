import { useTranslation } from "react-i18next";
import { assetHelper, initSite } from "../../helper.js";
import { useEffect, useState } from "react";
import { channel, getRelationshipByChannelId } from "../../services/study.jsx";
import { useParams } from "react-router-dom";
import Detail from "../../components/study/course/Detail.jsx";
import List from "../../components/study/course/List.jsx";
import Paginate from "../../components/study/courses/Paginate.jsx";

export default function Channel() {
    const { t } = useTranslation();

    const { channel_id } = useParams();

    const [channelInformation, setChannelInformation] = useState(null);

    useEffect(() => {
        channel(channel_id).then((success) => {
            setChannelInformation(success.data);

            initSite({
                title: [t("Channel"), success.data.title].join(": "),
                description: success.data.description,
                image: assetHelper(success.data.image),
            });
        });

        getLessons();
        getSubjects();
    }, [channel_id]);

    const [listLesson, setListLesson] = useState(null);

    function getLessons(page) {
        getRelationshipByChannelId(channel_id, "lesson", page).then((success) =>
            setListLesson(success.data),
        );
    }

    function switchPageLesson(event) {
        event.preventDefault();

        getLessons(event.target.getAttribute("data-page"));
    }

    const [listSubject, setListSubject] = useState(null);

    function getSubjects(page) {
        getRelationshipByChannelId(channel_id, "subject", page).then(
            (success) => setListSubject(success.data),
        );
    }

    function switchPageSubject(event) {
        event.preventDefault();

        getSubjects(event.target.getAttribute("data-page"));
    }

    return (
        <div className="container my-3">
            {channelInformation && (
                <Detail
                    title={[t("Channel"), channelInformation.title].join(": ")}
                    subTitle={""}
                    description={channelInformation.description}
                    image={{
                        src:
                            channelInformation["thumbnails"][
                                channelInformation["thumbnails"].length - 1
                            ]?.url ?? assetHelper("logo.png"),
                        class: "object-fit-cover",
                    }}
                    pills={[]}
                />
            )}
            {channelInformation && listLesson && (
                <div className="my-3">
                    <div className="h3 text-center">
                        {t("Lessons of")}{" "}
                        <strong>{channelInformation.title}</strong>
                    </div>
                    <List list={listLesson.data} route="lesson" />
                    <Paginate
                        page={listLesson}
                        handlePageEvent={switchPageLesson}
                    />
                </div>
            )}
            {channelInformation && listSubject && (
                <div className="my-3">
                    <div className="h3 text-center">
                        {t("Subjects of")}{" "}
                        <strong>{channelInformation.title}</strong>
                    </div>
                    <List list={listSubject.data} route="subject" />
                    <Paginate
                        page={listSubject}
                        handlePageEvent={switchPageSubject}
                    />
                </div>
            )}
        </div>
    );
}
