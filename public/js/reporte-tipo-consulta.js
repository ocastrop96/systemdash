CargarAtencionesxMes($("#rango-dsh").attr("inicio"), $("#rango-dsh").attr("fin"), 0, 0, '');
CargarAtencionesxEspecialidad($("#rango-dsh").attr("inicio"), $("#rango-dsh").attr("fin"), 0, 0, '');
CargarAtencionesxIAFAS($("#rango-dsh").attr("inicio"), $("#rango-dsh").attr("fin"), 0, 0, '');

$("#anioDash").datepicker({
    'format': "yyyy",
    'viewMode': "years",
    'minViewMode': "years",
    'autoclose': true,
    'orientation': 'auto bottom',
    'language': 'es',
    'endDate': new Date()
});
$("#deshacer-filtro-DashQX").on("click", function () {
    window.location = "reporte-tipo-consulta";
});
$("input[name='rango-dsh']").daterangepicker({
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
    let especialidad = $("#dshEspecialidad").val();
    let iafa = $("#dshIAFA").val();
    let ndoc = $("#pacienteQX").val();



    $("#rango-dsh").attr("inicio", inicio);
    $("#rango-dsh").attr("fin", fin);
    CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);
    limpiarTabla("tabDetalleIAFACons", "cuerpoTab3", "totalTab3", "totalTab3Porcen");
    limpiarTabla("tabDetalleMeses31", "cuerpoTab31", "totalTab31", "totalTab3Porcen1");
    limpiarTabla("tabDetalleEspecialidad32", "cuerpoTab32", "totalTab32", "totalTab3Porcen2");
});

$("#dshTipIng1").on("change", function () {
    let inicio = $("#rango-dsh").attr("inicio");
    let fin = $("#rango-dsh").attr("fin");
    let especialidad = 0;
    let iafa = $("#dshIAFA").val();
    let ndoc = $("#pacienteQX").val();
    CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);
    limpiarTabla("tabDetalleIAFACons", "cuerpoTab3", "totalTab3", "totalTab3Porcen");
    limpiarTabla("tabDetalleMeses31", "cuerpoTab31", "totalTab31", "totalTab3Porcen1");
    limpiarTabla("tabDetalleEspecialidad32", "cuerpoTab32", "totalTab32", "totalTab3Porcen2");
});
$("#dshEspecialidad").on("change", function () {
    let inicio = $("#rango-dsh").attr("inicio");
    let fin = $("#rango-dsh").attr("fin");
    let especialidad = $(this).val();
    let iafa = $("#dshIAFA").val();
    let ndoc = $("#pacienteQX").val();
    CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);
    limpiarTabla("tabDetalleIAFACons", "cuerpoTab3", "totalTab3", "totalTab3Porcen");
    limpiarTabla("tabDetalleMeses31", "cuerpoTab31", "totalTab31", "totalTab3Porcen1");
    limpiarTabla("tabDetalleEspecialidad32", "cuerpoTab32", "totalTab32", "totalTab3Porcen2");


});

$("#dshIAFA").on("change", function () {
    let inicio = $("#rango-dsh").attr("inicio");
    let fin = $("#rango-dsh").attr("fin");
    let especialidad = $("#dshEspecialidad").val();
    let iafa = $(this).val();
    let ndoc = $("#pacienteQX").val();
    CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);
    limpiarTabla("tabDetalleIAFACons", "cuerpoTab3", "totalTab3", "totalTab3Porcen");
    limpiarTabla("tabDetalleMeses31", "cuerpoTab31", "totalTab31", "totalTab3Porcen1");
    limpiarTabla("tabDetalleEspecialidad32", "cuerpoTab32", "totalTab32", "totalTab3Porcen2");

});

$("#pacienteQX").on("change", function () {
    let inicio = $("#rango-dsh").attr("inicio");
    let fin = $("#rango-dsh").attr("fin");
    let especialidad = $("#dshEspecialidad").val();
    let iafa = $("#dshIAFA").val();
    let ndoc = $(this).val();
    CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
    CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);
    limpiarTabla("tabDetalleIAFACons", "cuerpoTab3", "totalTab3", "totalTab3Porcen");
    limpiarTabla("tabDetalleMeses31", "cuerpoTab31", "totalTab31", "totalTab3Porcen1");
    limpiarTabla("tabDetalleEspecialidad32", "cuerpoTab32", "totalTab32", "totalTab3Porcen2");

});

$("#dshTipIng1").on("change", function () {
    var existe = $(this).val();
    $("#dshEspecialidad").html("<option value='0'>Seleccione Servicio</option>");
    if (existe > 0) {
        $.ajax({
            url: "public/views/src/ajaxGraficos.php",
            method: "POST",
            dataType: "html",
            data: { tipo: existe }
        }).done(function (respuesta) {
            $("#dshEspecialidad").html(respuesta);
        }).fail(function () {
            console.log("error");
        });
    }
    else {
        var errorhtml = "<option value='0'>Seleccione Tipo. Ingreso</option>";
        $("#dshEspecialidad").html(errorhtml);
    }
});
function CargarAtencionesxMes(Inic, Fin, Espec, FF, NDoc) {
    var valida = 1;
    var datos = new FormData();

    datos.append("dash1", valida);
    datos.append("inicio", Inic);
    datos.append("fin", Fin);
    datos.append("especialidad", Espec);
    datos.append("iafa", FF);
    datos.append("doc", NDoc);
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

                    $("#cuerpoTab31").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][1] + '</td>' +
                        '<td>' + respuesta[i][0] + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][0]) / suma * 100).toFixed(3) + ' %</td>' +
                        '</tr>'
                    );
                }

                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTab31").html(totalValueAcum);
                $("#totalTab3Porcen1").html(percentageValue + "%");


                $("canvas#graphDash1").remove();
                $("div.rj1").append('<canvas id="graphDash1" width="350" height="350"></canvas>');
                var ctx2 = document.getElementById("graphDash1").getContext("2d");
                var salesGraphChartData = {
                    labels: mes,
                    datasets: [
                        {
                            label: '# de Atenciones',
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
                            text: 'Atenciones por Mes',
                            padding: {
                                top: 0,
                                bottom: 0
                            }
                        },
                        datalabels: {
                            formatter: (value, context) => {
                                return value;
                            },
                            color: '#fff',
                            font: {
                                weight: 'bold',
                                size: 14,
                            }
                        }

                    }
                }
                var salesGraphChart = new Chart(ctx2, {
                    type: 'bar',
                    plugins: [ChartDataLabels],
                    data: salesGraphChartData,
                    options: salesGraphChartOptions
                });
            }
            else {
                $("canvas#graphDash1").remove();
                $("div.rj1").append('<canvas id="graphDash1" width="350" height="350"></canvas>');
                var ctx2 = document.getElementById("graphDash1").getContext("2d");
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
                        text: 'Atenciones x Mes'
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

function CargarAtencionesxEspecialidad(Inic, Fin, Espec, FF, NDoc) {
    var valida = 1;
    var datos = new FormData();

    datos.append("dash2", valida);
    datos.append("inicio2", Inic);
    datos.append("fin2", Fin);
    datos.append("especialidad2", Espec);
    datos.append("iafa2", FF);
    datos.append("doc2", NDoc);

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
                    especialidad.push(respuesta[i][1]);
                    contador.push(respuesta[i][0]);
                    colores.push(colorRGB());

                    $("#cuerpoTab32").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][1] + '</td>' +
                        '<td>' + respuesta[i][0] + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][0]) / suma * 100).toFixed(3) + ' %</td>' +
                        '</tr>'
                    );

                }

                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTab32").html(totalValueAcum);
                $("#totalTab3Porcen2").html(percentageValue + "%");

                $("canvas#graphDash2").remove();
                $("div.rj2").append('<canvas id="graphDash2" width="350" height="350"></canvas>');
                var ctx = document.getElementById("graphDash2").getContext("2d");
                var donutData = {
                    labels: especialidad,
                    datasets: [
                        {
                            label: '# de Atenciones',
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
                            text: 'Atenciones realizados x Especialidad'
                        },
                        datalabels: {
                            formatter: (value, context) => {
                                return value;
                            },
                            color: '#fff',
                            font: {
                                weight: 'bold',
                                size: 14,
                            }
                        }
                    }
                }
                new Chart(ctx, {
                    type: 'doughnut',
                    data: donutData,
                    // plugins: [ChartDataLabels],
                    options: donutOptions
                });
            }
            else {
                $("canvas#graphDash2").remove();
                $("div.rj2").append('<canvas id="graphDash2" width="350" height="350"></canvas>');
                var ctx = document.getElementById("graphDash2").getContext("2d");
                var donutData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# de Atenciones',
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
                            text: 'Atenciones realizados x Especialidad'
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

function CargarAtencionesxIAFAS(Inic, Fin, Espec, FF, NDoc) {
    var valida = 1;
    var datos = new FormData();

    datos.append("dash3", valida);
    datos.append("inicio3", Inic);
    datos.append("fin3", Fin);
    datos.append("especialidad3", Espec);
    datos.append("iafa3", FF);
    datos.append("doc3", NDoc);
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
                var iafa = [];
                var contador = [];
                var colores = [];
                var suma = 0;

                for (var j = 0; j < respuesta.length; j++) {
                    suma += Number(respuesta[j][0]);
                }

                for (var i = 0; i < respuesta.length; i++) {
                    iafa.push(respuesta[i][1]);
                    contador.push(respuesta[i][0]);
                    colores.push(colorRGB());

                    $("#cuerpoTab3").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][1] + '</td>' +
                        '<td>' + respuesta[i][0] + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][0]) / suma * 100).toFixed(3) + ' %</td>' +
                        '</tr>'
                    );
                }

                $("canvas#graphDash3").remove();
                $("div.rj3").append('<canvas id="graphDash3" width="350" height="350"></canvas>');

                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTab3").html(totalValueAcum);
                $("#totalTab3Porcen").html(percentageValue + "%");

                var ctx = document.getElementById("graphDash3").getContext("2d");
                var donutData = {
                    labels: iafa,
                    datasets: [
                        {
                            label: '# de Atenciones',
                            data: contador,
                            backgroundColor: [
                                "#dc3545",
                                "#007bff",
                                "#6610f2",
                                "#28a745",
                                "#6f42c1",
                                "#e83e8c",
                                "#fd7e14",
                                "#20c997",
                                "#17a2b8",
                                "#6c757d",
                                "#343a40",
                                "#007bff",
                                "#6c757d",
                                "#28a745",
                                "#17a2b8"],
                            borderColor: "#fff"
                        }
                    ]
                }
                var donutOptions = {
                    maintainAspectRatio: false,
                    tooltips: {
                        enabled: false
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'left',
                        },
                        title: {
                            display: true,
                            text: 'Atenciones realizadas x IAFA'
                        },
                        // datalabels: {
                        //     formatter: (value, context) => {
                        //         // const datapoints = context.chart.data.datasets[0].data;
                        //         // function totalSum(total, datapoint) {
                        //         //     return Number(total) + Number(datapoint);
                        //         // }
                        //         // const totalValue = datapoints.reduce(totalSum, 0);
                        //         // const percentageValue = (value / totalValue * 100).toFixed(1);
                        //         // return `${percentageValue}%`;

                        //         return value;

                        //     },
                        //     color: '#fff',
                        //     font: {
                        //         weight: 'bold',
                        //         size: 14,
                        //     }
                        // }
                    }
                }
                new Chart(ctx, {
                    type: 'pie',
                    // plugins: [ChartDataLabels],
                    data: donutData,
                    options: donutOptions
                });
            }
            else {
                $("canvas#graphDash3").remove();
                $("div.rj3").append('<canvas id="graphDash3" width="350" height="350"></canvas>');
                var ctx = document.getElementById("graphDash3").getContext("2d");
                var donutData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# de Atenciones',
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
                            text: 'Atenciones realizadas x IAFA'
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
                    type: 'pie',
                    data: donutData,
                    options: donutOptions
                });

            }
        },
    });

}
$("#pacienteQX").select2(
    {
        maximumInputLength: "12",
        minimumInputLength: "8",
        language: {

            noResults: function () {

                return "No hay resultado";
            },
            searching: function () {

                return "Buscando Paciente ...";
            },
            inputTooShort: function () {
                return "Ingrese 8 o más caracteres";
            },
            inputTooLong: function () {
                return "Ingrese máximo 12 caracteres";
            }
        },
        scrollAfterSelect: true,
        placeholder: 'Ingrese DNI del Paciente',
        ajax: {
            url: "public/views/src/ajaxGraficos.php",
            type: "post",
            dataType: "json",
            delay: 200,
            data: function (params) {
                return {
                    searchTerm: params.term,
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

function limpiarTabla(idTabla, idTbodyTable, idTotal, idTotalPorcentaje) {
    $("table#" + idTabla + ".table.table-striped.table-valign-middle tbody#" + idTbodyTable + " tr").remove();
    $("#" + idTotal + "").html("");
    $("#" + idTotalPorcentaje + "").html("");

}
function generarNumero(numero) {
    return (Math.random() * numero).toFixed(0);
}

function colorRGB() {
    var coolor = "(" + generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255) + ")";
    return "rgb" + coolor;
}
