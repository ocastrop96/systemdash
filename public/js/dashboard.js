// Chart.register(ChartDataLabels);
// Chart.defaults.set('plugins.datalabels', {
//     color: '#000000'
// });
// // parametrosMeses()
// CargarAtencionesxMes($("#rango-dsh").attr("inicio"), $("#rango-dsh").attr("fin"), 0, 0, '');
// $("#anioDash").datepicker({
//     'format': "yyyy",
//     'viewMode': "years",
//     'minViewMode': "years",
//     'autoclose': true,
//     'orientation': 'auto bottom',
//     'language': 'es',
//     'endDate': new Date()
// });
// $("#deshacer-filtro-DashQX").on("click", function () {
//     window.location = "dashboard";
// });
// $("input[name='rango-dsh']").daterangepicker({
//     opens: 'left',
//     startDate: moment(),
//     endDate: moment(),
//     maxDate: moment(),
//     locale: {
//         format: "DD/MM/YYYY",
//         separator: " hasta ",
//         applyLabel: "Aplicar",
//         cancelLabel: "Cancelar",
//         fromLabel: "Desde",
//         toLabel: "Hasta",
//         customRangeLabel: "Personalizar",
//         weekLabel: "W",
//         daysOfWeek: ["Do", "Lu", "Ma", "Mie", "Ju", "Vi", "Sa"],
//         monthNames: [
//             "Enero",
//             "Febrero",
//             "Marzo",
//             "Abril",
//             "Mayo",
//             "Junio",
//             "Julio",
//             "Agosto",
//             "Setiembre",
//             "Octubre",
//             "Noviembre",
//             "Diciembre",
//         ],
//         firstDay: 1,
//     },
// }, function (start, end) {
//     let inicio = start.format('YYYY-MM-DD');
//     let fin = end.format('YYYY-MM-DD');
//     let especialidad = $("#dshEspecialidad").val();
//     let iafa = $("#dshIAFA").val();
//     let ndoc = $("#pacienteQX").val();


//     CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
//     // $('#rango-rj').attr('inicio', inicio);
//     // $('#rango-rj').attr('fin', fin);
//     // $(".rseg1").attr("href", "public/views/docs/rp-seguimientos-jefatura.php?reporte=reporte&inicio=" + inicio + "&fin=" + fin + "&profesional=" + profesional);
//     // seguimientosXProfesional(inicio, fin, profesional);
//     // seguimientosxTipo(inicio, fin, profesional);
//     // seguimientosxDiagPac(inicio, fin, profesional);
//     // seguimientosxDiagFam(inicio, fin, profesional);
// });
// $("#dshEspecialidad").on("change", function () {
//     let inicio = $("#rango-dsh").attr("inicio");
//     let fin = $("#rango-dsh").attr("fin");
//     let especialidad = $(this).val();
//     let iafa = $("#dshIAFA").val();
//     let ndoc = $("#pacienteQX").val();
//     CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
// });

// $("#dshIAFA").on("change", function () {
//     let inicio = $("#rango-dsh").attr("inicio");
//     let fin = $("#rango-dsh").attr("fin");
//     let especialidad = $("#dshEspecialidad").val();
//     let iafa = $(this).val();
//     let ndoc = $("#pacienteQX").val();
//     CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
// });

// $("#pacienteQX").on("change", function () {
//     let inicio = $("#rango-dsh").attr("inicio");
//     let fin = $("#rango-dsh").attr("fin");
//     let especialidad = $("#dshEspecialidad").val();
//     let iafa = $("#dshIAFA").val();
//     let ndoc = $(this).val();
//     CargarAtencionesxMes(inicio, fin, especialidad, iafa, ndoc);
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
// $("#pacienteQX").select2(
//     {
//         maximumInputLength: "12",
//         minimumInputLength: "8",
//         language: {

//             noResults: function () {

//                 return "No hay resultado";
//             },
//             searching: function () {

//                 return "Buscando Paciente ...";
//             },
//             inputTooShort: function () {
//                 return "Ingrese 8 o más caracteres";
//             },
//             inputTooLong: function () {
//                 return "Ingrese máximo 12 caracteres";
//             }
//         },
//         scrollAfterSelect: true,
//         placeholder: 'Ingrese DNI del Paciente',
//         ajax: {
//             url: "public/views/src/ajaxGraficos.php",
//             type: "post",
//             dataType: "json",
//             delay: 200,
//             data: function (params) {
//                 return {
//                     searchTerm: params.term,
//                 };
//             },
//             processResults: function (response) {
//                 return {
//                     results: response,
//                 };
//             },
//             cache: true,
//         },
//     }
// );


// function generarNumero(numero) {
//     return (Math.random() * numero).toFixed(0);
// }

// function colorRGB() {
//     var coolor = "(" + generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255) + ")";
//     return "rgb" + coolor;
// }
