import axios from "axios";
import { assetHelper } from "../../../helper.js";
import { useEffect, useState } from "react";

export default function State({ label, state, stateCode }) {
    const [stateName, setStateName] = useState(null);

    useEffect(() => {
        if (stateCode)
            axios
                .get(assetHelper(`api/address/${state}/${stateCode}`))
                .then((success) => setStateName(success.data.name));
    }, []);

    return (
        stateName !== null && (
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {label}
                </div>
                <div className="col-md-7">{stateName}</div>
            </div>
        )
    );
}
