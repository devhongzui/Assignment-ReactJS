import { useTranslation } from "react-i18next";

export default function Nav() {
    const { t } = useTranslation();

    return (
        <section className="row my-3">
            <div className="col-md-6">
                <button className="btn btn-outline-primary mb-2 me-2">
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
