import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import { urlHelper } from "../../../helper.js";

export default function TwoFactorRecoveryCodes() {
    const { t } = useTranslation();

    const [recovery_codes, setRecoveryCodes] = useState([]);

    useEffect(() => {
        axios
            .get(urlHelper("user/two-factor-recovery-codes"))
            .then((success) => {
                if (typeof success.data === "object")
                    setRecoveryCodes(success.data);
            });
    }, []);

    return (
        recovery_codes && (
            <div className="row mb-3">
                <div className="offset-md-1 col-md-3 text-primary fw-bold">
                    {t("Recovery Codes")}
                </div>
                <div className="col-md-7">
                    <ol>
                        {recovery_codes.map((value, index) => (
                            <li key={index}>
                                <code>{value}</code>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    );
}
