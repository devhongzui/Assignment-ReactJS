import { useTranslation } from "react-i18next";
import { initSite } from "../helper.js";

export default function Welcome() {
    const { t } = useTranslation();

    const web = {
        title: t("Welcome"),
        image: "/storage/images/undraw/Welcome.png",
    };

    initSite(web);

    return <></>;
}
