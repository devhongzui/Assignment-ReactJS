import Nav from "../../components/heath/patient/Nav.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { patient } from "../../services/heath.jsx";
import Card from "../../components/heath/patient/Card.jsx";
import { Measurements } from "../../components/heath/patient/Measurements.jsx";
import { Activities } from "../../components/heath/patient/Activities.jsx";

export default function Patient() {
    const { patient_id } = useParams();

    const [patientInformation, setPatientInformation] = useState(null);

    useEffect(() => {
        patient(patient_id).then((success) => {
            setPatientInformation(success.data);
        });
    }, [patient_id]);

    return (
        <div className="container">
            <Nav />
            {patientInformation && <Card item={patientInformation} />}
            <Measurements />
            <Activities />
        </div>
    );
}
