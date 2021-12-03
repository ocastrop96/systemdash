<?php
class UsuariosControlador
{
    static public function ctrListarUsuarios($item, $valor)
    {
        $rptListU = UsuariosModelo::mdlListarUsuarios($item, $valor);
        return $rptListU;
    }

    static public function ctrLogueo()
    {
        if (isset($_POST["userQx"]) && isset($_POST["passQX"])) {
            if (
                preg_match('/^[a-z0-9A-ZñÑáéíóúÁÉÍÓÚ]+$/', $_POST["userQx"]) &&
                preg_match('/^[0-9]+$/', $_POST["passQX"])
            ) {

                $usuario = $_POST["userQx"];
                $dni = $_POST["passQX"];

                $logueoBD = UsuariosModelo::mdlLogueoUsuario($usuario, $dni);
                if ($logueoBD["Usuario"] == $usuario && $logueoBD["Usuario"] == $dni) {
                    $_SESSION["loginQXSystem"] = "ok";
                    $_SESSION["loginDNIC"] = $logueoBD["DNI"];
                    $_SESSION["loginUser"] = $logueoBD["Usuario"];
                    $_SESSION["loginNombresU"] = $logueoBD["Nombres"];
                    echo '<script>
                                Swal.fire({
                                    icon: "success",
                                    title: "Acceso concedido...¡Bienvenido(a)! <br>' . $_SESSION["loginNombresU"] . '",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                function redirect(){
                                    window.location = "dashboard";
                                }
                                setTimeout(redirect,1200);
                                 </script>';
                } else {
                    echo '<script>
                                Swal.fire({
                                    icon: "error",
                                    title: "Usuario y o contraseña incorrecto",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                function redirect(){
                                    window.location = "signin";
                                }
                                setTimeout(redirect,1200);
                                 </script>';
                }
            } else {
                echo '<script>
                                Swal.fire({
                                    icon: "error",
                                    title: "Ingrese sus datos correctamente",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                function redirect(){
                                    window.location = "dashboard";
                                }
                                setTimeout(redirect,1200);
                                 </script>';
            }
        }
    }
}
