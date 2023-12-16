import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Search() {
    const { t } = useTranslation();

    const user = useSelector((state) => state.user.value);

    return (
        <form
            className="col-12 col-xl-auto mt-3 mb-2 mt-xl-0 mb-xl-0 mx-xl-auto"
            role="search"
        >
            {user && !user["email_verified_at"] ? null : (
                <div className="d-flex">
                    <input
                        type="search"
                        className="form-control form-control border-primary me-2"
                        placeholder={t("Search")}
                        aria-label={t("Search")}
                    />
                    <button
                        className="btn btn-primary ms-2"
                        type="submit"
                        role="button"
                        aria-label={t("Search")}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            )}
        </form>
    );
}
