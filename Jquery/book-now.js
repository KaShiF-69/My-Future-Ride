

$(document).ready(function () {
    $("select").change(function () {
        let selectedCar = $(this).val();

        if (selectedCar === "Economy") {
            $("#price").val("300 PKR");
        } else if (selectedCar === "Business") {
            $("#price").val("600 PKR");
        } else if (selectedCar === "Premium") {
            $("#price").val("800 PKR");
        }
    });
});



