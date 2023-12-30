import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { urlHelper } from "../../../../helper.js";

export default function Table({
    list,
    getStatusClass,
    selected,
    handleEventSelect,
}) {
    const { t } = useTranslation();

    const [searchParams, setSearchParams] = useSearchParams();

    const sorting_field = searchParams.get("sorting_field");

    const sorting_direction = searchParams.get("sorting_direction");

    function handleSort(event) {
        event.preventDefault();

        const name = event.target.getAttribute("data-name");

        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            if (sorting_field === name && sorting_direction === "desc") {
                newQuery.set("sorting_field", name);
                newQuery.set("sorting_direction", "asc");
            } else {
                newQuery.set("sorting_field", name);
                newQuery.set("sorting_direction", "desc");
            }

            return newQuery.toString();
        });
    }

    function handleUnSort() {
        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            newQuery.delete("sorting_field");
            newQuery.delete("sorting_direction");

            return newQuery.toString();
        });
    }

    function getSortTextIcon() {
        return sorting_direction === "asc" ? (
            <i className="fa-solid fa-arrow-down-a-z"></i>
        ) : (
            <i className="fa-solid fa-arrow-down-z-a"></i>
        );
    }

    function getSortIcon() {
        return sorting_direction === "asc" ? (
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
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={selected.length === list.length}
                                    name="all"
                                    onChange={handleEventSelect}
                                />
                            </div>
                        </th>
                        <th scope="col">
                            <a
                                href="#"
                                data-name="first_name"
                                onClick={handleSort}
                                onDoubleClick={handleUnSort}
                            >
                                {t("First name")}
                                {sorting_field === "first_name" &&
                                    getSortTextIcon()}
                            </a>
                        </th>
                        <th scope="col">
                            <a
                                href="#"
                                data-name="last_name"
                                onClick={handleSort}
                                onDoubleClick={handleUnSort}
                            >
                                {t("Last name")}
                                {sorting_field === "last_name" &&
                                    getSortTextIcon()}
                            </a>
                        </th>
                        <th scope="col">
                            <a
                                href="#"
                                data-name="status"
                                onClick={handleSort}
                                onDoubleClick={handleUnSort}
                            >
                                {t("Status")}
                                {sorting_field === "status" && getSortIcon()}
                            </a>
                        </th>
                        <th scope="col">{t("Last Measurement")}</th>
                        <th scope="col">{t("Last Visit")}</th>
                        <th scope="col">{t("Contact")}</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, index) => (
                        <tr key={index}>
                            <th scope="row">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={selected.includes(
                                            value["_id"],
                                        )}
                                        value={value["_id"]}
                                        onChange={handleEventSelect}
                                    />
                                </div>
                            </th>
                            <td>{value["first_name"]}</td>
                            <td>{value["last_name"]}</td>
                            <td>
                                <i className={getStatusClass(value.status)}></i>
                            </td>
                            <td>
                                {value["measurements"][0]["index1"]}/
                                {value["measurements"][0]["index2"]} -{" "}
                                {value["measurements"][0]["index3"]} BPM
                                <br />
                                <span className="text-secondary">
                                    {value["measurements"][0]["time"]}
                                </span>
                            </td>
                            <td>{value["activities"][0].time}</td>
                            <td>
                                <a href={`tel:${value["contacts"]["phone"]}`}>
                                    <i className="fa-solid fa-phone mx-4 mb-2"></i>
                                </a>
                                <a href={`mailto:${value["contacts"]["mail"]}`}>
                                    <i className="fa-regular fa-envelope mx-4 mb-2"></i>
                                </a>
                                <Link to={urlHelper(`patient/${value["_id"]}`)}>
                                    <i className="fa-solid fa-ellipsis mx-4 mb-2"></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
