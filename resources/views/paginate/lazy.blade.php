<script>
    @if ($is_lazy ?? false)
    handlePage();
    @else
    document.addEventListener("DOMContentLoaded", handlePage);
    @endif

    function handlePage() {
        $("a.page-link")
            .off("click")
            .on("click", (event) => {
                event.preventDefault();

                let currentTarget = $(event.currentTarget);

                spinner.show();
                axios.get(currentTarget.attr("href")).then((success) => {
                    setTimeout(() => {
                        spinner.hide();
                        currentTarget.parents(".row").replaceWith(success.data);

                        $("img[data-src]").each((_, element) => {
                            let imgLazy = $(element);

                            let imgUrl = imgLazy.attr("data-src");
                            imgLazy.removeAttr("data-src").attr("src", imgUrl);
                        });
                    }, 1000);
                });
            });
    }
</script>
