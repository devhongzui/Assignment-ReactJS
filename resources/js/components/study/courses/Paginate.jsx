import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

export default function Paginate({ page, param }) {
    const { t } = useTranslation();

    const [_, setSearchParams] = useSearchParams();

    const {
        current_page,
        prev_page_url,
        next_page_url,
        from,
        to,
        total,
        links,
    } = page;

    function switchPage(event) {
        event.preventDefault();

        setSearchParams((prev) => {
            const newQuery = new URLSearchParams(prev);

            newQuery.set(
                param ?? "page",
                event.target.getAttribute("data-page"),
            );

            return newQuery.toString();
        });
    }

    return (
        <div className="d-flex justify-content-center d-md-block mt-2">
            <nav className="d-flex justify-items-center justify-content-between">
                <div className="d-flex justify-content-between flex-fill d-sm-none">
                    <ul className="pagination">
                        {prev_page_url ? (
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href={prev_page_url}
                                    rel="prev"
                                    data-page={current_page - 1}
                                    onClick={switchPage}
                                >
                                    {t("Previous")}
                                </a>
                            </li>
                        ) : (
                            <li className="page-item disabled" aria-disabled>
                                <span className="page-link">
                                    {t("Previous")}
                                </span>
                            </li>
                        )}
                        {next_page_url ? (
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href={next_page_url}
                                    rel="next"
                                    data-page={current_page + 1}
                                    onClick={switchPage}
                                >
                                    {t("Next")}
                                </a>
                            </li>
                        ) : (
                            <li className="page-item disabled" aria-disabled>
                                <span className="page-link">{t("Next")}</span>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between">
                    <div>
                        <p className="small text-muted">
                            {t("Showing")}
                            <span className="fw-semibold"> {from} </span>
                            {t("to")}
                            <span className="fw-semibold"> {to} </span>
                            {t("of")}
                            <span className="fw-semibold"> {total} </span>
                            {t("results")}
                        </p>
                    </div>

                    <div>
                        <ul className="pagination">
                            {prev_page_url ? (
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href={prev_page_url}
                                        rel="prev"
                                        aria-label={t("Previous")}
                                        data-page={current_page - 1}
                                        onClick={switchPage}
                                    >
                                        &lsaquo;
                                    </a>
                                </li>
                            ) : (
                                <li
                                    className="page-item disabled"
                                    aria-disabled
                                    aria-label={t("Previous")}
                                >
                                    <span className="page-link" aria-hidden>
                                        &lsaquo;
                                    </span>
                                </li>
                            )}
                            {links.map((value, index) =>
                                index === 0 ||
                                index ===
                                    links.length - 1 ? null : value.active ? (
                                    <li
                                        key={index}
                                        className="page-item active"
                                        aria-current="page"
                                    >
                                        <span className="page-link">
                                            {value.label}
                                        </span>
                                    </li>
                                ) : (
                                    <li key={index} className="page-item">
                                        <a
                                            className="page-link"
                                            href={value.url}
                                            data-page={value.label}
                                            onClick={switchPage}
                                        >
                                            {value.label}
                                        </a>
                                    </li>
                                ),
                            )}
                            {next_page_url ? (
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href={next_page_url}
                                        rel="next"
                                        aria-label={t("Next")}
                                        data-page={current_page + 1}
                                        onClick={switchPage}
                                    >
                                        &rsaquo;
                                    </a>
                                </li>
                            ) : (
                                <li
                                    className="page-item disabled"
                                    aria-disabled
                                    aria-label={t("Next")}
                                >
                                    <span className="page-link" aria-hidden>
                                        &rsaquo;
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
