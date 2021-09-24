$(document).ready(function() {
    $("#sendForm").click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        var flag_validate = false;
        // Validacion campo nombre
        var val_name = $("#name").val();
        if (val_name == "") {
            $("#name").css("border", "2px solid red");
            flag_validate = false;
        } else if (!val_name.match(/^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/)) {
            $("#name").css("border", "2px solid orange");
            flag_validate = false;
        } else {
            $("#name").css("border", "2px solid green");
            flag_validate = true;
        }
        // Validacion campo email
        var val_email = $("#email").val();
        if (val_email == "") {
            $("#email").css("border", "2px solid red");
            flag_validate = false;
        } else if (!val_email.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
            $("#email").css("border", "2px solid violet");
            flag_validate = false;
        } else {
            $("#email").css("border", "2px solid green");
            flag_validate = true;
        }
        // Validacion de ciudad 
        var val_lista_ciudad = $("#city").val();
        if (val_lista_ciudad == "") {
            $("#city").css("border", "2px solid red");
            flag_validate = false;
        } else {
            $("#city").css("border", "2px solid green");
            flag_validate = true;
        }
        // Validacion de tipo de solicitud
        //var options_request = $(".radio_request:checked");
        var options_request = $("input[name='type_request']:checked");
        if (options_request.length != 1) {
            alert("Debe seleccionar una opción en el tipo de solicitud");
            flag_validate = false;
        } else {
            flag_validate = true;
        }
        var val_message = $("#textareamessage").val();
        if (val_message == "") {
            $("#textareamessage").css("border", "2px solid red");
            flag_validate = false;
        } else {
            $("#textareamessage").css("border", "2px solid green");
            flag_validate = true;
        }
        if (flag_validate == true) {
            $("#contactform").submit();
        }
    });
});

/*
True o False

Operadores
var semaforo = "rojo"
if semaforo == "rojo"{
    detenerme
}else if semaforo == "verde"{
    avanzar
}else if semaforo == "nada" {
    avanzar pero con precaucion
}

== Igualdad 
!= Diferente
> Mayor que
< Menor que
>= Mayor o igual
<= Menor o igual
! Negacion
*/