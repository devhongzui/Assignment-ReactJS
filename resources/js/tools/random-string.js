let form = $("#random-string-form");

let separatorRow = form.find("#option5");
let separatorLabel = form.find("label[for=separator]");
let separatorInput = form.find("input[name=separator]");

form.find("select[name=separator_method]").on("change", (event) => {
    let method = $(event.currentTarget).find(":selected").val();

    switch (method) {
        case "0":
            separatorRow.removeClass("mb-3");
            separatorLabel.hide();
            separatorInput.hide();
            break;
        case "1":
        default:
            separatorRow.addClass("mb-3");
            separatorLabel.show();
            separatorInput.show();
            break;
    }
});

let result = $("#result");

$("#run-tool").on("click", () => {
    let data = {};

    data["charset"] = [];

    if (
        form
            .find("button[aria-controls=subsets-selection-tab-pane]")
            .hasClass("active")
    ) {
        let fieldName = [
            "alphabetic_lowercase",
            "alphabetic_uppercase",
            "numeric",
            "special",
        ];

        $.each(fieldName, (_, name) => {
            let field = form.find(`input[name=${name}]`);

            if (field.is(":checked"))
                data["charset"].push(field.attr("data-value"));
        });

        if (data["charset"].length === 0) {
            toast('Cannot disable all options in "String generation method"');
            return;
        }
    } else if (
        form
            .find("button[aria-controls=characters-selection-tab-pane]")
            .hasClass("active")
    ) {
        data["charset"].push(form.find("input[name=custom]").val());

        if (data["charset"][0] === "") {
            toast(
                'The "Custom String" section in "String Method" cannot be empty',
            );
            return;
        }
    } else if (
        form
            .find("button[aria-controls=others-selection-tab-pane]")
            .hasClass("active")
    ) {
        data["charset"].push(
            form.find("input[name=other_option]:checked").val(),
        );
    }

    data["count"] = parseInt(form.find("input[name=count]").val() || 0);

    if (data["count"] < 1) {
        toast('The "Number of strings" field cannot be empty or less than 1');
        return;
    }

    data["length"] = parseInt(form.find("input[name=length]").val());

    if (data["length"] < 1) {
        toast(
            'The "Length of each string" field cannot be empty or less than 1',
        );
        return;
    }

    if (form.find("select[name=separator_method] :selected").val() === "1") {
        data["separator"] = form.find("input[name=separator]").val();

        if (data.separator === "") {
            toast(
                'The "Delimiter" field cannot be empty if "Listing method" is set to "Same line"',
            );
            return;
        }
    } else data["separator"] = null;

    data["capitalization"] = form
        .find("select[name=capitalization] :selected")
        .val();

    data["readable"] =
        form.find("select[name=readable] :selected").val() !== "false";

    form.find("[name]").removeClass("is-invalid");

    spinner.show();

    axios({
        method: form.attr("method"),
        url: form.attr("action"),
        data: {
            query:
                "query CallAPI($count: Int, $length: Int, $start: String, $end: String, $readable: Boolean, $charset: [String], $capitalization: String, $separator: String) {\n" +
                "  random_string(count: $count, length: $length, start: $start, end: $end, readable: $readable, charset: $charset, capitalization: $capitalization, separator: $separator) {\n" +
                "    status\n" +
                "    message\n" +
                "    result\n" +
                "  }\n" +
                "}\n",
            variables: data,
        },
    })
        .then((success) => {
            setTimeout(() => {
                spinner.hide();

                let random_string = success.data.data["random_string"];
                result.text(random_string.result);

                if (random_string.result === null) toast(random_string.message);
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
