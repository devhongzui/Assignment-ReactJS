import styled from "styled-components";
import { useTranslation } from "react-i18next";
import TableOfContents from "../../components/quick-link/privacy-policy/TableOfContents.jsx";
import CollectInformation from "../../components/quick-link/security-policy/CollectInformation.jsx";
import Introduce from "../../components/quick-link/security-policy/Introduce.jsx";
import OtherRules from "../../components/quick-link/security-policy/OtherRules.jsx";
import Competition from "../../components/quick-link/security-policy/Competition.jsx";
import Partner from "../../components/quick-link/security-policy/Partner.jsx";
import Cookie from "../../components/quick-link/security-policy/Cookie.jsx";
import Security from "../../components/quick-link/security-policy/Security.jsx";
import Permission from "../../components/quick-link/security-policy/Permission.jsx";
import { assetHelper, initSite } from "../../helper.js";

const ImageStyle = styled.img`
    height: 300px;
`;

export default function SecurityPolicy() {
    const { t } = useTranslation();

    const web = {
        title: t("Security policy"),
        image: "storage/images/undraw/Security_on.png",
    };

    initSite(web);

    const list = [
        {
            tag: "collect-information",
            title: t("Collect personal information"),
        },
        {
            tag: "other-rules",
            title: t("Other regulations regarding personal information"),
        },
        {
            tag: "competition",
            title: t("Competition"),
        },
        {
            tag: "partner",
            title: t("Third Partners and Affiliates"),
        },
        {
            tag: "cookie",
            title: t("Use of Cookies"),
        },
        {
            tag: "security",
            title: t("Security"),
        },
        {
            tag: "permission",
            title: t("Customer benefits"),
        },
    ];

    return (
        <>
            <ImageStyle
                src={assetHelper("storage/images/undraw/Security_on.png")}
                alt={web.title}
                className="w-100 object-fit-cover object-fit-md-contain bg-white"
            />

            <div className="container">
                <h2 className="my-4 text-center">{web.title}</h2>
                <TableOfContents list={list} />
                <Introduce />
                <CollectInformation tag={list[0].tag} title={list[0].title} />
                <OtherRules tag={list[1].tag} title={list[1].title} />
                <Competition tag={list[2].tag} title={list[2].title} />
                <Partner tag={list[3].tag} title={list[3].title} />
                <Cookie tag={list[4].tag} title={list[4].title} />
                <Security tag={list[5].tag} title={list[5].title} />
                <Permission tag={list[6].tag} title={list[6].title} />
            </div>
        </>
    );
}
