import { useTranslation } from "react-i18next";
import { urlHelper } from "../../../../helper.js";
import { Link, useSearchParams } from "react-router-dom";

export default function Card({
    list,
    getStatusClass,
    selected,
    handleEventSelect,
}) {
    const { t } = useTranslation();

    const [searchParams, setSearchParams] = useSearchParams();

    const sorting_field = searchParams.get("sorting_field");

    const sorting_direction = searchParams.get("sorting_direction");

    function getSortValue() {
        switch (sorting_field) {
            case "first_name":
                return sorting_direction === "asc" ? "0" : "1";
            case "last_name":
                return sorting_direction === "asc" ? "2" : "3";
            case "status":
                return sorting_direction === "asc" ? "4" : "5";
            default:
                return "";
        }
    }

    function handleSort(event) {
        const { value } = event.target;

        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            switch (value) {
                case "0":
                    newQuery.set("sorting_field", "first_name");
                    newQuery.set("sorting_direction", "asc");
                    break;
                case "1":
                    newQuery.set("sorting_field", "first_name");
                    newQuery.set("sorting_direction", "desc");
                    break;
                case "2":
                    newQuery.set("sorting_field", "last_name");
                    newQuery.set("sorting_direction", "asc");
                    break;
                case "3":
                    newQuery.set("sorting_field", "last_name");
                    newQuery.set("sorting_direction", "desc");
                    break;
                case "4":
                    newQuery.set("sorting_field", "status");
                    newQuery.set("sorting_direction", "asc");
                    break;
                case "5":
                    newQuery.set("sorting_field", "status");
                    newQuery.set("sorting_direction", "desc");
                    break;
                default:
                    newQuery.delete("sorting_field");
                    newQuery.delete("sorting_direction");
                    break;
            }

            return newQuery.toString();
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <button
                        className={
                            selected.length === list.length
                                ? "btn btn-danger mb-2 me-2"
                                : "btn btn-success mb-2 me-2"
                        }
                        name="all"
                        onClick={handleEventSelect}
                    >
                        {selected.length === list.length
                            ? t("Unselect all")
                            : t("Select all")}
                    </button>
                </div>
                <div className="col-6">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-auto">
                            <label
                                className="form-label fw-bold"
                                htmlFor="sort"
                            >
                                {t("Sort by")}
                            </label>
                        </div>
                        <div className="col-auto">
                            <select
                                className="form-select m-2 ms-0"
                                id="sort"
                                name="sort"
                                value={getSortValue()}
                                onChange={handleSort}
                            >
                                <option>{t("Choose")}</option>
                                <option value="0">
                                    {t("First name")} (A-Z)
                                </option>
                                <option value="1">
                                    {t("First name")} (Z-A)
                                </option>
                                <option value="2">
                                    {t("Last name")} (A-Z)
                                </option>
                                <option value="3">
                                    {t("Last name")} (Z-A)
                                </option>
                                <option value="4">
                                    {t("Status")} ({t("Desc")})
                                </option>
                                <option value="5">
                                    {t("Status")} ({t("Asc")})
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {list.map((value, index) => (
                    <div key={index} className="col-md-6 col-xl-4 mb-3">
                        <div
                            className={
                                selected.includes(value["_id"])
                                    ? "card border-primary"
                                    : "card"
                            }
                        >
                            <div className="card-body">
                                <div className="card-text">
                                    <div className="row mb-2">
                                        <strong className="col-md-6">
                                            {t("First name")}
                                        </strong>
                                        <div className="col-md-6">
                                            {value["first_name"]}
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <strong className="col-md-6">
                                            {t("Last name")}
                                        </strong>
                                        <div className="col-md-6">
                                            {value["last_name"]}
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <strong className="col-md-6">
                                            {t("Status")}
                                        </strong>
                                        <div className="col-md-6">
                                            <i
                                                className={getStatusClass(
                                                    value.status,
                                                )}
                                            ></i>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <strong className="col-md-6">
                                            {t("Last Measurement")}
                                        </strong>
                                        <div className="col-md-6">
                                            {value["measurements"][0]["index1"]}
                                            /
                                            {value["measurements"][0]["index2"]}{" "}
                                            -{" "}
                                            {value["measurements"][0]["index3"]}{" "}
                                            BPM
                                            <br />
                                            <span className="text-secondary">
                                                {value["measurements"][0].time}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <strong className="col-md-6">
                                            {t("Last Visit")}
                                        </strong>
                                        <div className="col-md-6">
                                            {value["activities"][0].time}
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <strong className="col-md-6">
                                            {t("Contact")}
                                        </strong>
                                        <div className="col-md-6">
                                            <a
                                                href={`tel:${value["contacts"]["phone"]}`}
                                            >
                                                <i className="fa-solid fa-phone mx-2 mb-2"></i>
                                            </a>
                                            <a
                                                href={`mailto:${value["contacts"]["mail"]}`}
                                            >
                                                <i className="fa-regular fa-envelope mx-2 mb-2"></i>
                                            </a>
                                            <Link
                                                to={urlHelper(
                                                    `patient/${value["_id"]}`,
                                                )}
                                            >
                                                <i className="fa-solid fa-ellipsis mx-2 mb-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
