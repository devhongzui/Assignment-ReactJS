import { useTranslation } from "react-i18next";
import General from "../../components/quick-link/about-me/General.jsx";
import Information from "../../components/quick-link/about-me/Information.jsx";
import Project from "../../components/quick-link/about-me/Project.jsx";
import Business from "../../components/quick-link/about-me/Business.jsx";
import Technology from "../../components/quick-link/about-me/Technology.jsx";
import Skill from "../../components/quick-link/about-me/Skill.jsx";
import { initSite } from "../../helper.js";

export default function AboutMe() {
    const { t } = useTranslation();

    const web = {
        title: t("About me"),
        image: "storage/images/freepik/7055190.jpg",
    };

    initSite(web);

    return (
        <div className="container">
            <h2 className="my-4 text-center">{web.title}</h2>
            <General />
            <Information />
            <Project />
            <Business />
            <Technology />
            <Skill />
        </div>
    );
}
