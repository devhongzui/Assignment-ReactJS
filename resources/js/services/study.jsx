import axios from "axios";
import { urlHelper } from "../helper.js";

export const courses = (page, limit) =>
    axios.get(urlHelper("api/study/courses"), {
        params: {
            page,
            limit,
        },
    });
