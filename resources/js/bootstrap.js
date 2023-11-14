import Jquery from "jquery/dist/jquery.js";
import { Tooltip } from "bootstrap/js/index.esm.js";

window.$ = Jquery;

window.tooltip = (element) => new Tooltip($(element));
$('[data-bs-toggle="tooltip"]').each((_, element) => tooltip(element));
