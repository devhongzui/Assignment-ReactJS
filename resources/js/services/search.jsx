import axios from "axios";
import { urlHelper } from "../helper.js";

export const search = (type, query, page, limit) =>
    axios.get(urlHelper(`api/search`), {
        params: {
            type,
            query,
            page,
            limit,
        },
    });
