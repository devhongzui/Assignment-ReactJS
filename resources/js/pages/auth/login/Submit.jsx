import { useTranslation } from "react-i18next";

export default function Submit({ label }) {
    const { t } = useTranslation();

    return (
        <button
            className="btn btn-primary me-2 mb-2"
            type="submit"
            role="button"
            aria-label={label}
        >
            {label}
        </button>
    );
}
