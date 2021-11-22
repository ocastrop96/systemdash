CargarWidgetsContadores("oneCount",1)
CargarWidgetsContadores("twoCount",2)
CargarWidgetsContadores("threeCount",3)
CargarWidgetsContadores("fourCount",5)
CargarWidgetsContadores("fiveCount",6)
CargarWidgetsContadores("sixCount",7)


function CargarWidgetsContadores(widget,op) {
    var datos = new FormData();
    datos.append("opcion", op);

    $.ajax({
        url: "public/views/src/ajaxGraficos.php",
        method: "POST",
        cache: false,
        data: datos,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            $("#"+widget+"").html(respuesta["contador"]);
        },
    });
}
