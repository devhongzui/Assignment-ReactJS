import { Tooltip } from "bootstrap/js/index.esm.js";
import "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js";
import "https://cdn.jsdelivr.net/npm/jquery-lazy@1.7.11/jquery.lazy.min.js";

window.tooltip = (element) => new Tooltip($(element));
$('[data-bs-toggle="tooltip"]').each((_, element) => tooltip(element));
