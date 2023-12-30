import { useEffect, useState } from "react";
import { patients } from "../../services/heath.jsx";
import { useSearchParams } from "react-router-dom";
import Filter from "../../components/heath/patients/Filter.jsx";
import List from "../../components/heath/patients/list/List.jsx";
import Actions from "../../components/heath/patients/Actions.jsx";
import Nav from "../../components/heath/patients/Nav.jsx";

export default function Patients() {
    const [searchParams] = useSearchParams();

    const page = searchParams.get("page");

    const limit = searchParams.get("limit");

    const query = searchParams.get("query");

    const first_name = searchParams.get("first_name");

    const last_name = searchParams.get("last_name");

    const status = searchParams.get("status");

    const phone = searchParams.get("phone");

    const mail = searchParams.get("mail");

    const other = searchParams.get("other");

    const sorting_field = searchParams.get("sorting_field");

    const sorting_direction = searchParams.get("sorting_direction");

    const [listPatient, setListPatient] = useState(null);

    const [selected, setSelected] = useState([]);

    const [mode, setMode] = useState(0);

    useEffect(() => {
        patients(
            page,
            limit,
            query,
            {
                sorting_field,
                sorting_direction,
            },
            {
                first_name,
                last_name,
                status,
                phone,
                mail,
                other,
            },
        ).then((success) => setListPatient(success.data));
    }, [
        page,
        limit,
        sorting_field,
        sorting_direction,
        first_name,
        last_name,
        status,
        phone,
        mail,
        other,
        query,
    ]);

    function handleSelect(event) {
        const { name, value } = event.target;

        if (name === "all")
            listPatient.data.length === selected.length
                ? setSelected([])
                : setSelected(listPatient.data.map((item) => item["_id"]));
        else
            selected.includes(value)
                ? setSelected(selected.filter((item) => item !== value))
                : setSelected([...selected, value]);
    }

    return (
        <div className="container">
            <Nav />
            <Actions
                mode={mode}
                setMode={setMode}
                selected={selected}
                listPatient={listPatient}
            />
            <Filter />
            <List
                listPatient={listPatient}
                mode={mode}
                selected={selected}
                handleSelect={handleSelect}
            />
        </div>
    );
}
