import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Toast() {
    const { t } = useTranslation();

    const toast = useSelector((state) => state.toast.value);

    return (
        toast && (
            <div className="toast-container p-3 bottom-0 end-0">
                <div
                    className={`toast show align-items-center ${toast.background}`}
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="d-flex">
                        <div className="toast-body">{toast.message}</div>
                        <button
                            className="btn-close me-2 m-auto"
                            type="button"
                            role="button"
                            data-bs-dismiss="toast"
                            aria-label={t("Close")}
                        ></button>
                    </div>
                </div>
            </div>
        )
    );
}
