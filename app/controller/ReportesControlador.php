<?php
class ReportesControlador
{
    static public function ctrListarEspecialidades()
    {
        $rptListProf = ReportesModelo::mdlListarEspecialidades();
        return $rptListProf;
    }

    static public function ctrListarIAFAS()
    {
        $rptListProf = ReportesModelo::mdlListarIAFAS();
        return $rptListProf;
    }

    static public function ctrListarTipoIngreso()
    {
        $rptListProf = ReportesModelo::mdlListarTipoIngreso();
        return $rptListProf;
    }

    static public function ctrListarEspecialidadesxTipo($tipo)
    {
        $rptListProf = ReportesModelo::mdlListarEspecialidadesxTipo($tipo);
        return $rptListProf;
    }

    static public function ctrListarServicioxEspec($tipoE)
    {
        $rptListProf = ReportesModelo::mdlListarServicioxEspec($tipoE);
        return $rptListProf;
    }
    static public function ctrListarMesesDash($inicio, $fin, $especialidad, $iafa, $doc)
    {
        $rptListGrafMonth = ReportesModelo::mdlListarMeses($inicio, $fin, $especialidad, $iafa, $doc);
        return $rptListGrafMonth;
    }

    static public function ctrListarEspecialidadesDash($inicio, $fin, $especialidad, $iafa, $doc)
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarEspecialiadesD($inicio, $fin, $especialidad, $iafa, $doc);
        return $rptListGrafEspeci;
    }
    static public function ctrListarIAFASDash($inicio, $fin, $especialidad, $iafa, $doc)
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarIAFASD($inicio, $fin, $especialidad, $iafa, $doc);
        return $rptListGrafEspeci;
    }

    static public function ctrListarDiagnosticoxMeses($inicio, $fin, $diagnostico, $tipoIngreso, $especialidad, $servicio, $medico)
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarDiagnosxMeses($inicio, $fin, $diagnostico, $tipoIngreso, $especialidad, $servicio, $medico);
        return $rptListGrafEspeci;
    }

    static public function ctrListarDiagnosticoxEspecialidad($inicio, $fin, $diagnostico, $tipoIngreso, $especialidad, $servicio, $medico)
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarDiagnosxEspecialidad($inicio, $fin, $diagnostico, $tipoIngreso, $especialidad, $servicio, $medico);
        return $rptListGrafEspeci;
    }
    static public function ctrListarDiagnosticosTop10($inicio, $fin)
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarDiagnosTop10($inicio, $fin);
        return $rptListGrafEspeci;
    }

    static public function ctrListarMedicamentosTop10Mas()
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarMedicaTop10Mas();
        return $rptListGrafEspeci;
    }

    static public function ctrListarMedicamentosTop10MasQX()
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarMedicaTop10MasQX();
        return $rptListGrafEspeci;
    }

    static public function ctrListarMedicamentosTop10Menos()
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarMedicaTop10Menos();
        return $rptListGrafEspeci;
    }

    static public function ctrListarMedicamentosTop10MenosQX()
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarMedicaTop10MenosQX();
        return $rptListGrafEspeci;
    }

    static public function ctrListarMedicamentosTop10MasVendidos()
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarMedicaTop10MasVendidos();
        return $rptListGrafEspeci;
    }

    static public function ctrListarContadoresWidget($opcion)
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarContadoresWidget($opcion);
        return $rptListGrafEspeci;
    }
    static public function ctrReporteControlFarmacia()
    {
        if (isset($_GET["reporte"])) {

            $controlPer = ReportesModelo::mdlExcelFarmacia();
            $Name = 'REPORTE_STOCK_FARMACIA.xls';
            // Creación de archivo excel
            header('Expires: 0');
            header('Cache-control: private');
            header("Content-type: application/vnd.ms-excel"); // Archivo de Excel
            header("Cache-Control: cache, must-revalidate");
            header('Content-Description: File Transfer');
            header('Last-Modified: ' . date('D, d M Y H:i:s'));
            header("Pragma: public");
            header('Content-Disposition:; filename="' . $Name . '"');
            header("Content-Transfer-Encoding: binary");
            echo utf8_decode("<table border='0'> 
					<tr> 
					<td style='font-weight:bold; background-color:#ddd;'>N°</td>
                    <td style='font-weight:bold; background-color:#ddd;'>NOMBRE</td> 
                    <td style='font-weight:bold; background-color:#ddd;'>STOCK</td>  	
                    </tr>");
            foreach ($controlPer as $row => $item) {
                echo utf8_decode("<tr>
                <td style='padding:0.5em; border:1px solid #ccc;'>" . ($row + 1) . "</td>
                <td style='padding:0.5em; border:1px solid #ccc;'>" . $item["Nombre"] . "</td>
                <td style='padding:0.5em; border:1px solid #ccc;'>" . $item["stock"] . "</td>
                </tr>");
            }
            echo "</table>";
        }
    }
}
