$(document).ready(function() {
    $("#show-drive-btn").click(function() {
        $("#drive-btn").show();
        $("#ride-btn").hide();
    }); 
});

$(document).ready(function() {
    $("#show-ride-btn").click(function() {
        $("#ride-btn").show();
        $("#drive-btn").hide();
    }); 
});

$(document).ready(function() {
    $("#show-drive-btn").click(function() {
        $(".account-input").fadeIn();
    }); 
});