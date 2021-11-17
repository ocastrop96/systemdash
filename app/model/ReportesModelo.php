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

    static public function mdlListarTipoIngreso()
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT
        TiposServicio.IdTipoServicio, 
        TiposServicio.Descripcion
    FROM
        dbo.TiposServicio
    WHERE IdTipoServicio IN(1,2,3)");
        $stmt->execute();
        return $stmt->fetchAll();
        $stmt->close();
        $stmt = null;
    }

    static public function mdlListarEspecialidadesxTipo($tipo)
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT DISTINCT
        Especialidades.IdEspecialidad,
        UPPER(Especialidades.Nombre) as Nombre
    FROM
        Especialidades
        INNER JOIN Servicios ON Servicios.IdEspecialidad = Especialidades.IdEspecialidad 
    WHERE
        Servicios.IdTipoServicio = :tipo 
    ORDER BY
        Nombre");
        $stmt->bindParam(":tipo", $tipo, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
        $stmt->close();
        $stmt = null;
    }

    static public function mdlListarServicioxEspec($tipoE)
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT
        IdServicio,
        Nombre 
    FROM
        Servicios 
    WHERE
        IdEspecialidad = :tipo
    ORDER BY
        Nombre");
        $stmt->bindParam(":tipo", $tipoE, PDO::PARAM_INT);
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


    static public function mdlListarEspecialiadesD($inicio, $fin, $especialidad, $iafa, $doc)
    {
        $stmt = ConexionConsulta::conectar()->prepare("exec ReporteTipoConsulta_Graf_Especialidades @FechaIni = :FechaIni, @FechaFin = :FechaFin, @FF = :FF, @IdEspecialidad = :IdEspecialidad, @NroDocumento = :NroDocumento");
        $stmt->bindParam(":IdEspecialidad", $especialidad, PDO::PARAM_INT);
        $stmt->bindParam(":FF", $iafa, PDO::PARAM_INT);
        $stmt->bindParam(":FechaIni", $inicio, PDO::PARAM_STR);
        $stmt->bindParam(":FechaFin", $fin, PDO::PARAM_STR);
        $stmt->bindParam(":NroDocumento", $doc, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function mdlListarIAFASD($inicio, $fin, $especialidad, $iafa, $doc)
    {
        $stmt = ConexionConsulta::conectar()->prepare("exec ReporteTipoConsulta_Graf_IAFAS @FechaIni = :FechaIni, @FechaFin = :FechaFin, @FF = :FF, @IdEspecialidad = :IdEspecialidad, @NroDocumento = :NroDocumento");
        $stmt->bindParam(":IdEspecialidad", $especialidad, PDO::PARAM_INT);
        $stmt->bindParam(":FF", $iafa, PDO::PARAM_INT);
        $stmt->bindParam(":FechaIni", $inicio, PDO::PARAM_STR);
        $stmt->bindParam(":FechaFin", $fin, PDO::PARAM_STR);
        $stmt->bindParam(":NroDocumento", $doc, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function mdlListarDiagnosxMeses($inicio, $fin, $diagnostico, $tipoIngreso, $especialidad, $servicio, $medico)
    {
        $stmt = ConexionConsulta::conectar()->prepare("exec ReporteTipoDiagnostico_Meses @fechaini = :fechaini, @fechafin = :fechafin , @IdTipoSErvicio = :IdTipoSErvicio, @IdEspecialidad = :IdEspecialidad, @IdServicio = :IdServicio, @IdDiagnsotico = :IdDiagnsotico, @IdMedico = :IdMedico");

        $stmt->bindParam(":IdTipoSErvicio", $tipoIngreso, PDO::PARAM_INT);
        $stmt->bindParam(":IdEspecialidad", $especialidad, PDO::PARAM_INT);
        $stmt->bindParam(":IdServicio", $servicio, PDO::PARAM_INT);
        $stmt->bindParam(":IdDiagnsotico", $diagnostico, PDO::PARAM_INT);
        $stmt->bindParam(":IdMedico", $medico, PDO::PARAM_INT);
        $stmt->bindParam(":fechaini", $inicio, PDO::PARAM_STR);
        $stmt->bindParam(":fechafin", $fin, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function mdlListarDiagnosxEspecialidad($inicio, $fin, $diagnostico, $tipoIngreso, $especialidad, $servicio, $medico)
    {
        $stmt = ConexionConsulta::conectar()->prepare("exec ReporteTipoDiagnostico_Especialidades @fechaini = :fechaini, @fechafin = :fechafin , @IdTipoSErvicio = :IdTipoSErvicio, @IdEspecialidad = :IdEspecialidad, @IdServicio = :IdServicio, @IdDiagnsotico = :IdDiagnsotico, @IdMedico = :IdMedico");

        $stmt->bindParam(":IdTipoSErvicio", $tipoIngreso, PDO::PARAM_INT);
        $stmt->bindParam(":IdEspecialidad", $especialidad, PDO::PARAM_INT);
        $stmt->bindParam(":IdServicio", $servicio, PDO::PARAM_INT);
        $stmt->bindParam(":IdDiagnsotico", $diagnostico, PDO::PARAM_INT);
        $stmt->bindParam(":IdMedico", $medico, PDO::PARAM_INT);
        $stmt->bindParam(":fechaini", $inicio, PDO::PARAM_STR);
        $stmt->bindParam(":fechafin", $fin, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function mdlListarDiagnosTop10($inicio, $fin)
    {
        $stmt = ConexionConsulta::conectar()->prepare("exec ReporteTipoDiagnostico_TopDiagnosticos @fechaini = :fechaini, @fechafin = :fechafin");
        $stmt->bindParam(":fechaini", $inicio, PDO::PARAM_STR);
        $stmt->bindParam(":fechafin", $fin, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function mdlListarMedicaTop10Mas()
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT TOP
        10 SUBSTRING(FC.Nombre, 0, 31) as convertido,
        CONVERT(INT,FS.cantidad) as existencia
        FROM
            farmSaldo FS
            INNER JOIN FactCatalogoBienesInsumos FC ON FS.idProducto= FC.IdProducto 
        WHERE
            fc.TipoProducto = 0
        ORDER BY
        2 DESC");
        $stmt->execute();
        return $stmt->fetchAll();
    }


    static public function mdlListarMedicaTop10Menos()
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT TOP
        10 SUBSTRING(FC.Nombre, 0, 31) as convertido,
        CONVERT(INT,FS.cantidad) as existencia
        FROM
            farmSaldo FS
            INNER JOIN FactCatalogoBienesInsumos FC ON FS.idProducto= FC.IdProducto 
        WHERE
            fc.TipoProducto = 0 AND FS.cantidad > 0
        ORDER BY
        2 ASC");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    static public function mdlListarMedicaTop10MasQX()
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT TOP
        10 SUBSTRING(FC.Nombre, 0, 31) as convertido,
        CONVERT(INT,FS.cantidad) as existencia
        FROM
            farmSaldo FS
            INNER JOIN FactCatalogoBienesInsumos FC ON FS.idProducto= FC.IdProducto 
        WHERE
            fc.TipoProducto != 0
        ORDER BY
        2 DESC");
        $stmt->execute();
        return $stmt->fetchAll();
    }

    static public function mdlListarMedicaTop10MenosQX()
    {
        $stmt = ConexionConsulta::conectar()->prepare("SELECT TOP
        10 SUBSTRING(FC.Nombre, 0, 31) as convertido,
        CONVERT(INT,FS.cantidad) as existencia
        FROM
            farmSaldo FS
            INNER JOIN FactCatalogoBienesInsumos FC ON FS.idProducto= FC.IdProducto 
        WHERE
            fc.TipoProducto != 0 AND FS.cantidad > 0
        ORDER BY
        2 ASC");
        $stmt->execute();
        return $stmt->fetchAll();
    }
}
