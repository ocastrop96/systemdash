$("#deshacer-filtro-DashQX3").on("click", function () {
    window.location = "reporte-tipo-medicamento";
});
ValidaTrimestre2();
VerTop10MedicamentosMasVendidos($("#rango-dsh3").attr("inicio3"), $("#rango-dsh3").attr("fin3"));
VerTop10MedicamentosMas();
VerTop10MedicamentosMasQX();
VerTop10MedicamentosMenos();
VerTop10MedicamentosMenosQX();
$("#dshTipAnio3").datepicker({
    'format': "yyyy",
    'viewMode': "years",
    'minViewMode': "years",
    'autoclose': true,
    'orientation': 'auto bottom',
    'language': 'es',
    'endDate': new Date(),
});
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
    $("#rango-dsh3").attr("inicio3", inicio3);
    $("#rango-dsh3").attr("fin3", fin3);
    $("#trimestre_añoPV").html(formatoFecha2(inicio3, fin3));
    VerTop10MedicamentosMasVendidos(inicio3, fin3);
    limpiarTabla3("tabDetalleMedica1", "cuerpoTabMedica1", "totalTabMesMedica1", "totalTabMesMedica1Porcen");

});

$("#dshTipTrimestre3").on("change", function () {
    var seleccion = $(this).val();
    let anio = $("#dshTipAnio3").val();
    if (seleccion == 1) {
        $("#trimestre_añoPV").html('1ER TRIMESTRE' + ' - ' + anio);
        dInicio = anio + "-01-01";
        dFin = anio + "-03-31";
        $("#rango-dsh3").attr("inicio3", dInicio);
        $("#rango-dsh3").attr("fin3", dFin);
    }
    else if (seleccion == 2) {
        $("#trimestre_añoPV").html('2DO TRIMESTRE' + ' - ' + anio);
        dInicio = anio + "-04-01";
        dFin = anio + "-06-30";
        $("#rango-dsh3").attr("inicio3", dInicio);
        $("#rango-dsh3").attr("fin3", dFin);
    }
    else if (seleccion == 3) {
        $("#trimestre_añoPV").html('3ER TRIMESTRE' + ' - ' + anio);
        dInicio = anio + "-07-01";
        dFin = anio + "-09-30";
        $("#rango-dsh3").attr("inicio3", dInicio);
        $("#rango-dsh3").attr("fin3", dFin);
    }
    else if (seleccion == 4) {
        $("#trimestre_añoPV").html('4TO TRIMESTRE' + ' - ' + anio);
        dInicio = anio + "-10-01";
        dFin = anio + "-12-31";
        $("#rango-dsh3").attr("inicio3", dInicio);
        $("#rango-dsh3").attr("fin3", dFin);
    }
    limpiarTabla3("tabDetalleMedica1", "cuerpoTabMedica1", "totalTabMesMedica1", "totalTabMesMedica1Porcen");
    VerTop10MedicamentosMasVendidos(dInicio, dFin);
});

$("#dshTipAnio3").on("change", function () {
    var seleccion = $("#dshTipTrimestre3").val();
    let anio = $("#dshTipAnio3").val();
    if (seleccion == 1) {
        $("#trimestre_añoPV").html('1ER TRIMESTRE' + ' - ' + anio);
        dInicio = anio + "-01-01";
        dFin = anio + "-03-31";
        $("#rango-dsh3").attr("inicio3", dInicio);
        $("#rango-dsh3").attr("fin3", dFin);
    }
    else if (seleccion == 2) {
        $("#trimestre_añoPV").html('2DO TRIMESTRE' + ' - ' + anio);
        dInicio = anio + "-04-01";
        dFin = anio + "-06-30";
        $("#rango-dsh3").attr("inicio3", dInicio);
        $("#rango-dsh3").attr("fin3", dFin);
    }
    else if (seleccion == 3) {
        $("#trimestre_añoPV").html('3ER TRIMESTRE' + ' - ' + anio);
        dInicio = anio + "-07-01";
        dFin = anio + "-09-30";
        $("#rango-dsh3").attr("inicio3", dInicio);
        $("#rango-dsh3").attr("fin3", dFin);
    }
    else if (seleccion == 4) {
        $("#trimestre_añoPV").html('4TO TRIMESTRE' + ' - ' + anio);
        dInicio = anio + "-10-01";
        dFin = anio + "-12-31";
        $("#rango-dsh3").attr("inicio3", dInicio);
        $("#rango-dsh3").attr("fin3", dFin);
    }
    limpiarTabla3("tabDetalleMedica1", "cuerpoTabMedica1", "totalTabMesMedica1", "totalTabMesMedica1Porcen");
    VerTop10MedicamentosMasVendidos(dInicio, dFin);
});

function VerTop10MedicamentosMasVendidos(dInicioPV, dFinPV) {
    var dashDV1 = 1;
    var datos = new FormData();

    datos.append("dashMV1", dashDV1);
    datos.append("dInicioPV", dInicioPV);
    datos.append("dFinPV", dFinPV);
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

                var suma = 0;

                for (var j = 0; j < respuesta.length; j++) {
                    suma += Number(respuesta[j][1]);
                }


                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][1]);
                    medicamento.push(respuesta[i][0]);
                    colores.push(colorRGB());

                    let numeroSet = Number(respuesta[i][1]).toLocaleString('en-US');
                    $("#cuerpoTabMedica1").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][0] + '</td>' +
                        '<td>' + numeroSet + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][1]) / suma * 100).toFixed(2) + ' %</td>' +
                        '</tr>'
                    );
                }

                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTabMesMedica1").html(totalValueAcum.toLocaleString('en-US'));
                $("#totalTabMesMedica1Porcen").html(percentageValue + "%");

                $("canvas#graphDashMV1").remove();
                $("div.rmv1").append('<canvas id="graphDashMV1" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashMV1").getContext("2d");
                var donutData = {
                    labels: medicamento,
                    datasets: [
                        {
                            label: '# Ventas',
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
                            text: 'Top 10 Medicamentos más vendidos'
                        },
                        datalabels: {
                            formatter: (value, context) => {
                                const valoracion = Number(value).toLocaleString('en-US');
                                return valoracion;
                            },
                            color: '#fff',
                            font: {
                                weight: 'bold',
                                size: 12,
                            }
                        }
                    }
                }
                new Chart(ctx2, {
                    type: 'pie',
                    plugins: [ChartDataLabels],
                    data: donutData,
                    options: donutOptions
                });
            }
            else {
                $("canvas#graphDashMV1").remove();
                $("div.rmv1").append('<canvas id="graphDashMV1" width="400" height="400"></canvas>');
                var ctx2 = document.getElementById("graphDashMV1").getContext("2d");
                var donutData = {
                    labels: ['SIN DATOS'],
                    datasets: [
                        {
                            label: '# Ventas',
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
                            text: 'Top 10 Medicamentos más vendidos'
                        }
                    },
                }
                new Chart(ctx2, {
                    type: 'pie',
                    data: donutData,
                    options: donutOptions
                });
            }
        },
    });

}
function VerTop10MedicamentosMas() {
    var dashD1 = 1;
    var datos = new FormData();
    limpiarTabla3("tabDetalleMedica2", "cuerpoTabMedica2", "totalTabMesMedica2", "totalTabMesMedica2Porcen");

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

                var suma = 0;

                for (var j = 0; j < respuesta.length; j++) {
                    suma += Number(respuesta[j][1]);
                }

                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][1]);
                    medicamento.push(respuesta[i][0]);
                    colores.push(colorRGB());

                    let numeroSet = Number(respuesta[i][1]).toLocaleString('en-US');
                    $("#cuerpoTabMedica2").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][0] + '</td>' +
                        '<td>' + numeroSet + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][1]) / suma * 100).toFixed(2) + ' %</td>' +
                        '</tr>'
                    );
                }
                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTabMesMedica2").html(totalValueAcum.toLocaleString('en-US'));
                $("#totalTabMesMedica2Porcen").html(percentageValue + "%");


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
                        },
                        datalabels: {
                            formatter: (value, context) => {
                                const valoracion = Number(value).toLocaleString('en-US');
                                return valoracion;
                            },
                            color: '#fff',
                            font: {
                                weight: 'bold',
                                size: 12,
                            }
                        }
                    }
                }
                new Chart(ctx2, {
                    type: 'doughnut',
                    plugins: [ChartDataLabels],
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
    limpiarTabla3("tabDetalleMedica3", "cuerpoTabMedica3", "totalTabMesMedica3", "totalTabMesMedica3Porcen");

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

                var suma = 0;

                for (var j = 0; j < respuesta.length; j++) {
                    suma += Number(respuesta[j][1]);
                }


                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][1]);
                    medicamento.push(respuesta[i][0]);
                    colores.push(colorRGB());

                    let numeroSet = Number(respuesta[i][1]).toLocaleString('en-US');
                    $("#cuerpoTabMedica3").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][0] + '</td>' +
                        '<td>' + numeroSet + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][1]) / suma * 100).toFixed(2) + ' %</td>' +
                        '</tr>'
                    );
                }

                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTabMesMedica3").html(totalValueAcum.toLocaleString('en-US'));
                $("#totalTabMesMedica3Porcen").html(percentageValue + "%");

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
                        },
                        datalabels: {
                            formatter: (value, context) => {
                                const valoracion = Number(value).toLocaleString('en-US');
                                return valoracion;
                            },
                            color: '#fff',
                            font: {
                                weight: 'bold',
                                size: 12,
                            }
                        }
                    }
                }
                new Chart(ctx2, {
                    type: 'doughnut',
                    plugins: [ChartDataLabels],
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
    limpiarTabla3("tabDetalleMedica4", "cuerpoTabMedica4", "totalTabMesMedica4", "totalTabMesMedica4Porcen");

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

                var suma = 0;

                for (var j = 0; j < respuesta.length; j++) {
                    suma += Number(respuesta[j][1]);
                }

                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][1]);
                    medicamento.push(respuesta[i][0]);
                    colores.push(colorRGB());

                    let numeroSet = Number(respuesta[i][1]).toLocaleString('en-US');
                    $("#cuerpoTabMedica4").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][0] + '</td>' +
                        '<td>' + numeroSet + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][1]) / suma * 100).toFixed(2) + ' %</td>' +
                        '</tr>'
                    );
                }

                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTabMesMedica4").html(totalValueAcum.toLocaleString('en-US'));
                $("#totalTabMesMedica4Porcen").html(percentageValue + "%");

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
                        },
                        datalabels: {
                            formatter: (value, context) => {
                                const valoracion = Number(value).toLocaleString('en-US');
                                return valoracion;
                            },
                            color: '#fff',
                            font: {
                                weight: 'bold',
                                size: 12,
                            }
                        }
                    }
                }
                new Chart(ctx2, {
                    type: 'doughnut',
                    plugins: [ChartDataLabels],
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
    limpiarTabla3("tabDetalleMedica5", "cuerpoTabMedica5", "totalTabMesMedica5", "totalTabMesMedica5Porcen");

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

                var suma = 0;

                for (var j = 0; j < respuesta.length; j++) {
                    suma += Number(respuesta[j][1]);
                }


                for (var i = 0; i < respuesta.length; i++) {
                    contador.push(respuesta[i][1]);
                    medicamento.push(respuesta[i][0]);
                    colores.push(colorRGB());

                    let numeroSet = Number(respuesta[i][1]).toLocaleString('en-US');
                    $("#cuerpoTabMedica5").append(
                        ' <tr>' +
                        '<td>' + respuesta[i][0] + '</td>' +
                        '<td>' + numeroSet + '</td>' +
                        '<td class="font-weight-bold">' + (Number(respuesta[i][1]) / suma * 100).toFixed(2) + ' %</td>' +
                        '</tr>'
                    );
                }

                const contadoresAcum = contador;
                function totalSum(total, datapoint) {
                    return Number(total) + Number(datapoint);
                }
                const totalValueAcum = contadoresAcum.reduce(totalSum, 0);

                const percentageValue = (totalValueAcum / totalValueAcum * 100).toFixed(1);
                $("#totalTabMesMedica5").html(totalValueAcum.toLocaleString('en-US'));
                $("#totalTabMesMedica5Porcen").html(percentageValue + "%");

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
                        },
                        datalabels: {
                            formatter: (value, context) => {
                                const valoracion = Number(value).toLocaleString('en-US');
                                return valoracion;
                            },
                            color: '#fff',
                            font: {
                                weight: 'bold',
                                size: 12,
                            }
                        }
                    }
                }
                new Chart(ctx2, {
                    type: 'doughnut',
                    plugins: [ChartDataLabels],
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

function ValidaTrimestre2() {
    let dateActual2 = new Date();
    let anioActual2 = dateActual2.getFullYear();
    let mesActual2 = dateActual2.getMonth();
    if (mesActual2 >= 1 && mesActual2 <= 3) {
        $("#trimestre_añoPV").html('1ER TRIMESTRE' + ' - ' + anioActual2);

    }
    else if (mesActual2 >= 4 && mesActual2 <= 6) {
        $("#trimestre_añoPV").html('2DO TRIMESTRE' + ' - ' + anioActual2);

    }
    else if (mesActual2 >= 7 && mesActual2 <= 9) {
        $("#trimestre_añoPV").html('3ER TRIMESTRE' + ' - ' + anioActual2);

    }
    else if (mesActual2 >= 10 && mesActual2 <= 12) {
        $("#trimestre_añoPV").html('4TO TRIMESTRE' + ' - ' + anioActual2);

    }
}

function formatoFecha2(input1, input2) {
    var datePart = input1.match(/\d+/g),
        year = datePart[0].substring(0, 4), // get only two digits
        month = datePart[1], day = datePart[2];

    var datePart2 = input2.match(/\d+/g),
        year2 = datePart2[0].substring(0, 4), // get only two digits
        month2 = datePart2[1], day2 = datePart2[2];

    return day + '/' + month + '/' + year + ' hasta ' + day2 + '/' + month2 + '/' + year2;
}

function limpiarTabla3(idTabla, idTbodyTable, idTotal, idTotalPorcentaje) {
    $("table#" + idTabla + ".table.table-striped.table-valign-middle tbody#" + idTbodyTable + " tr").remove();
    $("#" + idTotal + "").html("");
    $("#" + idTotalPorcentaje + "").html("");

}

