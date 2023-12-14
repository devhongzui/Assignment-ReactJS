import { useTranslation } from "react-i18next";
import General from "./General.jsx";
import Information from "./Information.jsx";
import Project from "./Project.jsx";
import Business from "./Business.jsx";
import Technology from "./Technology.jsx";
import Skill from "./Skill.jsx";
import { initSite } from "../../helper.js";

export default function AboutMe() {
    const { t } = useTranslation();

    const web = {
        title: t("About me"),
        image: "storage/images/freepik/7055190.jpg",
    };

    initSite(web);

    return (
        <main className="container">
            <h2 className="my-4 text-center">{web.title}</h2>
            <General />
            <Information />
            <Project />
            <Business />
            <Technology />
            <Skill />
        </main>
    );
}
