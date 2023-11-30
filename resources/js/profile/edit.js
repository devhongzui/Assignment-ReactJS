import request from "../ajax.js";

request("edit-profile-form");

let chooseHtml = $("<option>")
    .attr("value", "null")
    .attr("selected", "true")
    .text("Choose");

let provinceCode = $("#province_code-edit-profile-form");
let districtCode = $("#district_code-edit-profile-form");
let subDistrictCode = $("#sub_district_code-edit-profile-form");

provinceCode.prepend(chooseHtml.clone()).on("change", (event) => {
    let val = $(event.currentTarget).val();
    console.log(val);

    if (val !== "null") {
        districtCode.attr("disabled", false);
        districtCode.find(`optgroup[label!=${val}]`).hide();
        districtCode.find(`optgroup[label=${val}]`).show();
    } else {
        districtCode.attr("disabled", true);
        subDistrictCode.attr("disabled", true);
    }
});

districtCode.prepend(chooseHtml.clone()).on("change", (event) => {
    let val = $(event.currentTarget).val();
    console.log(val);

    if (val !== "null") {
        subDistrictCode.attr("disabled", false);
        subDistrictCode.find(`optgroup[label!=${val}]`).hide();
        subDistrictCode.find(`optgroup[label=${val}]`).show();
    } else {
        subDistrictCode.attr("disabled", true);
    }
});

subDistrictCode.prepend(chooseHtml.clone());
