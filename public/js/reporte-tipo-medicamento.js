$("#deshacer-filtro-DashQX3").on("click", function () {
    window.location = "reporte-tipo-medicamento";
});
VerTop10MedicamentosMas();
VerTop10MedicamentosMasQX();
VerTop10MedicamentosMenos();
VerTop10MedicamentosMenosQX();

$("#medicamentoQX").select2(
    {
        maximumInputLength: "10",
        minimumInputLength: "4",
        language: {

            noResults: function () {

                return "No hay resultado";
            },
            searching: function () {

                return "Buscando Insumo ...";
            },
            inputTooShort: function () {
                return "Ingrese 4 o más caracteres";
            },
            inputTooLong: function () {
                return "Ingrese máximo 10 caracteres";
            }
        },
        scrollAfterSelect: true,
        placeholder: 'Ingrese Nombre o Descripción del insumo',
        ajax: {
            url: "public/views/src/ajaxGraficos.php",
            type: "post",
            dataType: "json",
            delay: 200,
            data: function (params) {
                return {
                    searchTerm4: params.term,
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

$("input[name='rango-dsh3']").daterangepicker({
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
    let inicio3 = start.format('YYYY-MM-DD');
    let fin3 = end.format('YYYY-MM-DD');
    // let diagnostico = $("#diagnosticoQX").val();
    // let tipoIngreso = $("#dshTipIng").val();
    // let especialidad = $("#dshEspecialidad2").val();
    // let servicio = $("#dshServicio").val();
    // let medico = $("#medicoQX").val();

    // $("#rango-dsh2").attr("inicio2", inicio2);
    // $("#rango-dsh2").attr("fin2", fin2);
    // VerDiagnosticosxMeses(inicio2, fin2, diagnostico, tipoIngreso, especialidad, servicio, medico);
    // VerDiagnosticosxEspecialidad(inicio2, fin2, diagnostico, tipoIngreso, especialidad, servicio, medico)
    // VerDiagnosticosTop10(inicio2,fin2);
    // $("#trimestre_año").html("Personalizado");
});

function VerTop10MedicamentosMas() {
    var dashD1 = 1;
    var datos = new FormData();

    datos.append("dashM1", dashD1);

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
                var medicamento = [];
                var contador = [];
                var colores = [];
                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][1]);
                    medicamento.push(respuesta[i][0]);
                    colores.push(colorRGB());
                }
                $("canvas#graphDashM1").remove();
                $("div.rm1").append('<canvas id="graphDashM1" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashM1").getContext("2d");
                var donutData = {
                    labels: medicamento,
                    datasets: [
                        {
                            label: '# Insumo',
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
                            text: 'Top 10 Insumos con más stock'
                        }
                    }
                }
                new Chart(ctx2, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });
            }
            else {
                $("canvas#graphDashM1").remove();
                $("div.rm1").append('<canvas id="graphDashM1" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashM1").getContext("2d");
                var donutData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# Insumo',
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
                            text: 'Top 10 Insumos con más stock'
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
                new Chart(ctx2, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });
            }
        },
    });

}

function VerTop10MedicamentosMasQX() {
    var dashD1 = 1;
    var datos = new FormData();

    datos.append("dashM2", dashD1);

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
                var medicamento = [];
                var contador = [];
                var colores = [];
                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][1]);
                    medicamento.push(respuesta[i][0]);
                    colores.push(colorRGB());
                }
                $("canvas#graphDashM2").remove();
                $("div.rm2").append('<canvas id="graphDashM2" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashM2").getContext("2d");
                var donutData = {
                    labels: medicamento,
                    datasets: [
                        {
                            label: '# Insumo QX',
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
                            text: 'Top 10 Insumos Qx con más stock'
                        }
                    }
                }
                new Chart(ctx2, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });
            }
            else {
                $("canvas#graphDashM2").remove();
                $("div.rm2").append('<canvas id="graphDashM2" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashM2").getContext("2d");
                var donutData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# Insumo QX',
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
                            text: 'Top 10 Insumos QX con más stock'
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
                new Chart(ctx2, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });
            }
        },
    });

}

function VerTop10MedicamentosMenos() {
    var dashD1 = 1;
    var datos = new FormData();

    datos.append("dashM3", dashD1);

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
                var medicamento = [];
                var contador = [];
                var colores = [];
                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][1]);
                    medicamento.push(respuesta[i][0]);
                    colores.push(colorRGB());
                }
                $("canvas#graphDashM3").remove();
                $("div.rm3").append('<canvas id="graphDashM3" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashM3").getContext("2d");
                var donutData = {
                    labels: medicamento,
                    datasets: [
                        {
                            label: '# Insumo',
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
                            text: 'Top 10 Insumos con menos stock'
                        }
                    }
                }
                new Chart(ctx2, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });
            }
            else {
                $("canvas#graphDashM3").remove();
                $("div.rm3").append('<canvas id="graphDashM3" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashM3").getContext("2d");
                var donutData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# Insumo',
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
                            text: 'Top 10 Insumos con menos stock'
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
                new Chart(ctx2, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });
            }
        },
    });

}

function VerTop10MedicamentosMenosQX() {
    var dashD1 = 1;
    var datos = new FormData();

    datos.append("dashM4", dashD1);

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
                var medicamento = [];
                var contador = [];
                var colores = [];
                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][1]);
                    medicamento.push(respuesta[i][0]);
                    colores.push(colorRGB());
                }
                $("canvas#graphDashM4").remove();
                $("div.rm4").append('<canvas id="graphDashM4" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashM4").getContext("2d");
                var donutData = {
                    labels: medicamento,
                    datasets: [
                        {
                            label: '# Insumo QX',
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
                            text: 'Top 10 Insumos Qx con menos stock'
                        }
                    }
                }
                new Chart(ctx2, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });
            }
            else {
                $("canvas#graphDashM4").remove();
                $("div.rm4").append('<canvas id="graphDashM4" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashM4").getContext("2d");
                var donutData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# Insumo QX',
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
                            text: 'Top 10 Insumos QX con menos stock'
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
                new Chart(ctx2, {
                    type: 'doughnut',
                    data: donutData,
                    options: donutOptions
                });
            }
        },
    });

}