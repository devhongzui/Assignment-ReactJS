import Nav from "../../components/heath/patient/Nav.jsx";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRelationshipByPatientId, patient } from "../../services/heath.jsx";
import Card from "../../components/heath/patient/Card.jsx";
import { Measurements } from "../../components/heath/patient/Measurements.jsx";
import { Activities } from "../../components/heath/patient/Activities.jsx";
import Paginate from "../../components/study/courses/Paginate.jsx";
import { useTranslation } from "react-i18next";

export default function Patient() {
    const { t } = useTranslation();

    const [searchParams] = useSearchParams();

    const measurement_page = searchParams.get("measurement_page");

    const measurement_limit = searchParams.get("measurement_limit");

    const _activity_page = searchParams.get("_activity_page");

    const activity_limit = searchParams.get("activity_limit");

    const measurement_sorting_field = searchParams.get(
        "measurement_sorting_field",
    );

    const measurement_sorting_direction = searchParams.get(
        "measurement_sorting_direction",
    );

    const activity_sorting_field = searchParams.get("activity_sorting_field");

    const activity_sorting_direction = searchParams.get(
        "activity_sorting_direction",
    );

    const { patient_id } = useParams();

    const [patientInformation, setPatientInformation] = useState(null);

    const [listMeasurement, setListMeasurement] = useState(null);

    const [listActivity, setListActivity] = useState(null);

    useEffect(() => {
        patient(patient_id).then((success) => {
            setPatientInformation(success.data);
        });
    }, [patient_id]);

    useEffect(() => {
        getRelationshipByPatientId(
            patient_id,
            "measurement",
            measurement_page,
            measurement_limit,
            {
                measurement_sorting_field,
                measurement_sorting_direction,
            },
        ).then((success) => setListMeasurement(success.data));
    }, [
        measurement_page,
        measurement_limit,
        measurement_sorting_field,
        measurement_sorting_direction,
    ]);

    useEffect(() => {
        getRelationshipByPatientId(
            patient_id,
            "activity",
            _activity_page,
            activity_limit,
            {
                activity_sorting_field,
                activity_sorting_direction,
            },
        ).then((success) => setListActivity(success.data));
    }, [
        _activity_page,
        activity_limit,
        activity_sorting_field,
        activity_sorting_direction,
    ]);

    return (
        <div className="container">
            <Nav />
            {patientInformation && <Card item={patientInformation} />}
            <section className="my-3">
                <div className="row">
                    {patientInformation && listMeasurement && (
                        <div className="col-md-6">
                            <div className="h3 text-center">
                                {t("Measurement of")}{" "}
                                <strong>
                                    {patientInformation.first_name}{" "}
                                    {patientInformation.last_name}
                                </strong>
                            </div>
                            <Measurements list={listMeasurement.data} />
                            <Paginate
                                page={listMeasurement}
                                param="measurement_page"
                            />
                        </div>
                    )}
                    {patientInformation && listActivity && (
                        <div className="col-md-6">
                            <div className="h3 text-center">
                                {t("Activity of")}{" "}
                                <strong>
                                    {patientInformation.first_name}{" "}
                                    {patientInformation.last_name}
                                </strong>
                            </div>
                            <Activities list={listActivity.data} />
                            <Paginate
                                page={listActivity}
                                param="_activity_page"
                            />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
