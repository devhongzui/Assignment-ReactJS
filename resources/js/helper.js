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
