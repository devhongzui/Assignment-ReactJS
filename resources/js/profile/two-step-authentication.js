import request from "../ajax.js";

request("two-factor-enable-form", (success) => {
    $("#two-factor-confirm")
        .show()
        .find("#qr-code")
        .html(success.data["qr_code"]["svg"]);
});

request("two-factor-disable-form");

request("two-factor-confirm-form");
