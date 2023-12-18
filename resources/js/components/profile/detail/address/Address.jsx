import { useTranslation } from "react-i18next";
import State from "./State.jsx";

export default function Address({ user }) {
    const { t } = useTranslation();

    return (
        <>
            <State
                label={t("Province")}
                state="provinces"
                stateCode={user["province_code"]}
            />
            <State
                label={t("District")}
                state="districts"
                stateCode={user["district_code"]}
            />
            <State
                label={t("Sub district")}
                state="sub_districts"
                stateCode={user["sub_district_code"]}
            />
            {user["address_detail"] && (
                <div className="row mb-3">
                    <div className="offset-md-1 col-md-3 text-primary fw-bold">
                        {t("Address detail")}
                    </div>
                    <div className="col-md-7">{user["address_detail"]}</div>
                </div>
            )}
        </>
    );
}
