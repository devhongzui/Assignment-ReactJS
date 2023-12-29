import { useTranslation } from "react-i18next";

export default function SwitchAnotherMethod({ method, setMethod }) {
    const { t } = useTranslation();

    function switchMethod(event) {
        event.preventDefault();

        setMethod(method === 0 ? 1 : 0);
    }

    return (
        <button
            className="btn mb-2"
            aria-label={t("Choose another method")}
            onClick={switchMethod}
        >
            {t("Choose another method")}
        </button>
    );
}
