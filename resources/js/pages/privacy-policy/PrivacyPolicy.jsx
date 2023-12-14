import styled from "styled-components";
import { useTranslation } from "react-i18next";
import TableOfContents from "./TableOfContents.jsx";
import Introduce from "./Introduce.jsx";
import GeneralPersonalData from "./GeneralPersonalData.jsx";
import SensitivePersonalData from "./SensitivePersonalData.jsx";
import SharePersonalData from "./SharePersonalData.jsx";
import ThirdPartySupplier from "./ThirdPartySupplier.jsx";
import Permission from "./Permission.jsx";
import Cookie from "./Cookie.jsx";
import DataSecurity from "./DataSecurity.jsx";
import OptionsCenter from "./OptionsCenter.jsx";
import { initSite } from "../../helper.js";

const ImageStyle = styled.img`
    height: 300px;
`;

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    const web = {
        title: t("Privacy policy"),
        description: "storage/images/undraw/Data_processing.png",
    };

    initSite(web);

    const list = [
        {
            tag: "general-personal-data",
            title: t("Personal data we collect"),
        },
        {
            tag: "sensitive-personal-data",
            title: t("Sensitive personal data we collect"),
        },
        {
            tag: "share-personal-data",
            title: t("Share your personal data"),
        },
        {
            tag: "third-party-supplier",
            title: t("Third party providers"),
        },
        {
            tag: "permission",
            title: t("Your rights"),
        },
        {
            tag: "cookie",
            title: t("Cookie"),
        },
        {
            tag: "data-security",
            title: t("Data security"),
        },
        {
            tag: "options-center",
            title: t("Options center"),
        },
    ];

    return (
        <main>
            <ImageStyle
                src="/storage/images/undraw/Data_processing.png"
                alt={web.title}
                className="w-100 object-fit-cover object-fit-md-contain bg-white"
            />

            <div className="container">
                <h2 className="my-4 text-center">{web.title}</h2>
                <TableOfContents list={list} />
                <Introduce />
                <GeneralPersonalData tag={list[0].tag} title={list[0].title} />
                <SensitivePersonalData
                    tag={list[1].tag}
                    title={list[1].title}
                />
                <SharePersonalData tag={list[2].tag} title={list[2].title} />
                <ThirdPartySupplier tag={list[3].tag} title={list[3].title} />
                <Permission tag={list[4].tag} title={list[4].title} />
                <Cookie tag={list[5].tag} title={list[5].title} />
                <DataSecurity tag={list[6].tag} title={list[6].title} />
                <OptionsCenter tag={list[7].tag} title={list[7].title} />
            </div>
        </main>
    );
}
