let form = $("#minify-file-form");
let code = $("#code");
let result = $("#result");

form.find("#file-upload").on("change", (event) => {
    event.currentTarget.files
        .item(0)
        .text()
        .then((value) => {
            code.val(value);
        })
        .catch((reason) => {
            toast(reason);
        });
});

$("#run-tool").on("click", () => {
    let data = {};

    data["code"] = code.val();
    if (data["code"] === "") {
        toast('The "Text" field cannot be empty');
        return;
    }

    spinner.show();

    axios({
        method: form.attr("method"),
        url: form.attr("action"),
        data: {
            query:
                "query CallAPI($code: String) {\n" +
                "  minify_js(code: $code) {\n" +
                "    message\n" +
                "    result\n" +
                "    status\n" +
                "  }\n" +
                "}\n",
            variables: data,
        },
    })
        .then((success) => {
            setTimeout(() => {
                spinner.hide();

                let minify_js = success.data.data["minify_js"];
                result.text(minify_js.result);

                if (minify_js.result === null) toast(minify_js.message);
            }, 1000);
        })
        .catch((error) => {
            setTimeout(() => {
                spinner.hide();

                let response = error.response;
                toast(
                    response === undefined
                        ? error.message
                        : response.data.errors.shift().message,
                );
            }, 1000);
        });
});
