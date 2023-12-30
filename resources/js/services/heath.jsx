import axios from "axios";
import { assetHelper } from "../helper.js";

export const patients = (page, limit, query, sorting, filters) =>
    axios.get(assetHelper("api/heath/patient"), {
        params: {
            page,
            limit,
            query,
            sorting,
            filters,
        },
    });

export const getRelationshipByPatientId = (
    patient_id,
    relationship,
    page,
    limit,
    sorting,
) =>
    axios.get(assetHelper(`api/heath/patient/${patient_id}`), {
        params: {
            relationship,
            page,
            limit,
            sorting,
        },
    });

export const patient = (patient_id) =>
    axios.get(assetHelper(`api/heath/patient/${patient_id}`));
