<?php
class ConexionConsulta
{
    static public function conectar()
    {
        $link = new PDO(
            'odbc: Driver={SQL Server};Server=172.16.0.21;Database=SIGH',
            'consulta',
            'consulta'
            // 'sqlsrv:Server=VISION;Database=SIGH',
            // 'sa',
            // 'Sistemas2021+-+'
        );
        $link->exec("set names utf8");
        return $link;
    }
}
