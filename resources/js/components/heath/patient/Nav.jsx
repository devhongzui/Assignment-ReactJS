import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { urlHelper } from "../../../helper.js";

export default function Nav() {
    const { t } = useTranslation();

    return (
        <section className="row my-3">
            <div className="col-md-6">
                <button className="btn btn-primary mb-2 me-2">
                    {t("Patient overview")}
                </button>
                <Link
                    to={urlHelper("patients")}
                    className="btn btn-outline-primary mb-2 me-2"
                    aria-label={t("Patients list")}
                >
                    {t("Patients list")}
                </Link>
                <button className="btn btn-outline-primary mb-2 me-2">
                    {t("Invitations")}
                </button>
            </div>
            <div className="col-md-6">
                <form>
                    <fieldset>
                        <input
                            type="search"
                            name="search"
                            className="form-control w-50 ms-auto"
                            placeholder={t("Search")}
                        />
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
