<?php
require_once "MSdb.php";
class ReportesModelo
{
    static public function mdlListarEspecialidades()
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT
        Especialidades.IdEspecialidad, 
        LTRIM(UPPER(Especialidades.Nombre)) AS  Nombre
    FROM
        dbo.Especialidades WHERE estadoEspecialidad = 1
        ORDER BY Nombre");
        $stmt->execute();
        return $stmt->fetchAll();
        $stmt->close();
        $stmt = null;
    }

    static public function mdlListarIAFAS()
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT
        FuentesFinanciamiento.IdFuenteFinanciamiento, 
        UPPER(FuentesFinanciamiento.Descripcion) as Descripcion
    FROM
        dbo.FuentesFinanciamiento
        ORDER BY IdFuenteFinanciamiento");
        $stmt->execute();
        return $stmt->fetchAll();
        $stmt->close();
        $stmt = null;
    }

    static public function mdlListarMeses($inicio, $fin, $especialidad, $iafa, $doc)
    {
        $stmt = ConexionConsulta::conectar()->prepare("exec ReporteTipoConsulta_Graf_Meses @FechaIni = :FechaIni, @FechaFin = :FechaFin, @FF = :FF, @IdEspecialidad = :IdEspecialidad, @NroDocumento = :NroDocumento");
        $stmt->bindParam(":IdEspecialidad", $especialidad, PDO::PARAM_INT);
        $stmt->bindParam(":FF", $iafa, PDO::PARAM_INT);
        $stmt->bindParam(":FechaIni", $inicio, PDO::PARAM_STR);
        $stmt->bindParam(":FechaFin", $fin, PDO::PARAM_STR);
        $stmt->bindParam(":NroDocumento", $doc, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
