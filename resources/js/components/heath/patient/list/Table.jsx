import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Table({
    list,
    getStatusClass,
    selected,
    handleEventSelect,
}) {
    const { t } = useTranslation();

    const [sorted, setSorted] = useState({});

    function handleSort(event) {
        event.preventDefault();

        const name = event.target.getAttribute("data-name");

        sorted.name === name && sorted.type === "desc"
            ? setSorted({
                  name: name,
                  type: "asc",
              })
            : setSorted({
                  name: name,
                  type: "desc",
              });
    }

    function getSortTextIcon() {
        return sorted.type === "desc" ? (
            <i className="fa-solid fa-arrow-down-a-z"></i>
        ) : (
            <i className="fa-solid fa-arrow-down-z-a"></i>
        );
    }

    function getSortIcon() {
        return sorted.type === "desc" ? (
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
                            >
                                {t("First name")}
                                {sorted.name === "first_name" &&
                                    getSortTextIcon()}
                            </a>
                        </th>
                        <th scope="col">
                            <a
                                href="#"
                                data-name="last_name"
                                onClick={handleSort}
                            >
                                {t("Last name")}
                                {sorted.name === "last_name" &&
                                    getSortTextIcon()}
                            </a>
                        </th>
                        <th scope="col">
                            <a href="#" data-name="status" onClick={handleSort}>
                                {t("Status")}
                                {sorted.name === "status" && getSortIcon()}
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
                                <p className="mb-0">
                                    {value["measurement"][0]["index1"]}/
                                    {value["measurement"][0]["index2"]} -{" "}
                                    {value["measurement"][0]["index3"]} BPM
                                </p>
                                <p className="mb-0 text-secondary">
                                    {value["measurement"][0]["time"]}
                                </p>
                            </td>
                            <td>{value["visit"][0]}</td>
                            <td>
                                <a href={`tel:${value["contacts"]["phone"]}`}>
                                    <i className="fa-solid fa-phone mx-4 mb-2"></i>
                                </a>
                                <a href={`mailto:${value["contacts"]["mail"]}`}>
                                    <i className="fa-regular fa-envelope mx-4 mb-2"></i>
                                </a>
                                <i className="fa-solid fa-ellipsis mx-4 mb-2"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
