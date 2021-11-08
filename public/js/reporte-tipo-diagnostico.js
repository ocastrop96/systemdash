// // Chart.register(ChartDataLabels);
// // Chart.defaults.set('plugins.datalabels', {
// //     color: '#000000'
// // });
// // parametrosMeses()
CargarDiagnosticoxMes($("#rango-dsh2").attr("inicio"), $("#rango-dsh2").attr("fin"), 0, 0, 0, 0, 0);
// CargarAtencionesxEspecialidad($("#rango-dsh2").attr("inicio"), $("#rango-dsh2").attr("fin"), 0, 0, '');
// CargarAtencionesxIAFAS($("#rango-dsh2").attr("inicio"), $("#rango-dsh2").attr("fin"), 0, 0, '');


// $("#anioDash").datepicker({
//     'format': "yyyy",
//     'viewMode': "years",
//     'minViewMode': "years",
//     'autoclose': true,
//     'orientation': 'auto bottom',
//     'language': 'es',
//     'endDate': new Date()
// });
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

    CargarDiagnosticoxMes(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico)
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
    CargarDiagnosticoxMes(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico)

});
$("#dshTipIng").on("change", function () {
    let tipoIngreso = $(this).val();
    let inicio = $("#rango-dsh2").attr("inicio");
    let fin = $("#rango-dsh2").attr("fin");
    let diagnostico = $("#diagnosticoQX").val();
    let especialidad = $("#dshEspecialidad2").val();
    let servicio = $("#dshServicio").val();
    let medico = $("#medicoQX").val();
    console.log(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico);
    // CargarDiagnosticoxMes(inicio, fin, diagnostico, tipoIngreso, especialidad, servicio, medico)

});
function CargarDiagnosticoxMes(inicioD, finD, diagnosticoD, tipoIngD, especialidadD, servicioD, medicoD) {
    var valida3 = 1;
    var datos = new FormData();

    datos.append("dashD1", valida3);

    datos.append("inicioD", inicioD);
    datos.append("finD", finD);
    datos.append("diagnosticoD", diagnosticoD);
    datos.append("tipoIngD", tipoIngD);
    datos.append("especialidadD", especialidadD);
    datos.append("servicioD", servicioD);
    datos.append("medicoD", medicoD);

    $.ajax({
        url: "public/views/src/ajaxGraficos.php",
        method: "POST",
        cache: false,
        data: datos,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            alert(respuesta);
            if (respuesta.length > 0) {
                var mes = [];
                var contador = [];
                var colores = [];
                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][0]);
                    mes.push(respuesta[i][1]);
                    colores.push(colorRGB());
                }

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
                                stepSize: 50,
                                fontColor: '#000'
                            },
                            gridLines: {
                                display: true,
                                color: '#AFAFAF',
                                drawBorder: false
                            }
                        }]
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
                            text: 'Diagnóstico x Meses',
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
                            label: '# de Frecuencia',
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
                    title: {
                        display: true,
                        text: 'Diagnóstico x Meses'
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
