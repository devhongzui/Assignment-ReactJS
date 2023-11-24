let searchResult = $("#search-result");
let searchQuery = $("#search-query");
let dataAction = searchQuery.attr("data-action");

searchQuery.on("change paste keyup", (event) => {
    let currentTarget = $(event.currentTarget);
    let query = currentTarget.val();

    if (query) {
        axios.get(dataAction + "/" + query).then((success) => {
            searchResult.html(success.data);

            $("img[data-src]").each((_, element) => {
                let imgLazy = $(element);

                let imgUrl = imgLazy.attr("data-src");
                imgLazy.removeAttr("data-src").attr("src", imgUrl);
            });
        });
    }
});
