import "./bootstrap.js";

$("img").Lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: true,
});

$("modal-lazy").each((_, element) => {
    let modal = $(element);

    modal.html($("#loader").clone());

    axios
        .get(modal.attr("data-src"))
        .then((success) => $(element).replaceWith(success.data));
});

$("#change-theme").on("click", (event) => {
    let currentTarget = $(event.currentTarget);

    let themeIcon = currentTarget.find(".fa-solid");

    let theme = themeIcon.hasClass("fa-sun") ? "dark" : "light";

    $("body").attr("data-bs-theme", theme);

    $("header").toggleClass("bg-dark bg-light");

    $("footer").toggleClass("bg-dark bg-light");

    themeIcon.toggleClass("fa-sun fa-moon");

    let dataForm = currentTarget.find(".data-api");

    axios({
        method: dataForm.attr("data-method"),
        url: dataForm.attr("data-action"),
        data: { "data-bs-theme": theme },
    });
});
