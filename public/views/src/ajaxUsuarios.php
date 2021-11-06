<?php
require_once "../../../app/controller/UsuariosControlador.php";
require_once "../../../app/model/UsuariosModelo.php";

class ajaxUsuarios
{
    // Validar cuenta de login
    public $validarCuentaLog;
    public function ajaxCuentaLogin()
    {
        $item = "Usuario";
        $valor = $this->validarCuentaLog;
        $respuesta = UsuariosControlador::ctrListarUsuarios($item, $valor);

        echo json_encode($respuesta);
    }
    // Validar cuenta de login 

    // Listar datos usuario  
    public $idUsuario;
    public function ajaxListarUsuario()
    {
        $item = "idUsuario";
        $valor = $this->idUsuario;
        $respuesta = UsuariosControlador::ctrListarUsuarios($item, $valor);
        echo json_encode($respuesta);
    }
}
// Validar Cuenta Login
if (isset($_POST["validarCuentaLog"])) {
    $validarcL = new ajaxUsuarios();
    $validarcL->validarCuentaLog = $_POST["validarCuentaLog"];
    $validarcL->ajaxCuentaLogin();
}
// Validar Cuenta Logi
// Listar usuarios
if (isset($_POST["idUsuario"])) {
    $list1 = new ajaxUsuarios();
    $list1->idUsuario = $_POST["idUsuario"];
    $list1->ajaxListarUsuario();
}
