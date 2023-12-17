import i18next from "i18next";
import axios from "axios";

export const urlHelper = (path) =>
    [location.origin, i18next.language, path].join("/");

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
    axios.get(urlHelper("user/confirmed-password-status")).then((success) => {
        if (!success.data["confirmed"])
            location.href = urlHelper("user/confirm-password");
    });
};
