let resultArea = $("#result");

$("#erase-result").on("click", () => {
    resultArea.text(null);

    toast("Delete the results successfully!");
});

$("#copy-result").on("click", () => {
    navigator.clipboard
        .writeText(resultArea.text())
        .then(() => {
            toast("Copy the results successfully!");
        })
        .catch(() => {
            toast("Copying results failed!");
        });
});

$("#download_result").on("click", () => {
    let blob = new Blob([resultArea.text()], { type: "text/plain" });

    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "data.txt";

    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
});
