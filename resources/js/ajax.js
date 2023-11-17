export default (form_id, successCallback) => {
    let form = $("#" + form_id);

    form.find("[type=submit]").on("click", (event) => {
        event.preventDefault();

        form.find("[name]").removeClass("is-invalid");

        spinner.show();

        axios({
            method: form.attr("method"),
            url: form.attr("action"),
            data: form.serialize(),
        })
            .finally(() => setTimeout(() => spinner.hide(), 1000))
            .then((success) => {
                toast(success.data.message);

                if (successCallback) successCallback(success);

                runActions(success.data.redirect, success.data.reload);
            })
            .catch((error) => {
                let errors = error.response.data.errors;

                if (errors) {
                    $.each(errors, (key, value) => {
                        form.find(`[name=${key}]`).addClass("is-invalid");
                        form.find(`#${key}-${form_id}-error`).text(
                            value.shift(),
                        );
                    });
                } else toast(error.response.data.message);

                runActions(
                    error.response.data.redirect,
                    error.response.data.reload,
                );
            });
    });
};

function runActions(redirect, reload) {
    setTimeout(() => {
        if (redirect) location.href = redirect;

        if (reload) location.reload();
    }, 3000);
}
