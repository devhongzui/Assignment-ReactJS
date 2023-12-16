import axios from "axios";
import i18n from "i18next";

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
                document.querySelector(value).setAttribute("content", image),
        );
};

export const checkPasswordConfirm = () => {
    axios
        .get(`/${i18n.language}/user/confirmed-password-status`)
        .then((success) => {
            if (!success.data["confirmed"])
                location.href = `/${i18n.language}/user/confirm-password`;
        });
};
