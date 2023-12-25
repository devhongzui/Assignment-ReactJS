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
            .typeString("Vite <strong>JS</strong>")
            .changeDelay(75)
            .start()
            .pauseFor(500)
            .deleteAll()
            .typeString("Bootstrap")
            .pauseFor(500)
            .deleteAll()
            .typeString("React <strong>JS</strong>")
            .pauseFor(500)
            .deleteAll()
            .typeString("Laravel")
            .deleteAll();
    };

    return (
        <div className="container">
            <div className="row align-items-center my-3">
                <div className="col-md-6">
                    <div className="row">
                        <img
                            src={assetHelper(
                                "storage/images/techicons/ViteJS.png",
                            )}
                            className="col-3 img-fluid logo vite"
                            alt="Vite"
                        />
                        <img
                            src={assetHelper(
                                "storage/images/techicons/Bootstrap.png",
                            )}
                            className="col-3 img-fluid logo bootstrap"
                            alt="Bootstrap"
                        />
                        <img
                            src={assetHelper(
                                "storage/images/techicons/ReactJS.png",
                            )}
                            className="col-3 img-fluid logo react"
                            alt="ReactJS"
                        />
                        <img
                            src={assetHelper(
                                "storage/images/techicons/Laravel.png",
                            )}
                            className="col-3 img-fluid logo laravel"
                            alt="Laravel"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h2 text-center">
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
            </div>
        </div>
    );
}
