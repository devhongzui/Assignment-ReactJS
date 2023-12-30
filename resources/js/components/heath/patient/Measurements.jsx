import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export function Measurements({ list }) {
    const { t } = useTranslation();

    const [searchParams, setSearchParams] = useSearchParams();

    const measurement_sorting_field = searchParams.get(
        "measurement_sorting_field",
    );

    const measurement_sorting_direction = searchParams.get(
        "measurement_sorting_direction",
    );

    function handleSort(event) {
        event.preventDefault();

        const name = event.target.getAttribute("data-name");

        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            if (
                measurement_sorting_field === name &&
                measurement_sorting_direction === "desc"
            ) {
                newQuery.set("measurement_sorting_field", name);
                newQuery.set("measurement_sorting_direction", "asc");
            } else {
                newQuery.set("measurement_sorting_field", name);
                newQuery.set("measurement_sorting_direction", "desc");
            }

            return newQuery.toString();
        });
    }

    function handleUnSort() {
        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            newQuery.delete("measurement_sorting_field");
            newQuery.delete("measurement_sorting_direction");

            return newQuery.toString();
        });
    }

    function getSortIcon() {
        return measurement_sorting_direction === "asc" ? (
            <i className="fa-solid fa-sort-down"></i>
        ) : (
            <i className="fa-solid fa-sort-up"></i>
        );
    }

    return (
        <div className="table-responsive">
            <table className="table table-hover table-striped text-center">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">{t("Index")}</th>
                        <th scope="col">
                            <a
                                href="#"
                                data-name="time"
                                onClick={handleSort}
                                onDoubleClick={handleUnSort}
                            >
                                {t("Time")}
                                {measurement_sorting_field === "time" &&
                                    getSortIcon()}
                            </a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, index) => (
                        <tr key={index}>
                            <td>
                                {value["index1"]}/{value["index2"]} -{" "}
                                {value["index3"]} BPM
                            </td>
                            <td>{value.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
