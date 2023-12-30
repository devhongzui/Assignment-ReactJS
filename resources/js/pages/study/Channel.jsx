import { useTranslation } from "react-i18next";
import { assetHelper, initSite } from "../../helper.js";
import { useEffect, useState } from "react";
import { channel, getRelationshipByChannelId } from "../../services/study.jsx";
import { useParams, useSearchParams } from "react-router-dom";
import Detail from "../../components/study/course/Detail.jsx";
import List from "../../components/study/course/List.jsx";
import Paginate from "../../components/study/courses/Paginate.jsx";

export default function Channel() {
    const { t } = useTranslation();

    const [searchParams] = useSearchParams();

    const lesson_page = searchParams.get("lesson_page");

    const lesson_limit = searchParams.get("lesson_limit");

    const subject_page = searchParams.get("subject_page");

    const subject_limit = searchParams.get("subject_limit");

    const { channel_id } = useParams();

    const [channelInformation, setChannelInformation] = useState(null);

    const [listLesson, setListLesson] = useState(null);

    const [listSubject, setListSubject] = useState(null);

    useEffect(() => {
        channel(channel_id).then((success) => {
            setChannelInformation(success.data);

            initSite({
                title: [t("Channel"), success.data.title].join(": "),
                description: success.data.description,
                image: assetHelper(success.data.image),
            });
        });
    }, [channel_id]);

    useEffect(() => {
        getRelationshipByChannelId(
            channel_id,
            "lesson",
            lesson_page,
            lesson_limit,
        ).then((success) => setListLesson(success.data));
    }, [lesson_page, lesson_limit]);

    useEffect(() => {
        getRelationshipByChannelId(
            channel_id,
            "subject",
            subject_page,
            subject_limit,
        ).then((success) => setListSubject(success.data));
    }, [subject_page, subject_limit]);

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
                    <Paginate page={listLesson} param="lesson_page" />
                </div>
            )}
            {channelInformation && listSubject && (
                <div className="my-3">
                    <div className="h3 text-center">
                        {t("Subjects of")}{" "}
                        <strong>{channelInformation.title}</strong>
                    </div>
                    <List list={listSubject.data} route="subject" />
                    <Paginate page={listSubject} param="subject_page" />
                </div>
            )}
        </div>
    );
}
