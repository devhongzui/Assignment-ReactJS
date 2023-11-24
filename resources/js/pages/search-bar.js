import fixLazy from "../fix-lazy-image.js";

let searchQuery = $("#search-query");
let dataAction = searchQuery.attr("data-action");

searchQuery.on("change paste keyup", (event) => {
    let currentTarget = $(event.currentTarget);
    let query = currentTarget.val();

    if (query) {
        let type, area;

        if ($("[aria-controls=study-search-result]").hasClass("active")) {
            type = "study";
            area = $("#study-search-result");
        } else if (
            $("[aria-controls=tools-search-result]").hasClass("active")
        ) {
            type = "tools";
            area = $("#tools-search-result");
        } else {
            type = "musics";
            area = $("#musics-search-result");
        }

        axios
            .get(dataAction + "/" + query, { params: { type: type } })
            .then((success) => {
                area.html(success.data);

                fixLazy();
            });
    }
});
