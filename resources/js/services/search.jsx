import axios from "axios";
import { assetHelper } from "../helper.js";

export const search = (type, query, page, limit) =>
    axios.get(assetHelper(`api/search`), {
        params: {
            type,
            query,
            page,
            limit,
        },
    });
