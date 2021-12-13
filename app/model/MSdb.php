<?php
class ConexionConsulta
{
    static public function conectar()
    {
        $link = new PDO(
            'sqlsrv:Server=192.168.32.123;Database=SIGH',
            'sa',
            'Heves.2016'
            // 'sqlsrv:Server=KILLASISA;Database=SIGH',
            // 'sa',
            // '123456'
        );
        // $link->exec("set names utf8");
        return $link;
    }
}
