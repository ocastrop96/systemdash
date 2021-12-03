<?php
require_once "MSdb.php";
class UsuariosModelo
{

    static public function mdlListarUsuarios($item, $valor)
    {
        if ($item != null) {
            $stmt = ConexionConsulta::conectar()->prepare("SELECT
            Empleados.DNI, 
            Empleados.Usuario, 
            Empleados.Nombres, 
            Empleados.ApellidoPaterno, 
            Empleados.ApellidoMaterno
        FROM
            dbo.Empleados
        WHERE $item = :$item");
            $stmt->bindParam(":" . $item, $valor, PDO::PARAM_STR);
            $stmt->execute();
            return $stmt->fetch();
        }
        //Cerramos la conexion por seguridad
        $stmt->close();
        $stmt = null;
    }

    static public function mdlLogueoUsuario($usuario, $dni)
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT
        Empleados.DNI,
	    Empleados.Usuario,
        Empleados.Nombres,
        Empleados.ApellidoPaterno,
        Empleados.ApellidoMaterno 
    FROM
        dbo.Empleados 
    WHERE
        Usuario = :usuario 
        AND DNI = :dni");
        $stmt->bindParam(":usuario", $usuario, PDO::PARAM_STR);
        $stmt->bindParam(":dni", $dni, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch();
        $stmt->close();
        $stmt = null;
    }
}
