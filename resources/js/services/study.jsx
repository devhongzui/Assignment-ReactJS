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
