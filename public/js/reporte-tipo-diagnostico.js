$("#deshacer-filtro-DashQX2").on("click", function () {
    window.location = "reporte-tipo-diagnostico";
});
VerDiagnosticosxMeses($("#rango-dsh2").attr("inicio2"), $("#rango-dsh2").attr("fin2"), $("#diagnosticoQX").val(), $("#dshTipIng").val(), $("#dshEspecialidad2").val(), $("#dshServicio").val(), $("#medicoQX").val());
VerDiagnosticosxEspecialidad($("#rango-dsh2").attr("inicio2"), $("#rango-dsh2").attr("fin2"), $("#diagnosticoQX").val(), $("#dshTipIng").val(), $("#dshEspecialidad2").val(), $("#dshServicio").val(), $("#medicoQX").val());
VerDiagnosticosTop10($("#rango-dsh2").attr("inicio2"), $("#rango-dsh2").attr("fin2"));
ValidaTrimestre();

$("#dshTipAnio").datepicker({
    'format': "yyyy",
    'viewMode': "years",
    'minViewMode': "years",
    'autoclose': true,
    'orientation': 'auto bottom',
    'language': 'es',
    'endDate': new Date(),
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
    let inicio2 = start.format('YYYY-MM-DD');
    let fin2 = end.format('YYYY-MM-DD');
    let diagnostico = $("#diagnosticoQX").val();
    let tipoIngreso = $("#dshTipIng").val();
    let especialidad = $("#dshEspecialidad2").val();
    let servicio = $("#dshServicio").val();
    let medico = $("#medicoQX").val();

    $("#rango-dsh2").attr("inicio2", inicio2);
    $("#rango-dsh2").attr("fin2", fin2);
    VerDiagnosticosxMeses(inicio2, fin2, diagnostico, tipoIngreso, especialidad, servicio, medico);
    VerDiagnosticosxEspecialidad(inicio2, fin2, diagnostico, tipoIngreso, especialidad, servicio, medico)
    VerDiagnosticosTop10(inicio2, fin2);
    $("#trimestre_año").html(formatoFecha(inicio2, fin2));
    $("#trimestre_año2").html(formatoFecha(inicio2, fin2));
    $("#trimestre_año3").html(formatoFecha(inicio2, fin2));


    limpiarTabla2("tabDetalle10Diag", "cuerpoTab10Diag", "totalTab10Diag", "totalTab10DiagPorcen");
    limpiarTabla2("tabDetalleMesDiag", "cuerpoTabMesDiag", "totalTabMesDiag", "totalTabMesDiagPorcen");
    limpiarTabla2("tabDetalleEspDiag", "cuerpoTabEspDiag", "totalTabEspDiag", "totalTabEspDiagPorcen");



});
$("#diagnosticoQX").on("change", function () {
    let inicio = $("#rango-dsh2").attr("inicio2");
    let fin = $("#rango-dsh2").attr("fin2");
    let diagnostico = $(this).val();
    let tipoIngreso = $("#dshTipIng").val();
    let especialidad = $("#dshEspecialidad2").val();
    let servicio = $("#dshServicio").val();
    let medico = $("#medicoQX").val();
    VerDiagnosticosxMeses(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    VerDiagnosticosxEspecialidad(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    limpiarTabla2("tabDetalleMesDiag", "cuerpoTabMesDiag", "totalTabMesDiag", "totalTabMesDiagPorcen");
    limpiarTabla2("tabDetalleEspDiag", "cuerpoTabEspDiag", "totalTabEspDiag", "totalTabEspDiagPorcen");



});
$(".dshTipIng").on("change", function () {
    let tipoIngreso = $(this).val();
    let inicio = $("#rango-dsh2").attr("inicio2");
    let fin = $("#rango-dsh2").attr("fin2");
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = 0;
    let servicio = 0;
    let medico = $("#medicoQX").val();
    VerDiagnosticosxMeses(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    VerDiagnosticosxEspecialidad(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    limpiarTabla2("tabDetalleMesDiag", "cuerpoTabMesDiag", "totalTabMesDiag", "totalTabMesDiagPorcen");
    limpiarTabla2("tabDetalleEspDiag", "cuerpoTabEspDiag", "totalTabEspDiag", "totalTabEspDiagPorcen");

});

$(".dshEspecialidad2").on("change", function () {
    let tipoIngreso = $("#dshTipIng").val();
    let inicio = $("#rango-dsh2").attr("inicio2");
    let fin = $("#rango-dsh2").attr("fin2");
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = $(this).val();
    let servicio = 0;
    let medico = $("#medicoQX").val();
    VerDiagnosticosxMeses(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    VerDiagnosticosxEspecialidad(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    limpiarTabla2("tabDetalleMesDiag", "cuerpoTabMesDiag", "totalTabMesDiag", "totalTabMesDiagPorcen");
    limpiarTabla2("tabDetalleEspDiag", "cuerpoTabEspDiag", "totalTabEspDiag", "totalTabEspDiagPorcen");

});
$(".dshServicio").on("change", function () {
    let servicio = $(this).val();
    let tipoIngreso = $("#dshTipIng").val();
    let inicio = $("#rango-dsh2").attr("inicio2");
    let fin = $("#rango-dsh2").attr("fin2");
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = $("#dshEspecialidad2").val();
    let medico = $("#medicoQX").val();
    VerDiagnosticosxMeses(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    VerDiagnosticosxEspecialidad(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    limpiarTabla2("tabDetalleMesDiag", "cuerpoTabMesDiag", "totalTabMesDiag", "totalTabMesDiagPorcen");
    limpiarTabla2("tabDetalleEspDiag", "cuerpoTabEspDiag", "totalTabEspDiag", "totalTabEspDiagPorcen");

});

$("#medicoQX").on("change", function () {
    let servicio = $("#dshServicio").val();
    let tipoIngreso = $("#dshTipIng").val();
    let inicio = $("#rango-dsh2").attr("inicio2");
    let fin = $("#rango-dsh2").attr("fin2");
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = $("#dshEspecialidad2").val();
    let medico = $(this).val();
    VerDiagnosticosxMeses(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    VerDiagnosticosxEspecialidad(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    limpiarTabla2("tabDetalleMesDiag", "cuerpoTabMesDiag", "totalTabMesDiag", "totalTabMesDiagPorcen");
    limpiarTabla2("tabDetalleEspDiag", "cuerpoTabEspDiag", "totalTabEspDiag", "totalTabEspDiagPorcen");

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
    $("#dshServicio").html("<option value='0'>Seleccione Especialidad</option>");
    var existe = $(this).val();
    if (existe > 0) {
        $("#dshServicio").html("<option value='0'>Seleccione Especialidad</option>");
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

$("#dshTipTrimestre").on("change", function () {
    var seleccion = $(this).val();
    // let dateActual = new Date();
    let anio = $("#dshTipAnio").val();
    if (seleccion == 1) {
        $("#trimestre_año").html('1ER TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año2").html('1ER TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año3").html('1ER TRIMESTRE' + ' - ' + anio);

        dInicio = anio + "-01-01";
        dFin = anio + "-03-31";
        $("#rango-dsh2").attr("inicio2", dInicio);
        $("#rango-dsh2").attr("fin2", dFin);
    }
    else if (seleccion == 2) {
        $("#trimestre_año").html('2DO TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año2").html('2DO TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año3").html('2DO TRIMESTRE' + ' - ' + anio);

        dInicio = anio + "-04-01";
        dFin = anio + "-06-30";
        $("#rango-dsh2").attr("inicio2", dInicio);
        $("#rango-dsh2").attr("fin2", dFin);
    }
    else if (seleccion == 3) {
        $("#trimestre_año").html('3ER TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año2").html('3ER TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año3").html('3ER TRIMESTRE' + ' - ' + anio);

        dInicio = anio + "-07-01";
        dFin = anio + "-09-30";
        $("#rango-dsh2").attr("inicio2", dInicio);
        $("#rango-dsh2").attr("fin2", dFin);
    }
    else if (seleccion == 4) {
        $("#trimestre_año").html('4TO TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año2").html('4TO TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año3").html('4TO TRIMESTRE' + ' - ' + anio);

        dInicio = anio + "-10-01";
        dFin = anio + "-12-31";
        $("#rango-dsh2").attr("inicio2", dInicio);
        $("#rango-dsh2").attr("fin2", dFin);
    }

    let servicio = $("#dshServicio").val();
    let tipoIngreso = $("#dshTipIng").val();
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = $("#dshEspecialidad2").val();
    let medico = $("#medicoQX").val();

    limpiarTabla2("tabDetalle10Diag", "cuerpoTab10Diag", "totalTab10Diag", "totalTab10DiagPorcen");
    limpiarTabla2("tabDetalleMesDiag", "cuerpoTabMesDiag", "totalTabMesDiag", "totalTabMesDiagPorcen");
    limpiarTabla2("tabDetalleEspDiag", "cuerpoTabEspDiag", "totalTabEspDiag", "totalTabEspDiagPorcen");

    VerDiagnosticosTop10(dInicio, dFin);
    VerDiagnosticosxMeses(dInicio, dFin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    VerDiagnosticosxEspecialidad(dInicio, dFin, diagnostico, tipoIngreso, especialidad, servicio, medico);

});


$("#dshTipAnio").on("change", function () {
    var seleccion = $("#dshTipTrimestre").val();
    // let dateActual = new Date();
    let anio = $("#dshTipAnio").val();
    if (seleccion == 1) {
        $("#trimestre_año").html('1ER TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año2").html('1ER TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año3").html('1ER TRIMESTRE' + ' - ' + anio);

        dInicio = anio + "-01-01";
        dFin = anio + "-03-31";

        $("#rango-dsh2").attr("inicio2", dInicio);
        $("#rango-dsh2").attr("fin2", dFin);
    }
    else if (seleccion == 2) {
        $("#trimestre_año").html('2DO TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año2").html('2DO TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año3").html('2DO TRIMESTRE' + ' - ' + anio);

        dInicio = anio + "-04-01";
        dFin = anio + "-06-30";
        $("#rango-dsh2").attr("inicio2", dInicio);
        $("#rango-dsh2").attr("fin2", dFin);
    }
    else if (seleccion == 3) {
        $("#trimestre_año").html('3ER TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año2").html('3ER TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año3").html('3ER TRIMESTRE' + ' - ' + anio);

        dInicio = anio + "-07-01";
        dFin = anio + "-09-30";
        $("#rango-dsh2").attr("inicio2", dInicio);
        $("#rango-dsh2").attr("fin2", dFin);
    }
    else if (seleccion == 4) {
        $("#trimestre_año").html('4TO TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año2").html('4TO TRIMESTRE' + ' - ' + anio);
        $("#trimestre_año3").html('4TO TRIMESTRE' + ' - ' + anio);

        dInicio = anio + "-10-01";
        dFin = anio + "-12-31";
        $("#rango-dsh2").attr("inicio2", dInicio);
        $("#rango-dsh2").attr("fin2", dFin);
    }
    limpiarTabla2("tabDetalle10Diag", "cuerpoTab10Diag", "totalTab10Diag", "totalTab10DiagPorcen");
    limpiarTabla2("tabDetalleMesDiag", "cuerpoTabMesDiag", "totalTabMesDiag", "totalTabMesDiagPorcen");
    limpiarTabla2("tabDetalleEspDiag", "cuerpoTabEspDiag", "totalTabEspDiag", "totalTabEspDiagPorcen");

    let servicio = $("#dshServicio").val();
    let tipoIngreso = $("#dshTipIng").val();
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = $("#dshEspecialidad2").val();
    let medico = $("#medicoQX").val();

    VerDiagnosticosTop10(dInicio, dFin);
    VerDiagnosticosxMeses(dInicio, dFin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    VerDiagnosticosxEspecialidad(dInicio, dFin, diagnostico, tipoIngreso, especialidad, servicio, medico);

});
function VerDiagnosticosxMeses(dInicio, dFin, dDiagnostico, dTipoIngreso, dEspecialidad, dServicio, dMedico) {
    var dashD1 = 1;
    var datos = new FormData();
    datos.append("dashD1", dashD1);
    datos.append("dInicio", dInicio);
    datos.append("dFin", dFin);
    datos.append("dDiagnostico", dDiagnostico);
    datos.append("dTipoIngreso", dTipoIngreso);
    datos.append("dEspecialidad", dEspecialidad);
    datos.append("dServicio", dServicio);
    datos.append("dMedico", dMedico);
    $.ajax({
        url: "public/views/src/ajaxGraficos.php",
        method: "POST",
        cache: false,
        data: datos,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            if (respuesta.length > 0) {
                var mes = [];
                var contador = [];
                var colores = [];
                var suma = 0;

                for (var j = 0; j < respuesta.length; j++) {
                    suma += Number(respuesta[j][0]);
                }

                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][0]);
                    mes.push(respuesta[i][1]);
                    colores.push(colorRGB());
                    let numeroSet = Number(respuesta[i][0]).toLocaleString('en-US');

                    $("#cuerpoTabMesDiag").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][1] + '</td>' +
                        '<td>' + numeroSet + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][0]) / suma * 100).toFixed(2) + ' %</td>' +
                        '</tr>'
                    );

                }
                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTabMesDiag").html(totalValueAcum.toLocaleString('en-US'));
                $("#totalTabMesDiagPorcen").html(percentageValue + "%");

                $("canvas#graphDashD1").remove();
                $("div.rd1").append('<canvas id="graphDashD1" width="350" height="350"></canvas>');
                var ctx2 = document.getElementById("graphDashD1").getContext("2d");
                var salesGraphChartData = {
                    labels: mes,
                    datasets: [
                        {
                            label: '# de Frecuencia',
                            backgroundColor: colores,
                            borderColor: colores,
                            borderWidth: 1,
                            data: contador
                        }
                    ]
                }

                var salesGraphChartOptions = {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false
                    },
                    plugins: {
                        datalabels: {
                            color: '#2A2A2A',
                            labels: {
                                title: {
                                    font: {
                                        weight: 'bolder'
                                    }
                                },
                                value: {
                                    color: 'green'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Frecuencia de Dx por Mes',
                            padding: {
                                top: 0,
                                bottom: 0
                            }
                        }

                    }
                }
                var salesGraphChart = new Chart(ctx2, {
                    type: 'bar',
                    data: salesGraphChartData,
                    options: salesGraphChartOptions
                });
            }
            else {
                $("canvas#graphDashD1").remove();
                $("div.rd1").append('<canvas id="graphDashD1" width="350" height="350"></canvas>');
                var ctx2 = document.getElementById("graphDashD1").getContext("2d");
                var salesGraphChartData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# de Atenciones',
                            backgroundColor: colores,
                            borderColor: colores,
                            borderWidth: 1,
                            data: [0]
                        }
                    ]
                }

                var salesGraphChartOptions = {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false
                    },
                    scales: {
                        // xAxes: [{
                        //     ticks: {
                        //         fontColor: colores
                        //     },
                        //     gridLines: {
                        //         display: false,
                        //         color: '#000',
                        //         drawBorder: false
                        //     }
                        // }],
                        // yAxes: [{
                        //     ticks: {
                        //         stepSize: 50,
                        //         fontColor: '#000'
                        //     },
                        //     gridLines: {
                        //         display: true,
                        //         color: '#AFAFAF',
                        //         drawBorder: false
                        //     }
                        // }]
                    },
                    plugins: {
                        datalabels: {
                            color: '#2A2A2A',
                            labels: {
                                title: {
                                    font: {
                                        weight: 'bolder'
                                    }
                                },
                                value: {
                                    color: 'green'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Frecuencia de Dx por Mes',
                            padding: {
                                top: 0,
                                bottom: 0
                            }
                        }

                    }
                }
                var salesGraphChart = new Chart(ctx2, {
                    type: 'bar',
                    data: salesGraphChartData,
                    options: salesGraphChartOptions
                });
            }
        },
    });

}

function VerDiagnosticosxEspecialidad(dInicio, dFin, dDiagnostico, dTipoIngreso, dEspecialidad, dServicio, dMedico) {
    var dashD1 = 1;
    var datos = new FormData();

    datos.append("dashD2", dashD1);
    datos.append("dInicio2", dInicio);
    datos.append("dFin2", dFin);
    datos.append("dDiagnostico2", dDiagnostico);
    datos.append("dTipoIngreso2", dTipoIngreso);
    datos.append("dEspecialidad2", dEspecialidad);
    datos.append("dServicio2", dServicio);
    datos.append("dMedico2", dMedico);
    $.ajax({
        url: "public/views/src/ajaxGraficos.php",
        method: "POST",
        cache: false,
        data: datos,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            if (respuesta.length > 0) {
                var especialidad = [];
                var contador = [];
                var colores = [];
                var suma = 0;

                for (var j = 0; j < respuesta.length; j++) {
                    suma += Number(respuesta[j][0]);
                }

                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][0]);
                    especialidad.push(respuesta[i][2]);
                    colores.push(colorRGB());
                    let numeroSet = Number(respuesta[i][0]).toLocaleString('en-US');

                    $("#cuerpoTabEspDiag").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][2] + '</td>' +
                        '<td>' + numeroSet + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][0]) / suma * 100).toFixed(2) + ' %</td>' +
                        '</tr>'
                    );
                }

                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTabEspDiag").html(totalValueAcum.toLocaleString('en-US'));
                $("#totalTabEspDiagPorcen").html(percentageValue + "%");

                $("canvas#graphDashD2").remove();
                $("div.rd2").append('<canvas id="graphDashD2" width="350" height="350"></canvas>');
                var ctx2 = document.getElementById("graphDashD2").getContext("2d");
                var salesGraphChartData = {
                    labels: especialidad,
                    datasets: [
                        {
                            label: '# de Frecuencia',
                            backgroundColor: colores,
                            borderColor: colores,
                            borderWidth: 1,
                            data: contador
                        }
                    ]
                }

                var salesGraphChartOptions = {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false
                    },
                    indexAxis: 'y',
                    plugins: {
                        datalabels: {
                            color: '#2A2A2A',
                            labels: {
                                title: {
                                    font: {
                                        weight: 'bolder'
                                    }
                                },
                                value: {
                                    color: 'green'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Frecuencia de Dx por Especialidades',
                            padding: {
                                top: 0,
                                bottom: 0
                            }
                        },
                        legend: {
                            position: 'right',
                        }
                    }
                }
                var salesGraphChart = new Chart(ctx2, {
                    type: 'bar',
                    data: salesGraphChartData,
                    options: salesGraphChartOptions
                });
            }
            else {
                $("canvas#graphDashD2").remove();
                $("div.rd2").append('<canvas id="graphDashD2" width="350" height="350"></canvas>');
                var ctx2 = document.getElementById("graphDashD2").getContext("2d");
                var salesGraphChartData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# de Atenciones',
                            backgroundColor: colores,
                            borderColor: colores,
                            borderWidth: 1,
                            data: [0]
                        }
                    ]
                }

                var salesGraphChartOptions = {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false
                    },
                    indexAxis: 'y',
                    plugins: {
                        datalabels: {
                            color: '#2A2A2A',
                            labels: {
                                title: {
                                    font: {
                                        weight: 'bolder'
                                    }
                                },
                                value: {
                                    color: 'green'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Frecuencia de Dx por Especialidades',
                            padding: {
                                top: 0,
                                bottom: 0
                            }
                        },
                        legend: {
                            position: 'right',
                        }

                    }
                }
                var salesGraphChart = new Chart(ctx2, {
                    type: 'bar',
                    data: salesGraphChartData,
                    options: salesGraphChartOptions
                });
            }
        },
    });

}

function VerDiagnosticosTop10(dInicio, dFin) {
    var dashD1 = 1;
    var datos = new FormData();

    datos.append("dashD3", dashD1);
    datos.append("dInicio3", dInicio);
    datos.append("dFin3", dFin);
    $.ajax({
        url: "public/views/src/ajaxGraficos.php",
        method: "POST",
        cache: false,
        data: datos,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            if (respuesta.length > 0) {
                var diagnostico = [];
                var contador = [];
                var colores = [];

                var suma = 0;

                for (var j = 0; j < respuesta.length; j++) {
                    suma += Number(respuesta[j][0]);
                }

                for (var i = 0; i < respuesta.length; i++) {
                    diagnostico.push(respuesta[i][1]);
                    contador.push(respuesta[i][0]);
                    colores.push(colorRGB());
                    let numeroSet = Number(respuesta[i][0]).toLocaleString('en-US');
                    $("#cuerpoTab10Diag").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][1] + '</td>' +
                        '<td>' + respuesta[i][2] + '</td>' +
                        '<td>' + numeroSet + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][0]) / suma * 100).toFixed(2) + ' %</td>' +
                        '</tr>'
                    );
                }

                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTab10Diag").html(totalValueAcum.toLocaleString('en-US'));
                $("#totalTab10DiagPorcen").html(percentageValue + "%");


                $("canvas#graphDashD3").remove();
                $("div.rd3").append('<canvas id="graphDashD3" width="350" height="350"></canvas>');
                var ctx = document.getElementById("graphDashD3").getContext("2d");
                var donutData = {
                    labels: diagnostico,
                    datasets: [
                        {
                            label: '# de Frecuencia',
                            data: contador,
                            backgroundColor: colores,
                            borderColor: colores
                        }
                    ]
                }
                var donutOptions = {
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'left',
                        },
                        title: {
                            display: true,
                            text: 'Top 10 Diagnósticos'
                        }
                    }
                }
                new Chart(ctx, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });
            }
            else {
                $("canvas#graphDashD3").remove();
                $("div.rd3").append('<canvas id="graphDashD3" width="350" height="350"></canvas>');
                var ctx = document.getElementById("graphDashD3").getContext("2d");
                var donutData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# de Frecuencia',
                            data: [0],
                            backgroundColor: colores,
                            borderColor: colores
                        }
                    ]
                }
                var donutOptions = {
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: 'Top 10 Diagnósticos'
                        }
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: colores
                            },
                            gridLines: {
                                display: false,
                                color: '#000',
                                drawBorder: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                stepSize: 100,
                                fontColor: '#000'
                            },
                            gridLines: {
                                display: true,
                                color: '#AFAFAF',
                                drawBorder: false
                            }
                        }]
                    },
                }
                new Chart(ctx, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });

            }
        },
    });

}

function ValidaTrimestre() {
    let dateActual = new Date();
    let anioActual = dateActual.getFullYear();
    let mesActual = dateActual.getMonth();
    if (mesActual >= 1 && mesActual <= 3) {
        $("#trimestre_año").html('1ER TRIMESTRE' + ' - ' + anioActual);
        $("#trimestre_año2").html('1ER TRIMESTRE' + ' - ' + anioActual);
        $("#trimestre_año3").html('1ER TRIMESTRE' + ' - ' + anioActual);

    }
    else if (mesActual >= 4 && mesActual <= 6) {
        $("#trimestre_año").html('2DO TRIMESTRE' + ' - ' + anioActual);
        $("#trimestre_año2").html('2DO TRIMESTRE' + ' - ' + anioActual);
        $("#trimestre_año3").html('2DO TRIMESTRE' + ' - ' + anioActual);

    }
    else if (mesActual >= 7 && mesActual <= 9) {
        $("#trimestre_año").html('3ER TRIMESTRE' + ' - ' + anioActual);
        $("#trimestre_año2").html('3ER TRIMESTRE' + ' - ' + anioActual);
        $("#trimestre_año3").html('3ER TRIMESTRE' + ' - ' + anioActual);

    }
    else if (mesActual >= 10 && mesActual <= 12) {
        $("#trimestre_año").html('4TO TRIMESTRE' + ' - ' + anioActual);
        $("#trimestre_año2").html('4TO TRIMESTRE' + ' - ' + anioActual);
        $("#trimestre_año3").html('4TO TRIMESTRE' + ' - ' + anioActual);

    }
}
function generarNumero(numero) {
    return (Math.random() * numero).toFixed(0);
}

function colorRGB() {
    var coolor = "(" + generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255) + ")";
    return "rgb" + coolor;
}


function limpiarTabla2(idTabla, idTbodyTable, idTotal, idTotalPorcentaje) {
    $("table#" + idTabla + ".table.table-striped.table-valign-middle tbody#" + idTbodyTable + " tr").remove();
    $("#" + idTotal + "").html("");
    $("#" + idTotalPorcentaje + "").html("");

}

function formatoFecha(input1, input2) {
    var datePart = input1.match(/\d+/g),
        year = datePart[0].substring(0, 4), // get only two digits
        month = datePart[1], day = datePart[2];

    var datePart2 = input2.match(/\d+/g),
        year2 = datePart2[0].substring(0, 4), // get only two digits
        month2 = datePart2[1], day2 = datePart2[2];

    return day + '/' + month + '/' + year + ' hasta ' + day2 + '/' + month2 + '/' + year2;
}