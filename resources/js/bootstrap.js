import { Modal, Toast, Tooltip } from "bootstrap/js/index.esm.js";
import axios from "axios";
import "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js";
import "https://cdn.jsdelivr.net/npm/jquery-lazy@1.7.11/jquery.lazy.min.js";

window.tooltip = (element) => new Tooltip($(element));
$('[data-bs-toggle="tooltip"]').each((_, element) => tooltip(element));

window.spinner = Modal.getOrCreateInstance("#spinner");

window.toast = (message) => {
    if (!message) return;

    $("#notification .toast-body").text(message);

    new Toast($("#notification"), {
        autohide: true,
        delay: 10000,
    }).show();
};

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
