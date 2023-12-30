import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { urlHelper } from "../../../helper.js";
import i18next from "i18next";

export default function Nav() {
    const { t } = useTranslation();

    const navigate = useNavigate();

    function handleSearch() {
        navigate(`/${i18next.language}/patients`);
    }

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
                <form onSubmit={(event) => event.preventDefault()}>
                    <fieldset>
                        <input
                            type="search"
                            name="search"
                            className="form-control w-50 ms-auto"
                            placeholder={t("Search")}
                            readOnly
                            onClick={handleSearch}
                        />
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
