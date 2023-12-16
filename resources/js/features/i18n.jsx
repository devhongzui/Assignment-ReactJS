import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import vi from "../../../lang/vi.json";

export default function ({ children }) {
    i18n.use(initReactI18next)
        .init({
            resources: {
                vi: {
                    translation: vi,
                },
            },
            lng: document.querySelector("html").getAttribute("lang"),
            fallbackLng: "en",
            interpolation: {
                escapeValue: false,
            },
        })
        .finally();

    return <I18nextProvider i18n={i18n} children={children} />;
}
