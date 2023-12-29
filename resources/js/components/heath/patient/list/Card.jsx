import { useTranslation } from "react-i18next";

export default function Card({
    list,
    getStatusClass,
    selected,
    handleEventSelect,
}) {
    const { t } = useTranslation();

    return (
        <>
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
                                            <p className="mb-0">
                                                {
                                                    value["measurement"][0][
                                                        "index1"
                                                    ]
                                                }
                                                /
                                                {
                                                    value["measurement"][0][
                                                        "index2"
                                                    ]
                                                }{" "}
                                                -{" "}
                                                {
                                                    value["measurement"][0][
                                                        "index3"
                                                    ]
                                                }{" "}
                                                BPM
                                            </p>
                                            <p className="mb-0 text-secondary">
                                                {
                                                    value["measurement"][0][
                                                        "time"
                                                    ]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <strong className="col-md-6">
                                            {t("Last Visit")}
                                        </strong>
                                        <div className="col-md-6">
                                            {value["visit"][0]}
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
                                            <i className="fa-solid fa-ellipsis mx-2 mb-2"></i>
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
