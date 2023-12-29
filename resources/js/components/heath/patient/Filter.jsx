import { useTranslation } from "react-i18next";

export default function Filter() {
    const { t } = useTranslation();

    return (
        <section className="collapse" id="filter">
            <form className="card card-body">
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
                            className="form-control m-2 ms-0"
                            placeholder={t("Last name")}
                        />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label fw-bold" htmlFor="gender">
                            {t("Status")}
                        </label>
                        <select
                            className="form-select m-2 ms-0"
                            id="gender"
                            name="gender"
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
                        />
                        <input
                            name="mail"
                            type="email"
                            className="form-control m-2 ms-0"
                            placeholder={t("Email")}
                        />
                        <input
                            name="others"
                            type="text"
                            className="form-control m-2 ms-0"
                            placeholder={t("Other")}
                        />
                    </div>
                </fieldset>
                <div>
                    <button className="btn btn-primary mb-2 me-2" type="submit">
                        {t("Apply")}
                    </button>
                    <button
                        className="btn btn-outline-primary mb-2 me-2"
                        type="button"
                    >
                        {t("Cancel")}
                    </button>
                    <button className="btn btn-danger mb-2 me-2" type="reset">
                        {t("Reset")}
                    </button>
                </div>
            </form>
        </section>
    );
}
