$(document).ready(function() {
    $(".delete-element").click(function() {
        var control_delete = confirm("Esta seguro que desea eliminar este registro?");
        if (control_delete) {
            alert("Lo elimino")
        } else {
            alert("Se arrepintio")
        }
    });
});