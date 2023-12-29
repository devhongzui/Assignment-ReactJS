import Table from "./Table.jsx";
import Card from "./Card.jsx";
import Legend from "./Legend.jsx";
import Paginate from "../../../study/courses/Paginate.jsx";

export default function List({ listPatient, mode, selected, handleSelect }) {
    function getStatusClass(code) {
        switch (code) {
            case 0:
                return "fa-solid fa-flag text-success";
            case 1:
                return "fa-solid fa-flag text-warning";
            case 2:
                return "fa-solid fa-flag text-danger";
            case 3:
                return "fa-solid fa-flag text-secondary";
        }
    }

    return (
        listPatient && (
            <section className="my-3">
                {mode === 0 ? (
                    <Table
                        list={listPatient.data}
                        getStatusClass={getStatusClass}
                        selected={selected}
                        handleEventSelect={handleSelect}
                    />
                ) : (
                    <Card
                        list={listPatient.data}
                        getStatusClass={getStatusClass}
                        selected={selected}
                        handleEventSelect={handleSelect}
                    />
                )}

                <Legend />
                <Paginate page={listPatient} />
            </section>
        )
    );
}
