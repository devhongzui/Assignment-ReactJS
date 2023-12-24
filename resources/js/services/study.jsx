import axios from "axios";
import { urlHelper } from "../helper.js";

export const courses = (page, limit) =>
    axios.get(urlHelper("api/study/course"), {
        params: {
            page,
            limit,
        },
    });

export const course = (course_id) =>
    axios.get(urlHelper(`api/study/course/${course_id}`));

export const subjects = (course_id, page, limit) =>
    axios.get(urlHelper("api/study/subject"), {
        params: {
            course_id,
            page,
            limit,
        },
    });

export const subject = (subject_id) =>
    axios.get(urlHelper(`api/study/subject/${subject_id}`));

export const lessons = (subject_id, page, limit) =>
    axios.get(urlHelper("api/study/lesson"), {
        params: {
            subject_id,
            page,
            limit,
        },
    });

export const lesson = (lesson_id, next_lesson) =>
    axios.get(urlHelper(`api/study/lesson/${lesson_id}`), {
        params: { next_lesson },
    });
