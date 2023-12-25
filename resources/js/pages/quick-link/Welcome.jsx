import "../../../scss/pages/quick-link/Welcome.scss";
import { useTranslation } from "react-i18next";
import { assetHelper, initSite } from "../../helper.js";
import Typewriter from "typewriter-effect";

export default function Welcome() {
    const { t } = useTranslation();

    const web = {
        title: t("Welcome"),
        image: "storage/images/undraw/Welcome.png",
    };

    initSite(web);

    const typeWriter = (typewriter) => {
        typewriter
            .typeString("<strong>Vite</strong>")
            .changeDelay(75)
            .start()
            .pauseFor(500)
            .deleteAll()
            .typeString("ReactJS")
            .pauseFor(500)
            .deleteAll()
            .typeString("<strong>Bootstrap</strong>")
            .pauseFor(500)
            .deleteAll()
            .typeString("Laravel")
            .deleteAll();
    };

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-3">
                    <img
                        src={assetHelper("storage/images/techicons/ViteJS.png")}
                        className="logo vite"
                        alt="Vite"
                    />
                </div>
                <div className="col-3">
                    <img
                        src={assetHelper(
                            "storage/images/techicons/ReactJS.png",
                        )}
                        className="logo react"
                        alt="ReactJS"
                    />
                </div>
                <div className="col-3">
                    <img
                        src={assetHelper(
                            "storage/images/techicons/Bootstrap.png",
                        )}
                        className="logo bootstrap"
                        alt="Bootstrap"
                    />
                </div>
                <div className="col-3">
                    <img
                        src={assetHelper(
                            "storage/images/techicons/Laravel.png",
                        )}
                        className="logo laravel"
                        alt="Laravel"
                    />
                </div>
            </div>
            <div className="h2 my-3 text-center">
                {t("Simple Web App with")}
                <Typewriter
                    onInit={typeWriter}
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    );
}
