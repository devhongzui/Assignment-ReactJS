export default () =>
    $("img[data-src]").each((_, element) => {
        let imgLazy = $(element);

        let imgUrl = imgLazy.attr("data-src");
        imgLazy.removeAttr("data-src").attr("src", imgUrl);
    });
