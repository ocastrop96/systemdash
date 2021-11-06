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

    static public function ctrListarMesesDash($inicio, $fin, $especialidad, $iafa, $doc)
    {
        $rptListGrafMonth = ReportesModelo::mdlListarMeses($inicio, $fin, $especialidad, $iafa, $doc);
        return $rptListGrafMonth;
    }
}
