<?php
class ConexionConsulta
{
    static public function conectar()
    {
        $link = new PDO(
            // 'sqlsrv:Server=KILLASISA;Database=SIGH',
            // 'sa',
            // '123456'
            'sqlsrv:Server=OPTIMUS;Database=SIGH',
            'sa',
            'Sistemas2021+-+'
        );
        // $link->exec("set names utf8");
        return $link;
    }
}
