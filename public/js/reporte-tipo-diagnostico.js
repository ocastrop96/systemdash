// // Chart.register(ChartDataLabels);
// // Chart.defaults.set('plugins.datalabels', {
// //     color: '#000000'
// // });
// // parametrosMeses()
// CargarAtencionesxMes($("#rango-dsh2").attr("inicio"), $("#rango-dsh2").attr("fin"), 0, 0, '');
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
    // let especialidad = $("#dshEspecialidad").val();
    // let iafa = $("#dshIAFA").val();
    // let ndoc = $("#pacienteQX").val();


    // CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
    // CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
    // CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);

});
// $("#dshEspecialidad").on("change", function () {
//     let inicio = $("#rango-dsh").attr("inicio");
//     let fin = $("#rango-dsh").attr("fin");
//     let especialidad = $(this).val();
//     let iafa = $("#dshIAFA").val();
//     let ndoc = $("#pacienteQX").val();
//     CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
//     CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
//     CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);


// });

// $("#dshIAFA").on("change", function () {
//     let inicio = $("#rango-dsh").attr("inicio");
//     let fin = $("#rango-dsh").attr("fin");
//     let especialidad = $("#dshEspecialidad").val();
//     let iafa = $(this).val();
//     let ndoc = $("#pacienteQX").val();
//     CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
//     CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
//     CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);


// });

// $("#pacienteQX").on("change", function () {
//     let inicio = $("#rango-dsh").attr("inicio");
//     let fin = $("#rango-dsh").attr("fin");
//     let especialidad = $("#dshEspecialidad").val();
//     let iafa = $("#dshIAFA").val();
//     let ndoc = $(this).val();
//     CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
//     CargarAtencionesxEspecialidad(inicio, fin, especialidad, iafa, ndoc);
//     CargarAtencionesxIAFAS(inicio, fin, especialidad, iafa, ndoc);

// });
// function CargarAtencionesxMes(Inic, Fin, Espec, FF, NDoc) {
//     var valida = 1;
//     var datos = new FormData();

//     datos.append("dash1", valida);
//     datos.append("inicio", Inic);
//     datos.append("fin", Fin);
//     datos.append("especialidad", Espec);
//     datos.append("iafa", FF);
//     datos.append("doc", NDoc);
//     $.ajax({
//         url: "public/views/src/ajaxGraficos.php",
//         method: "POST",
//         cache: false,
//         data: datos,
//         contentType: false,
//         processData: false,
//         dataType: "json",
//         success: function (respuesta) {
//             if (respuesta.length > 0) {
//                 var mes = [];
//                 var contador = [];
//                 var colores = [];
//                 for (var i = 0; i < respuesta.length; i++) {
//                     contador.push(respuesta[i][0]);
//                     mes.push(respuesta[i][1]);
//                     colores.push(colorRGB());
//                 }

//                 $("canvas#graphDash1").remove();
//                 $("div.rj1").append('<canvas id="graphDash1" width="400" height="400"></canvas>');
//                 var ctx2 = document.getElementById("graphDash1").getContext("2d");
//                 var salesGraphChartData = {
//                     labels: mes,
//                     datasets: [
//                         {
//                             label: '# de Atenciones',
//                             backgroundColor: colores,
//                             borderColor: colores,
//                             borderWidth: 1,
//                             data: contador
//                         }
//                     ]
//                 }

//                 var salesGraphChartOptions = {
//                     maintainAspectRatio: false,
//                     responsive: true,
//                     legend: {
//                         display: false
//                     },
//                     scales: {
//                         xAxes: [{
//                             ticks: {
//                                 fontColor: colores
//                             },
//                             gridLines: {
//                                 display: false,
//                                 color: '#000',
//                                 drawBorder: false
//                             }
//                         }],
//                         yAxes: [{
//                             ticks: {
//                                 stepSize: 50,
//                                 fontColor: '#000'
//                             },
//                             gridLines: {
//                                 display: true,
//                                 color: '#AFAFAF',
//                                 drawBorder: false
//                             }
//                         }]
//                     },
//                     plugins: {
//                         datalabels: {
//                             color: '#2A2A2A',
//                             labels: {
//                                 title: {
//                                     font: {
//                                         weight: 'bolder'
//                                     }
//                                 },
//                                 value: {
//                                     color: 'green'
//                                 }
//                             }
//                         },
//                         title: {
//                             display: true,
//                             text: 'Atenciones por Mes',
//                             padding: {
//                                 top: 0,
//                                 bottom: 0
//                             }
//                         }

//                     }
//                 }
//                 var salesGraphChart = new Chart(ctx2, {
//                     type: 'bar',
//                     data: salesGraphChartData,
//                     options: salesGraphChartOptions
//                 });
//             }
//             else {
//                 $("canvas#graphDash1").remove();
//                 $("div.rj1").append('<canvas id="graphDash1" width="400" height="400"></canvas>');
//                 var ctx2 = document.getElementById("graphDash1").getContext("2d");
//                 var salesGraphChartData = {
//                     labels: ['SIN DATOS'],
//                     datasets: [
//                         {
//                             label: '# de Atenciones',
//                             backgroundColor: colores,
//                             borderColor: colores,
//                             borderWidth: 1,
//                             data: [0]
//                         }
//                     ]
//                 }

//                 var salesGraphChartOptions = {
//                     maintainAspectRatio: false,
//                     responsive: true,
//                     legend: {
//                         display: false
//                     },
//                     scales: {
//                         xAxes: [{
//                             ticks: {
//                                 fontColor: colores
//                             },
//                             gridLines: {
//                                 display: false,
//                                 color: '#000',
//                                 drawBorder: false
//                             }
//                         }],
//                         yAxes: [{
//                             ticks: {
//                                 stepSize: 100,
//                                 fontColor: '#000'
//                             },
//                             gridLines: {
//                                 display: true,
//                                 color: '#AFAFAF',
//                                 drawBorder: false
//                             }
//                         }]
//                     },
//                     title: {
//                         display: true,
//                         text: 'Atenciones x Mes'
//                     }
//                 }
//                 var salesGraphChart = new Chart(ctx2, {
//                     type: 'bar',
//                     data: salesGraphChartData,
//                     options: salesGraphChartOptions
//                 });
//             }
//         },
//     });
// }

// function CargarAtencionesxEspecialidad(Inic, Fin, Espec, FF, NDoc) {
//     var valida = 1;
//     var datos = new FormData();

//     datos.append("dash2", valida);
//     datos.append("inicio2", Inic);
//     datos.append("fin2", Fin);
//     datos.append("especialidad2", Espec);
//     datos.append("iafa2", FF);
//     datos.append("doc2", NDoc);

//     $.ajax({
//         url: "public/views/src/ajaxGraficos.php",
//         method: "POST",
//         cache: false,
//         data: datos,
//         contentType: false,
//         processData: false,
//         dataType: "json",
//         success: function (respuesta) {
//             if (respuesta.length > 0) {
//                 var especialidad = [];
//                 var contador = [];
//                 var colores = [];
//                 for (var i = 0; i < respuesta.length; i++) {
//                     especialidad.push(respuesta[i][1]);
//                     contador.push(respuesta[i][0]);
//                     colores.push(colorRGB());
//                 }

//                 $("canvas#graphDash2").remove();
//                 $("div.rj2").append('<canvas id="graphDash2" width="400" height="400"></canvas>');
//                 var ctx = document.getElementById("graphDash2").getContext("2d");
//                 var donutData = {
//                     labels: especialidad,
//                     datasets: [
//                         {
//                             label: '# de Atenciones',
//                             data: contador,
//                             backgroundColor: colores,
//                             borderColor: colores
//                         }
//                     ]
//                 }
//                 var donutOptions = {
//                     maintainAspectRatio: false,
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             position: 'bottom',
//                         },
//                         title: {
//                             display: true,
//                             text: 'Atenciones realizados x Especialidad'
//                         }
//                     }
//                 }
//                 new Chart(ctx, {
//                     type: 'doughnut',
//                     data: donutData,
//                     options: donutOptions
//                 });
//             }
//             else {
//                 $("canvas#graphDash2").remove();
//                 $("div.rj2").append('<canvas id="graphDash2" width="400" height="400"></canvas>');
//                 var ctx = document.getElementById("graphDash2").getContext("2d");
//                 var donutData = {
//                     labels: ['SIN DATOS'],
//                     datasets: [
//                         {
//                             label: '# de Atenciones',
//                             data: [0],
//                             backgroundColor: colores,
//                             borderColor: colores
//                         }
//                     ]
//                 }
//                 var donutOptions = {
//                     maintainAspectRatio: false,
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             position: 'bottom',
//                         },
//                         title: {
//                             display: true,
//                             text: 'Atenciones realizados x Especialidad'
//                         }
//                     },
//                     scales: {
//                         xAxes: [{
//                             ticks: {
//                                 fontColor: colores
//                             },
//                             gridLines: {
//                                 display: false,
//                                 color: '#000',
//                                 drawBorder: false
//                             }
//                         }],
//                         yAxes: [{
//                             ticks: {
//                                 stepSize: 100,
//                                 fontColor: '#000'
//                             },
//                             gridLines: {
//                                 display: true,
//                                 color: '#AFAFAF',
//                                 drawBorder: false
//                             }
//                         }]
//                     },
//                 }
//                 new Chart(ctx, {
//                     type: 'doughnut',
//                     data: donutData,
//                     options: donutOptions
//                 });

//             }
//         },
//     });

// }

// function CargarAtencionesxIAFAS(Inic, Fin, Espec, FF, NDoc) {
//     var valida = 1;
//     var datos = new FormData();

//     datos.append("dash3", valida);
//     datos.append("inicio3", Inic);
//     datos.append("fin3", Fin);
//     datos.append("especialidad3", Espec);
//     datos.append("iafa3", FF);
//     datos.append("doc3", NDoc);

//     $.ajax({
//         url: "public/views/src/ajaxGraficos.php",
//         method: "POST",
//         cache: false,
//         data: datos,
//         contentType: false,
//         processData: false,
//         dataType: "json",
//         success: function (respuesta) {
//             if (respuesta.length > 0) {
//                 var iafa = [];
//                 var contador = [];
//                 var colores = [];
//                 for (var i = 0; i < respuesta.length; i++) {
//                     iafa.push(respuesta[i][1]);
//                     contador.push(respuesta[i][0]);
//                     colores.push(colorRGB());
//                 }

//                 $("canvas#graphDash3").remove();
//                 $("div.rj3").append('<canvas id="graphDash3" width="400" height="400"></canvas>');
//                 var ctx = document.getElementById("graphDash3").getContext("2d");
//                 var donutData = {
//                     labels: iafa,
//                     datasets: [
//                         {
//                             label: '# de Atenciones',
//                             data: contador,
//                             backgroundColor: colores,
//                             borderColor: colores
//                         }
//                     ]
//                 }
//                 var donutOptions = {
//                     maintainAspectRatio: false,
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             position: 'bottom',
//                         },
//                         title: {
//                             display: true,
//                             text: 'Atenciones realizadas x IAFA'
//                         }
//                     }
//                 }
//                 new Chart(ctx, {
//                     type: 'pie',
//                     data: donutData,
//                     options: donutOptions
//                 });
//             }
//             else {
//                 $("canvas#graphDash3").remove();
//                 $("div.rj3").append('<canvas id="graphDash3" width="400" height="400"></canvas>');
//                 var ctx = document.getElementById("graphDash3").getContext("2d");
//                 var donutData = {
//                     labels: ['SIN DATOS'],
//                     datasets: [
//                         {
//                             label: '# de Atenciones',
//                             data: [0],
//                             backgroundColor: colores,
//                             borderColor: colores
//                         }
//                     ]
//                 }
//                 var donutOptions = {
//                     maintainAspectRatio: false,
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             position: 'bottom',
//                         },
//                         title: {
//                             display: true,
//                             text: 'Atenciones realizadas x IAFA'
//                         }
//                     },
//                     scales: {
//                         xAxes: [{
//                             ticks: {
//                                 fontColor: colores
//                             },
//                             gridLines: {
//                                 display: false,
//                                 color: '#000',
//                                 drawBorder: false
//                             }
//                         }],
//                         yAxes: [{
//                             ticks: {
//                                 stepSize: 100,
//                                 fontColor: '#000'
//                             },
//                             gridLines: {
//                                 display: true,
//                                 color: '#AFAFAF',
//                                 drawBorder: false
//                             }
//                         }]
//                     },
//                 }
//                 new Chart(ctx, {
//                     type: 'pie',
//                     data: donutData,
//                     options: donutOptions
//                 });

//             }
//         },
//     });

// }
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

$("#dshEspecialidad").on("change", function () {
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
