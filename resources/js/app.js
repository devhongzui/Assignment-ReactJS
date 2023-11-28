import "./bootstrap.js";
import request from "./ajax.js";
import fixLazy from "./fix-lazy-image.js";

$("main").css(
    "min-height",
    window.innerHeight - $("header").height() - $("footer").height(),
);

$("img").Lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: true,
});

$("modal-lazy").each((_, element) => {
    let modal = $(element);

    modal.html($("#loader").clone());

    axios.get(modal.attr("data-src")).then((success) => {
        $(element).replaceWith(success.data);

        fixLazy();
    });
});

$("#change-theme-form").on("submit", (event) => {
    let currentTarget = $(event.currentTarget);

    let themeIcon = currentTarget.find(".fa-solid");

    $("body").attr(
        "data-bs-theme",
        themeIcon.hasClass("fa-sun") ? "dark" : "light",
    );

    $("header").toggleClass("bg-dark bg-light");

    $("footer").toggleClass("bg-dark bg-light");

    $("#notification").toggleClass("bg-dark bg-light");

    themeIcon.toggleClass("fa-sun fa-moon");
});

request("change-theme-form");
