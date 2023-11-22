let hashing = ["MD5", "SHA1", "SHA256", "SHA512", "SHA3", "RIPEMD160"];
let encodeForm = $("#encode-form");
let decodeForm = $("#decode-form");

encodeForm.find("select[name=algorithm-encode]").on("change", (event) => {
    let algorithm = $(event.currentTarget).find(":selected").val();

    let isHash = checkHash(algorithm);

    if (isHash) {
        encodeForm.find("input[name=key-encode]").hide();
        encodeForm.find("label[for=key-encode]").hide();
    } else {
        encodeForm.find("input[name=key-encode]").show();
        encodeForm.find("label[for=key-encode]").show();
    }
});

let result = $("#result");

$("#run-tool").on("click", () => {
    let data = {};

    let form;

    data["isEncode"] = $("button[aria-controls=encode-tab-pane]").hasClass(
        "active",
    );

    if (data["isEncode"]) {
        data["algorithm"] = encodeForm
            .find("select[name=algorithm-encode] :selected")
            .val();
        data["secret"] = encodeForm.find("textarea[name=secret-encode]").val();

        if (data["secret"] === "") {
            toast('The "Text" field cannot be empty');

            return;
        }

        if (!checkHash(data["algorithm"])) {
            data["key"] = encodeForm.find("input[name=key-encode]").val();

            if (data["key"] === "")
                toast('Setting "Key" to null will invalidate the encryption!');
        }

        form = encodeForm;
    } else {
        data["algorithm"] = decodeForm
            .find("select[name=algorithm-decode] :selected")
            .val();
        data["secret"] = decodeForm.find("textarea[name=secret-decode]").val();

        if (data["secret"] === "") {
            toast('The "Text" field cannot be empty');

            return;
        }

        data["key"] = decodeForm.find("input[name=key-decode]").val();

        if (data["key"] === "") toast('The value of "Key" is empty!');

        form = decodeForm;
    }

    spinner.show();

    axios({
        method: form.attr("method"),
        url: form.attr("action"),
        data: {
            query:
                "query CallAPI($isEncode: Boolean, $algorithm: String, $secret: String, $key: String) {\n" +
                "  encode_decode(isEncode: $isEncode, algorithm: $algorithm, secret: $secret, key: $key) {\n" +
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

                let encode_decode = success.data.data["encode_decode"];
                result.text(encode_decode.result);

                if (encode_decode.result === null) toast(encode_decode.message);
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

function checkHash(algorithm) {
    let isHash = false;

    hashing.forEach((value) => {
        if (value === algorithm) isHash = true;
    });

    return isHash;
}
