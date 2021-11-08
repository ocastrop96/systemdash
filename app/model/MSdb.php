<?php
class ConexionConsulta
{
    static public function conectar()
    {
        $link = new PDO(
            'sqlsrv:Server=172.16.0.21;Database=SIGH',
            'sa',
            '123456'
            // 'sqlsrv:Server=VISION;Database=SIGH',
            // 'sa',
            // 'Sistemas2021+-+'
        );
        // $link->exec("set names utf8");
        return $link;
    }
}
