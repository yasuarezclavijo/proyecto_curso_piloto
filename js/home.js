$(document).ready(function() {
    $(".logo").click(function() {
        $("#btn_login").css({ 'background': '#000' });
        var name_site = $(this).data('name');
        if (name_site == 'orfanpets') {
            alert("Esta desapareciendo el logo de " + name_site);
        }
        $(this).fadeOut();
    });
});