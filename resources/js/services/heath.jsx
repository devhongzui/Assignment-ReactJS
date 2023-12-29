import axios from "axios";
import { assetHelper } from "../helper.js";

export const patients = (page, limit) =>
    axios.get(assetHelper("api/heath/patient"), {
        params: {
            page,
            limit,
        },
    });
