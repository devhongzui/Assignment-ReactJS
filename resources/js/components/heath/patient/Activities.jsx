import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export function Activities({ list }) {
    const { t } = useTranslation();

    const [searchParams, setSearchParams] = useSearchParams();

    const activity_sorting_field = searchParams.get("activity_sorting_field");

    const activity_sorting_direction = searchParams.get(
        "activity_sorting_direction",
    );

    function handleSort(event) {
        event.preventDefault();

        const name = event.target.getAttribute("data-name");

        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            if (
                activity_sorting_field === name &&
                activity_sorting_direction === "desc"
            ) {
                newQuery.set("activity_sorting_field", name);
                newQuery.set("activity_sorting_direction", "asc");
            } else {
                newQuery.set("activity_sorting_field", name);
                newQuery.set("activity_sorting_direction", "desc");
            }

            return newQuery.toString();
        });
    }

    function handleUnSort() {
        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            newQuery.delete("activity_sorting_field");
            newQuery.delete("activity_sorting_direction");

            return newQuery.toString();
        });
    }

    function getSortIcon() {
        return activity_sorting_direction === "asc" ? (
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
                        <th scope="col">
                            <a
                                href="#"
                                data-name="time"
                                onClick={handleSort}
                                onDoubleClick={handleUnSort}
                            >
                                {t("Time")}
                                {activity_sorting_field === "time" &&
                                    getSortIcon()}
                            </a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, index) => (
                        <tr key={index}>
                            <td>{value.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
