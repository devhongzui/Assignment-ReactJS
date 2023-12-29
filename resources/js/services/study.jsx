import axios from "axios";
import { assetHelper } from "../helper.js";

export const courses = (page, limit) =>
    axios.get(assetHelper("api/study/course"), {
        params: {
            page,
            limit,
        },
    });

export const course = (course_id) =>
    axios.get(assetHelper(`api/study/course/${course_id}`));

export const subjects = (course_id, page, limit) =>
    axios.get(assetHelper("api/study/subject"), {
        params: {
            course_id,
            page,
            limit,
        },
    });

export const subject = (subject_id) =>
    axios.get(assetHelper(`api/study/subject/${subject_id}`));

export const lessons = (subject_id, page, limit) =>
    axios.get(assetHelper("api/study/lesson"), {
        params: {
            subject_id,
            page,
            limit,
        },
    });

export const lesson = (lesson_id, next_lesson) =>
    axios.get(assetHelper(`api/study/lesson/${lesson_id}`), {
        params: { next_lesson },
    });

export const getRelationshipByChannelId = (
    channel_id,
    relationship,
    page,
    limit,
) =>
    axios.get(assetHelper(`api/study/channel/${channel_id}`), {
        params: {
            relationship,
            page,
            limit,
        },
    });

export const channel = (channel_id) =>
    axios.get(assetHelper(`api/study/channel/${channel_id}`));
