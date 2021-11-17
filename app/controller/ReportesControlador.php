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

    static public function ctrListarDiagnosticoxMeses($inicio, $fin, $diagnostico,$tipoIngreso,$especialidad, $servicio, $medico)
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarDiagnosxMeses($inicio, $fin, $diagnostico,$tipoIngreso,$especialidad, $servicio, $medico);
        return $rptListGrafEspeci;
    }

    static public function ctrListarDiagnosticoxEspecialidad($inicio, $fin, $diagnostico,$tipoIngreso,$especialidad, $servicio, $medico)
    {
        $rptListGrafEspeci = ReportesModelo::mdlListarDiagnosxEspecialidad($inicio, $fin, $diagnostico,$tipoIngreso,$especialidad, $servicio, $medico);
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
}
