$("#userQx").keyup(function () {
    this.value = (this.value + "").replace(/[^a-z0-9A-ZñÑáéíóúÁÉÍÓÚ]/g, "");
});

function ValidarLoginqx() {
    var usuarioLog = $("#userQx").val();
    var passwordLog = $("#passQX").val();

    if (usuarioLog.length == 0 || passwordLog.length == 0) {
        Swal.fire({
            icon: "warning",
            title: "Ingrese usuario y contraseña por favor",
            showConfirmButton: false,
            timer: 1500
        });
        return false
    }
}
$("#btnLoginQX").on("click", function () {
    ValidarLoginqx()
});
$("#userQx").change(function () {
    var cuenta = $(this).val();
    var datos = new FormData();

    datos.append("validarCuentaLog", cuenta);

    $.ajax({
        url: "public/views/src/ajaxUsuarios.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (respuesta) {
            if (respuesta) {
                $("#passQX").focus();
                $("#mensajeLogQX").addClass("d-none");
            } else {
                $("#userQx").val("");
                $("#userQx").focus();
                $("#mensajeLogQX").removeClass("d-none");
            }
        },
    });
});