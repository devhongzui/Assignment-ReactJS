import i18n from "i18next";
import { confirmedPasswordStatus } from "./services/auth.jsx";

export const urlHelper = (path) =>
    [location.origin, i18n.language, path].join("/");

export const assetHelper = (path) => [location.origin, path].join("/");

export const initSite = ({ title, description, image }) => {
    if (title) document.title = title;

    if (description)
        [
            "meta[name='description']",
            "meta[property='og:description']",
            "meta[property='twitter:description']",
        ].forEach((value) =>
            document.querySelector(value).setAttribute("content", description),
        );

    if (image)
        ["meta[property='og:image']", "meta[property='twitter:image']"].forEach(
            (value) =>
                document
                    .querySelector(value)
                    .setAttribute("content", assetHelper(image)),
        );
};

export const checkPasswordConfirm = () => {
    confirmedPasswordStatus().then((success) => {
        if (!success.data["confirmed"])
            location.href = urlHelper("user/confirm-password");
    });
};
