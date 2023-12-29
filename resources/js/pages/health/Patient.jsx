import { useEffect, useState } from "react";
import { patients } from "../../services/heath.jsx";
import { useSearchParams } from "react-router-dom";
import Filter from "../../components/heath/patient/Filter.jsx";
import List from "../../components/heath/patient/list/List.jsx";
import Actions from "../../components/heath/patient/Actions.jsx";
import Nav from "../../components/heath/patient/Nav.jsx";

export default function Patient() {
    const [searchParams] = useSearchParams();

    const page = searchParams.get("page");

    const limit = searchParams.get("limit");

    const [listPatient, setListPatient] = useState(null);

    const [selected, setSelected] = useState([]);

    const [mode, setMode] = useState(0);

    useEffect(() => {
        patients(page, limit).then((success) => setListPatient(success.data));
    }, [page]);

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
