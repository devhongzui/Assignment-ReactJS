let form = $("#search-form");

let submitBtn = form.find("[type=submit]");

let searchResult = $("#search-result");

submitBtn.on("click", (event) => {
    event.preventDefault();
});

$("#search-query").on("change paste keyup", (event) => {
    let query = $(event.currentTarget).val();

    submitBtn.attr("disabled", !query);

    if (query) {
        axios.get(form.attr("action") + "/" + query).then((success) => {
            searchResult.html(success.data);

            $("img[data-src]").each((_, element) => {
                let imgLazy = $(element);

                let imgUrl = imgLazy.attr("data-src");
                imgLazy.removeAttr("data-src").attr("src", imgUrl);
            });
        });
    }
});
