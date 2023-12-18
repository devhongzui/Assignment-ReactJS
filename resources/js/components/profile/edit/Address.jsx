import ValidateMessage from "../../auth/login/ValidateMessage.jsx";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import { assetHelper } from "../../../helper.js";

export default function Address({ validate, user }) {
    const { t } = useTranslation();

    const [provinces, setProvinces] = useState([]);

    const [province, setProvince] = useState(
        user.province_code === null ? "" : user.province_code,
    );

    const [districts, setDistricts] = useState([]);

    const [district, setDistrict] = useState(
        user.district_code === null ? "" : user.district_code,
    );

    const [sub_districts, setSubDistricts] = useState([]);

    const [sub_district, setSubDistrict] = useState(
        user.sub_district_code === null ? "" : user.sub_district_code,
    );

    useEffect(() => {
        axios
            .get(assetHelper("api/address/provinces"))
            .then((success) => setProvinces(success.data));
        axios
            .get(assetHelper("api/address/districts"))
            .then((success) => setDistricts(success.data));
        axios
            .get(assetHelper("api/address/sub_districts"))
            .then((success) => setSubDistricts(success.data));
    }, []);

    function changeProvince(event) {
        setProvince(parseInt(event.target.value));
    }

    function changeDistrict(event) {
        setDistrict(parseInt(event.target.value));
    }

    function changeSubDistrict(event) {
        setSubDistrict(parseInt(event.target.value));
    }

    return (
        <>
            {provinces && (
                <div className="form-floating mb-3">
                    <select
                        className={
                            validate["province_code"]
                                ? "form-control is-invalid"
                                : "form-control"
                        }
                        name="province_code"
                        value={province}
                        onChange={changeProvince}
                    >
                        <option disabled={province !== ""}>
                            {t("Choose")}
                        </option>
                        {provinces.map((value, index) => (
                            <option key={index} value={value.code}>
                                {value.name}
                            </option>
                        ))}
                    </select>
                    <label>{t("Province")}</label>
                    <ValidateMessage field={validate["province_code"]} />
                </div>
            )}
            <div className="row">
                <div className="col-md-6">
                    <div className="form-floating mb-3">
                        <select
                            className={
                                validate["district_code"]
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                            name="district_code"
                            value={district}
                            onChange={changeDistrict}
                        >
                            <option disabled={district !== ""}>
                                {t("Choose")}
                            </option>
                            {districts.map(
                                (value, index) =>
                                    value.province_code === province && (
                                        <option key={index} value={value.code}>
                                            {value.name}
                                        </option>
                                    ),
                            )}
                        </select>
                        <label>{t("District")}</label>
                        <ValidateMessage field={validate["district_code"]} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating mb-3">
                        <select
                            className={
                                validate["sub_district_code"]
                                    ? "form-control is-invalid"
                                    : "form-control"
                            }
                            name="sub_district_code"
                            value={sub_district}
                            onChange={changeSubDistrict}
                        >
                            <option disabled={sub_district !== ""}>
                                {t("Choose")}
                            </option>
                            {sub_districts.map(
                                (value, index) =>
                                    value.district_code === district && (
                                        <option key={index} value={value.code}>
                                            {value.name}
                                        </option>
                                    ),
                            )}
                        </select>
                        <label>{t("Sub district")}</label>
                        <ValidateMessage
                            field={validate["sub_district_code"]}
                        />
                    </div>
                </div>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className={
                        validate["address_detail"]
                            ? "form-control is-invalid"
                            : "form-control"
                    }
                    name="address_detail"
                    defaultValue={user["address_detail"]}
                    autoComplete="address_detail"
                />
                <label>{t("Address detail")}</label>
                <ValidateMessage field={validate["address_detail"]} />
            </div>
        </>
    );
}
