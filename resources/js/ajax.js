export default (form_id) => {
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
                setTimeout(() => toast(success.data.message), 1000);

                setTimeout(() => {
                    let redirect = success.data.redirect;
                    if (redirect) location.href = redirect;

                    let reload = success.data.reload;
                    if (reload) location.reload();
                }, 3000);
            })
            .catch((error) => {
                setTimeout(() => {
                    spinner.hide();

                    let errors = error.response.data.errors;

                    if (errors) {
                        $.each(errors, (key, value) => {
                            form.find(`[name=${key}]`).addClass("is-invalid");
                            form.find(`#${key}-${form_id}-error`).text(
                                value.shift(),
                            );
                        });
                    } else toast(error.response.data.message);
                }, 1000);
            });
    });
};
