import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { toastData } from "../../../reduxers/toast.jsx";

export default function Toast() {
    const { t } = useTranslation();

    const toast = useSelector(toastData);

    return (
        toast && (
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div
                    className={`toast fade show align-items-center ${toast.background}`}
                    role="alert"
                    aria-live="assertive"
                    aria-atomic
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
