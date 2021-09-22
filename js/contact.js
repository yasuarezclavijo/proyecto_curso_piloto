$(document).ready(function() {
    $("#contactform").submit(function(event) {
        event.stopPropagation();
        event.preventDefault();
        var val_name = $("#name").val();
        if (val_name == "") {
            $("#name").css("border", "2px solid red");
        } else if (!val_name.match(/^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/)) {
            $("#name").css("border", "2px solid orange");
        }
    });
    $("#name").keyup(function() {
        $("#name").css("border", "transparent");
    });
});