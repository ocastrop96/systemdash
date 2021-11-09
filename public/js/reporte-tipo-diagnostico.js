$("#deshacer-filtro-DashQX2").on("click", function () {
    window.location = "reporte-tipo-diagnostico";
});
$("input[name='rango-dsh2']").daterangepicker({
    opens: 'left',
    startDate: moment(),
    endDate: moment(),
    maxDate: moment(),
    locale: {
        format: "DD/MM/YYYY",
        separator: " hasta ",
        applyLabel: "Aplicar",
        cancelLabel: "Cancelar",
        fromLabel: "Desde",
        toLabel: "Hasta",
        customRangeLabel: "Personalizar",
        weekLabel: "W",
        daysOfWeek: ["Do", "Lu", "Ma", "Mie", "Ju", "Vi", "Sa"],
        monthNames: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],
        firstDay: 1,
    },
}, function (start, end) {
    let inicio = start.format('YYYY-MM-DD');
    let fin = end.format('YYYY-MM-DD');
    let diagnostico = $("#diagnosticoQX").val();
    let tipoIngreso = $("#dshTipIng").val();
    let especialidad = $("#dshEspecialidad2").val();
    let servicio = $("#dshServicio").val();
    let medico = $("#medicoQX").val();
    console.log(inicio + ' ' + fin + ' ' + diagnostico + ' ' + tipoIngreso + ' ' + especialidad + ' ' + servicio + ' ' + medico);
    // CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
    // CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
    // CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);

});
$("#diagnosticoQX").on("change", function () {
    let inicio = $("#rango-dsh2").attr("inicio");
    let fin = $("#rango-dsh2").attr("fin");
    let diagnostico = $(this).val();
    let tipoIngreso = $("#dshTipIng").val();
    let especialidad = $("#dshEspecialidad2").val();
    let servicio = $("#dshServicio").val();
    let medico = $("#medicoQX").val();

    console.log(inicio + ' ' + fin + ' ' + diagnostico + ' ' + tipoIngreso + ' ' + especialidad + ' ' + servicio + ' ' + medico);

});
$(".dshTipIng").on("change", function () {
    let tipoIngreso = $(this).val();
    let inicio = $("#rango-dsh2").attr("inicio");
    let fin = $("#rango-dsh2").attr("fin");
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = $("#dshEspecialidad2").val();
    let servicio = $("#dshServicio").val();
    let medico = $("#medicoQX").val();

    console.log(inicio + ' ' + fin + ' ' + diagnostico + ' ' + tipoIngreso + ' ' + especialidad + ' ' + servicio + ' ' + medico);
});

$(".dshEspecialidad2").on("change", function () {
    let tipoIngreso = $("#dshTipIng").val();
    let inicio = $("#rango-dsh2").attr("inicio");
    let fin = $("#rango-dsh2").attr("fin");
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = $(this).val();
    let servicio = $("#dshServicio").val();
    let medico = $("#medicoQX").val();

    console.log(inicio + ' ' + fin + ' ' + diagnostico + ' ' + tipoIngreso + ' ' + especialidad + ' ' + servicio + ' ' + medico);
});
$("#dshServicio").on("change", function () {
    let tipoIngreso = $("#dshTipIng").val();
    let inicio = $("#rango-dsh2").attr("inicio");
    let fin = $("#rango-dsh2").attr("fin");
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = $("#dshEspecialidad2").val();
    let servicio = $(this).val();
    let medico = $("#medicoQX").val();

    console.log(inicio + ' ' + fin + ' ' + diagnostico + ' ' + tipoIngreso + ' ' + especialidad + ' ' + servicio + ' ' + medico);
});
$("#diagnosticoQX").select2(
    {
        maximumInputLength: "10",
        minimumInputLength: "4",
        language: {

            noResults: function () {

                return "No hay resultado";
            },
            searching: function () {

                return "Buscando Diagnóstico ...";
            },
            inputTooShort: function () {
                return "Ingrese 4 o más caracteres";
            },
            inputTooLong: function () {
                return "Ingrese máximo 10 caracteres";
            }
        },
        scrollAfterSelect: true,
        placeholder: 'Ingrese CIE 10 o Descripción de Diagnóstico',
        ajax: {
            url: "public/views/src/ajaxGraficos.php",
            type: "post",
            dataType: "json",
            delay: 200,
            data: function (params) {
                return {
                    searchTerm2: params.term,
                };
            },
            processResults: function (response) {
                return {
                    results: response,
                };
            },
            cache: true,
        },
    }
);
$("#dshTipIng").on("change", function () {
    var existe = $(this).val();
    $("#dshServicio").html("<option value='0'>Seleccione Servicio</option>");
    if (existe > 0) {
        $.ajax({
            url: "public/views/src/ajaxGraficos.php",
            method: "POST",
            dataType: "html",
            data: { tipo: existe }
        }).done(function (respuesta) {
            $("#dshEspecialidad2").html(respuesta);
        }).fail(function () {
            console.log("error");
        });
    }
    else {
        var errorhtml = "<option value='0'>Seleccione Tipo. Ingreso</option>";
        $("#dshEspecialidad2").html(errorhtml);
    }
});
$("#dshEspecialidad2").on("change", function () {
    var existe = $(this).val();
    if (existe > 0) {
        $.ajax({
            url: "public/views/src/ajaxGraficos.php",
            method: "POST",
            dataType: "html",
            data: { tipoE: existe }
        }).done(function (respuesta) {
            $("#dshServicio").html(respuesta);
        }).fail(function () {
            console.log("error");
        });
    }
    else {
        var errorhtml = "<option value='0'>Seleccione Especialidad</option>";
        $("#dshServicio").html(errorhtml);
    }
});
$("#medicoQX").select2(
    {
        maximumInputLength: "10",
        minimumInputLength: "4",
        language: {

            noResults: function () {

                return "No hay resultado";
            },
            searching: function () {

                return "Buscando Médico ...";
            },
            inputTooShort: function () {
                return "Ingrese 4 o más caracteres";
            },
            inputTooLong: function () {
                return "Ingrese máximo 10 caracteres";
            }
        },
        scrollAfterSelect: true,
        placeholder: 'Ingrese A. Paterno o A. Materno',
        ajax: {
            url: "public/views/src/ajaxGraficos.php",
            type: "post",
            dataType: "json",
            delay: 200,
            data: function (params) {
                return {
                    searchTerm3: params.term,
                };
            },
            processResults: function (response) {
                return {
                    results: response,
                };
            },
            cache: true,
        },
    }
);
function generarNumero(numero) {
    return (Math.random() * numero).toFixed(0);
}

function colorRGB() {
    var coolor = "(" + generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255) + ")";
    return "rgb" + coolor;
}
