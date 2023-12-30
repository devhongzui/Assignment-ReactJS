import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
    const { t } = useTranslation();

    const [searchParams, setSearchParams] = useSearchParams();

    const first_name = searchParams.get("first_name");

    const last_name = searchParams.get("last_name");

    const status = searchParams.get("status");

    const phone = searchParams.get("phone");

    const mail = searchParams.get("mail");

    const other = searchParams.get("other");

    function handleFilter(event) {
        event.preventDefault();

        const { first_name, last_name, status, phone, mail, other } =
            event.target.elements;

        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            first_name.value
                ? newQuery.set("first_name", first_name.value)
                : newQuery.delete("first_name");
            last_name.value
                ? newQuery.set("last_name", last_name.value)
                : newQuery.delete("last_name");
            parseInt(status.value) >= 0
                ? newQuery.set("status", status.value)
                : newQuery.delete("status");
            phone.value
                ? newQuery.set("phone", phone.value)
                : newQuery.delete("phone");
            mail.value
                ? newQuery.set("mail", mail.value)
                : newQuery.delete("mail");
            other.value
                ? newQuery.set("other", other.value)
                : newQuery.delete("other");

            return newQuery.toString();
        });
    }

    function handleReset() {
        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            newQuery.delete("first_name");

            newQuery.delete("last_name");

            newQuery.delete("status");

            newQuery.delete("phone");

            newQuery.delete("mail");

            newQuery.delete("other");

            return newQuery.toString();
        });
    }

    return (
        <section className="collapse" id="filter">
            <form
                className="card card-body"
                onSubmit={handleFilter}
                onReset={handleReset}
            >
                <fieldset className="row">
                    <div className="col-md-3">
                        <label
                            className="form-label fw-bold"
                            htmlFor="first_name"
                        >
                            {t("First name")}
                        </label>
                        <input
                            id="first_name"
                            autoFocus
                            type="text"
                            defaultValue={first_name}
                            className="form-control m-2 ms-0"
                            placeholder={t("First name")}
                        />
                    </div>
                    <div className="col-md-3">
                        <label
                            className="form-label fw-bold"
                            htmlFor="last_name"
                        >
                            {t("Last name")}
                        </label>
                        <input
                            id="last_name"
                            type="text"
                            defaultValue={last_name}
                            className="form-control m-2 ms-0"
                            placeholder={t("Last name")}
                        />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label fw-bold" htmlFor="status">
                            {t("Status")}
                        </label>
                        <select
                            className="form-select m-2 ms-0"
                            id="status"
                            name="status"
                            defaultValue={status}
                        >
                            <option>{t("Choose")}</option>
                            <option value="0">{t("Normal BP")}</option>
                            <option value="1">{t("Elevated BP")}</option>
                            <option value="2">
                                {t("High BP / Hypertenive")}
                            </option>
                            <option value="3">{t("Not Evaluable")}</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label className="form-label fw-bold" htmlFor="contact">
                            {t("Contact")}
                        </label>
                        <input
                            id="contact"
                            name="phone"
                            type="tel"
                            className="form-control m-2 ms-0"
                            placeholder={t("Phone number")}
                            defaultValue={phone}
                        />
                        <input
                            name="mail"
                            type="email"
                            className="form-control m-2 ms-0"
                            placeholder={t("Email")}
                            defaultValue={mail}
                        />
                        <input
                            name="other"
                            type="text"
                            className="form-control m-2 ms-0"
                            placeholder={t("Other")}
                            defaultValue={other}
                        />
                    </div>
                </fieldset>
                <div>
                    <button className="btn btn-primary mb-2 me-2" type="submit">
                        {t("Apply")}
                    </button>
                    <button className="btn btn-danger mb-2 me-2" type="reset">
                        {t("Reset")}
                    </button>
                </div>
            </form>
        </section>
    );
}
