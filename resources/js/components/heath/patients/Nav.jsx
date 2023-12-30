import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function Nav() {
    const { t } = useTranslation();

    const [_, setSearchParams] = useSearchParams();

    function handleSearch(event) {
        event.preventDefault();

        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            const query = event.target.elements.query.value.trim();

            query ? newQuery.set("query", query) : newQuery.delete("query");

            return newQuery.toString();
        });
    }

    return (
        <section className="row my-3">
            <div className="col-md-6">
                <button className="btn btn-outline-primary mb-2 me-2" disabled>
                    {t("Patient overview")}
                </button>
                <button className="btn btn-primary mb-2 me-2">
                    {t("Patients list")}
                </button>
                <button className="btn btn-outline-primary mb-2 me-2">
                    {t("Invitations")}
                </button>
            </div>
            <div className="col-md-6">
                <form role="search" onSubmit={handleSearch}>
                    <fieldset>
                        <input
                            type="search"
                            name="query"
                            className="form-control w-50 ms-auto"
                            placeholder={t("Search")}
                        />
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
