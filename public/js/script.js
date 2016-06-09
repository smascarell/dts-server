var $ = jQuery.noConflict();
// Progress Bar

function seleccionProducto(id) {
    window.location = '/producto/' + id;
}

$(document).ready(function ($) {
    $("*[id^=menu-selection]").click(function () {
        var id = $(this).attr('id');
        idProducto = id.replace(/\D/g, '');
        seleccionProducto(idProducto);
        return false;
    });
});