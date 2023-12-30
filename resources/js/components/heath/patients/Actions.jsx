import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ButtonStyle = styled.button`
    width: 40px;
    height: 40px;
`;

export default function Actions({ mode, setMode, selected, listPatient }) {
    const { t } = useTranslation();

    return (
        <section className="row my-3">
            <div className="col-md-6">
                <ButtonStyle
                    className={
                        mode === 0
                            ? "btn btn-primary mb-2 me-2"
                            : "btn mb-2 me-2"
                    }
                    onClick={() => setMode(0)}
                >
                    <i className="fa-solid fa-list"></i>
                </ButtonStyle>
                <ButtonStyle
                    className={
                        mode === 1
                            ? "btn btn-primary mb-2 me-2"
                            : "btn mb-2 me-2"
                    }
                    onClick={() => setMode(1)}
                >
                    <i className="fa-solid fa-grip-vertical"></i>
                </ButtonStyle>
                <ButtonStyle
                    className="btn mb-2 me-2"
                    data-bs-toggle="collapse"
                    data-bs-target="#filter"
                >
                    <i className="fa-solid fa-filter"></i>
                </ButtonStyle>
                {selected.length > 0 && (
                    <div className="d-inline-flex align-items-center">
                        <p className="mb-2 me-2">
                            {t("Selected")} <strong>{selected.length}</strong>
                        </p>

                        <div className="dropdown">
                            <button
                                className="btn mb-2 me-2"
                                data-bs-toggle="dropdown"
                            >
                                {t("Choose action")}
                            </button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">{t("Delete")}</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <div className="col-md-6 text-end">
                {listPatient && (
                    <strong>
                        {t("Total patients")}: {listPatient.total}
                    </strong>
                )}
            </div>
        </section>
    );
}
