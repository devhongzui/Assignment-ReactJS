import { useTranslation } from "react-i18next";

export default function Subscribe() {
    const { t } = useTranslation();

    return (
        <div className="col-md-5 offset-md-1 mb-3">
            <form>
                <h5>{t("Subscribe to our newsletter")}</h5>
                <p>{t("Monthly digest of what's new and exciting from us.")}</p>
                <div className="row">
                    <fieldset className="col-md-7">
                        <label className="visually-hidden"></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={t("Email address")}
                        />
                    </fieldset>
                    <div className="col-md-5">
                        <button
                            className="btn btn-primary mt-2 mt-md-0 w-100"
                            type="submit"
                            aria-label={t("Subscribe")}
                        >
                            {t("Subscribe")}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
