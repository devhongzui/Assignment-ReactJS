import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import { assetHelper } from "../../helper.js";

const ImageStyle = styled.img`
    height: 500px;
`;

const typeWriter = (typewriter) => {
    typewriter
        .typeString("<strong>Developer</strong>")
        .changeDelay(75)
        .start()
        .pauseFor(500)
        .deleteAll()
        .typeString("Freelancer")
        .deleteAll();
};

export default function General() {
    const { t } = useTranslation();

    return (
        <section className="row align-items-center mb-5">
            <div className="col-xl-6">
                <div className="h3">{t("Hello, I am Tri Nguyen Duc")}</div>

                <div className="h2">
                    <Typewriter
                        onInit={typeWriter}
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <p>
                    {t(
                        "I love the Information Technology field and have a passion for Web Programming.",
                    )}
                </p>
            </div>
            <div className="col-xl-6 d-xl-flex justify-content-xl-end">
                <ImageStyle
                    src={assetHelper("storage/images/freepik/7036084.jpg")}
                    alt={t("Overview")}
                    className="rounded-2 object-fit-cover img-fluid"
                />
            </div>
        </section>
    );
}
