import { useTranslation } from "react-i18next";
import General from "./General.jsx";
import Information from "./Information.jsx";
import Project from "./Project.jsx";
import Business from "./Business.jsx";
import Technology from "./Technology.jsx";
import Skill from "./Skill.jsx";

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <main className="container">
            <h2 className="my-4 text-center">{t("About me")}</h2>
            <General />
            <Information />
            <Project />
            <Business />
            <Technology />
            <Skill />
        </main>
    );
}
