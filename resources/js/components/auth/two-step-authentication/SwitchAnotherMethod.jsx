import { useTranslation } from "react-i18next";

export default function SwitchAnotherMethod({ method, setMethod }) {
    const { t } = useTranslation();

    function switchMethod() {
        setMethod(method === 0 ? 1 : 0);
    }

    return (
        <button
            className="btn mb-2"
            type="button"
            role="button"
            aria-label={t("Choose another method")}
            onClick={switchMethod}
        >
            {t("Choose another method")}
        </button>
    );
}
