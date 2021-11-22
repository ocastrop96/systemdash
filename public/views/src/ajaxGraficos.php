<?php
require_once "../../../app/controller/ReportesControlador.php";
require_once "../../../app/model/ReportesModelo.php";
require_once "../../../app/model/MSdb.php";

class AjaxGraficos
{
    public $dniPaciente;
    public function ajaxBuscarPaciente()
    {
        $dni = $this->dniPaciente;

        $stmt = ConexionConsulta::conectar()->prepare("SELECT Pacientes.NroDocumento,
        CONCAT(Pacientes.ApellidoPaterno,' ',Pacientes.ApellidoMaterno,' ',Pacientes.PrimerNombre,' ',Pacientes.SegundoNombre) as NPaciente FROM Pacientes WHERE NroDocumento = '$dni'");
        $stmt->execute();
        $data = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = array("id" => $row['NroDocumento'], "text" =>  $row['NroDocumento'] . ' - ' . $row['NPaciente']);
        }
        echo json_encode($data);
    }

    public $cie10Desc;
    public function ajaxBuscarDiagnostico()
    {
        $termino = $this->cie10Desc;

        $stmt = ConexionConsulta::conectar()->prepare("SELECT IdDiagnostico,CodigoCie10,Descripcion 
        FROM Diagnosticos 
        WHERE CodigoCIE10 = '$termino' OR Descripcion LIKE '$termino' + '%'");
        $stmt->execute();
        $data = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = array("id" => $row['IdDiagnostico'], "text" =>  $row['CodigoCie10'] . ' - ' . $row['Descripcion']);
        }
        echo json_encode($data);
    }

    public $fIni;
    public $fFin;
    public $espec;
    public $iafa;
    public $doc;
    public function graficoMeses()
    {
        $Inic = $this->fIni;
        $Fin = $this->fFin;
        $Espec = $this->espec;
        $FF = $this->iafa;
        $NDoc = $this->doc;

        $respuesta = ReportesControlador::ctrListarMesesDash($Inic, $Fin, $Espec, $FF, $NDoc);
        echo json_encode($respuesta);
    }

    public $fIni2;
    public $fFin2;
    public $espec2;
    public $iafa2;
    public $doc2;
    public function graficoEspecialidades()
    {
        $Inic = $this->fIni2;
        $Fin = $this->fFin2;
        $Espec = $this->espec2;
        $FF = $this->iafa2;
        $NDoc = $this->doc2;

        $respuesta = ReportesControlador::ctrListarEspecialidadesDash($Inic, $Fin, $Espec, $FF, $NDoc);
        echo json_encode($respuesta);
    }

    public $fIni3;
    public $fFin3;
    public $espec3;
    public $iafa3;
    public $doc3;
    public function graficoIAFAS()
    {
        $Inic = $this->fIni3;
        $Fin = $this->fFin3;
        $Espec = $this->espec3;
        $FF = $this->iafa3;
        $NDoc = $this->doc3;

        $respuesta = ReportesControlador::ctrListarIAFASDash($Inic, $Fin, $Espec, $FF, $NDoc);
        echo json_encode($respuesta);
    }

    public $tipo;
    public function ajaxListarEspecialxTipo()
    {
        $tipoServ = $this->tipo;
        $datosDiag = ReportesControlador::ctrListarEspecialidadesxTipo($tipoServ);
        $totalDiag = count($datosDiag);

        if ($totalDiag > 0) {
            $html = "<option value='0'>Seleccione Especialidad </option>";
            foreach ($datosDiag as $key => $value) {
                $html .= "<option value='$value[IdEspecialidad]'>$value[Nombre]</option>";
            }
        } else {
            $html = "<option value='0'>No hay especialiades existentes</option>";
        }

        echo $html;
    }

    public $tipoE;
    public function ajaxListarServicioxEsp()
    {
        $tipoEsp = $this->tipoE;
        $datosDiag = ReportesControlador::ctrListarServicioxEspec($tipoEsp);
        $totalDiag = count($datosDiag);

        if ($totalDiag > 0) {
            $html = "<option value='0'>Seleccione Servicio </option>";
            foreach ($datosDiag as $key => $value) {
                $html .= "<option value='$value[IdServicio]'>$value[Nombre]</option>";
            }
        } else {
            $html = "<option value='0'>No hay servicios existentes</option>";
        }

        echo $html;
    }

    public $datosMed;
    public function ajaxBuscarMedico()
    {
        $termino = $this->datosMed;

        $stmt = ConexionConsulta::conectar()->prepare("SELECT
        Medicos.IdMedico,
        UPPER(Empleados.ApellidoPaterno+' '+Empleados.ApellidoMaterno+' '+Empleados.Nombres) AS medicoDato
        FROM
        dbo.Medicos
        INNER JOIN
        dbo.Empleados
        ON 
            Medicos.IdEmpleado = Empleados.IdEmpleado
            WHERE Empleados.ApellidoPaterno LIKE '$termino'+'%' OR Empleados.ApellidoMaterno LIKE '$termino'+'%'
        ORDER BY Empleados.ApellidoPaterno ASC");
        $stmt->execute();
        $data = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = array("id" => $row['IdMedico'], "text" =>  $row['medicoDato']);
        }
        echo json_encode($data);
    }

    public $datosInsumo;
    public function ajaxBuscarInsumo()
    {
        $termino = $this->datosInsumo;

        $stmt = ConexionConsulta::conectar()->prepare("SELECT
        FactCatalogoBienesInsumos.IdProducto, 
        FactCatalogoBienesInsumos.Nombre
    FROM
        dbo.FactCatalogoBienesInsumos
        WHERE FactCatalogoBienesInsumos.Nombre LIKE '$termino'+'%'
        ORDER BY 1 OFFSET 0 ROWS
        FETCH NEXT 50 ROWS ONLY");
        $stmt->execute();
        $data = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = array("id" => $row['IdProducto'], "text" =>  $row['Nombre']);
        }
        echo json_encode($data);
    }
    public $dInicio;
    public $dFin;
    public $dDiagnostico;
    public $dTipoIngreso;
    public $dEspecialidad;
    public $dServicio;
    public $dMedico;

    public function ajaxListarFrecuenciaDxPorMeses()
    {
        $inicio = $this->dInicio;
        $fin = $this->dFin;
        $diagnostico = $this->dDiagnostico;
        $tipoIngreso = $this->dTipoIngreso;
        $especialidad = $this->dEspecialidad;
        $servicio = $this->dServicio;
        $medico = $this->dMedico;
        $respuesta = ReportesControlador::ctrListarDiagnosticoxMeses($inicio, $fin, $diagnostico, $tipoIngreso, $especialidad, $servicio, $medico);
        echo json_encode($respuesta);
    }

    public $dInicio2;
    public $dFin2;
    public $dDiagnostico2;
    public $dTipoIngreso2;
    public $dEspecialidad2;
    public $dServicio2;
    public $dMedico2;

    public function ajaxListarDxPorEspecialidades()
    {
        $inicio = $this->dInicio2;
        $fin = $this->dFin2;
        $diagnostico = $this->dDiagnostico2;
        $tipoIngreso = $this->dTipoIngreso2;
        $especialidad = $this->dEspecialidad2;
        $servicio = $this->dServicio2;
        $medico = $this->dMedico2;
        $respuesta = ReportesControlador::ctrListarDiagnosticoxEspecialidad($inicio, $fin, $diagnostico, $tipoIngreso, $especialidad, $servicio, $medico);
        echo json_encode($respuesta);
    }

    public $dInicio3;
    public $dFin3;

    public function ajaxListarDxTop10()
    {
        $inicio = $this->dInicio3;
        $fin = $this->dFin3;
        $respuesta = ReportesControlador::ctrListarDiagnosticosTop10($inicio, $fin);
        echo json_encode($respuesta);
    }


    public function ajaxListarTop10MedicamentosMas()
    {
        $respuesta = ReportesControlador::ctrListarMedicamentosTop10Mas();
        echo json_encode($respuesta);
    }

    public function ajaxListarTop10MedicamentosMasQX()
    {
        $respuesta = ReportesControlador::ctrListarMedicamentosTop10MasQX();
        echo json_encode($respuesta);
    }

    public function ajaxListarTop10MedicamentosMenos()
    {
        $respuesta = ReportesControlador::ctrListarMedicamentosTop10Menos();
        echo json_encode($respuesta);
    }

    public function ajaxListarTop10MedicamentosMenosQX()
    {
        $respuesta = ReportesControlador::ctrListarMedicamentosTop10MenosQX();
        echo json_encode($respuesta);
    }

    public $opcion;

    public function ajaxListarContadoresWidget()
    {
        $op = $this->opcion;
        $respuesta = ReportesControlador::ctrListarContadoresWidget($op);
        echo json_encode($respuesta);
    }


    public function ajaxListarTop10MedicamentosMasVendidos()
    {
        $respuesta = ReportesControlador::ctrListarMedicamentosTop10MasVendidos();
        echo json_encode($respuesta);
    }
    
}
if (isset($_POST["searchTerm"])) {
    $list1 = new AjaxGraficos();
    $list1->dniPaciente = $_POST["searchTerm"];
    $list1->ajaxBuscarPaciente();
}
if (isset($_POST["dash1"])) {
    $list2 = new AjaxGraficos();
    $list2->fIni = $_POST["inicio"];
    $list2->fFin = $_POST["fin"];
    $list2->espec = $_POST["especialidad"];
    $list2->iafa = $_POST["iafa"];
    $list2->doc = $_POST["doc"];
    $list2->graficoMeses();
}

if (isset($_POST["dash2"])) {
    $list3 = new AjaxGraficos();
    $list3->fIni2 = $_POST["inicio2"];
    $list3->fFin2 = $_POST["fin2"];
    $list3->espec2 = $_POST["especialidad2"];
    $list3->iafa2 = $_POST["iafa2"];
    $list3->doc2 = $_POST["doc2"];
    $list3->graficoEspecialidades();
}

if (isset($_POST["dash3"])) {
    $list4 = new AjaxGraficos();
    $list4->fIni3 = $_POST["inicio3"];
    $list4->fFin3 = $_POST["fin3"];
    $list4->espec3 = $_POST["especialidad3"];
    $list4->iafa3 = $_POST["iafa3"];
    $list4->doc3 = $_POST["doc3"];
    $list4->graficoIAFAS();
}
if (isset($_POST["searchTerm2"])) {
    $list5 = new AjaxGraficos();
    $list5->cie10Desc = $_POST["searchTerm2"];
    $list5->ajaxBuscarDiagnostico();
}
if (isset($_POST["tipo"])) {
    $list6 = new AjaxGraficos();
    $list6->tipo = $_POST["tipo"];
    $list6->ajaxListarEspecialxTipo();
}
if (isset($_POST["tipoE"])) {
    $list7 = new AjaxGraficos();
    $list7->tipoE = $_POST["tipoE"];
    $list7->ajaxListarServicioxEsp();
}
if (isset($_POST["searchTerm3"])) {
    $list8 = new AjaxGraficos();
    $list8->datosMed = $_POST["searchTerm3"];
    $list8->ajaxBuscarMedico();
}


if (isset($_POST["searchTerm4"])) {
    $list11 = new AjaxGraficos();
    $list11->datosInsumo = $_POST["searchTerm4"];
    $list11->ajaxBuscarInsumo();
}

if (isset($_POST["dashD1"])) {
    $listDxMes = new AjaxGraficos();
    $listDxMes->dInicio = $_POST["dInicio"];
    $listDxMes->dFin = $_POST["dFin"];
    $listDxMes->dDiagnostico = $_POST["dDiagnostico"];
    $listDxMes->dTipoIngreso = $_POST["dTipoIngreso"];
    $listDxMes->dEspecialidad = $_POST["dEspecialidad"];
    $listDxMes->dServicio = $_POST["dServicio"];
    $listDxMes->dMedico = $_POST["dMedico"];
    $listDxMes->ajaxListarFrecuenciaDxPorMeses();
}

if (isset($_POST["dashD2"])) {
    $listDxEsp = new AjaxGraficos();
    $listDxEsp->dInicio2 = $_POST["dInicio2"];
    $listDxEsp->dFin2 = $_POST["dFin2"];
    $listDxEsp->dDiagnostico2 = $_POST["dDiagnostico2"];
    $listDxEsp->dTipoIngreso2 = $_POST["dTipoIngreso2"];
    $listDxEsp->dEspecialidad2 = $_POST["dEspecialidad2"];
    $listDxEsp->dServicio2 = $_POST["dServicio2"];
    $listDxEsp->dMedico2 = $_POST["dMedico2"];
    $listDxEsp->ajaxListarDxPorEspecialidades();
}

if (isset($_POST["dashD3"])) {
    $listDxTop10 = new AjaxGraficos();
    $listDxTop10->dInicio3 = $_POST["dInicio3"];
    $listDxTop10->dFin3 = $_POST["dFin3"];
    $listDxTop10->ajaxListarDxTop10();
}

// Dashboard Medicamentos
if (isset($_POST["dashM1"])) {
    $listMed = new AjaxGraficos();
    $listMed->ajaxListarTop10MedicamentosMas();
}

if (isset($_POST["dashM2"])) {
    $listMed2 = new AjaxGraficos();
    $listMed2->ajaxListarTop10MedicamentosMasQX();
}

if (isset($_POST["dashM3"])) {
    $listMed3 = new AjaxGraficos();
    $listMed3->ajaxListarTop10MedicamentosMenos();
}

if (isset($_POST["dashM4"])) {
    $listMed4 = new AjaxGraficos();
    $listMed4->ajaxListarTop10MedicamentosMenosQX();
}

if (isset($_POST["opcion"])) {
    $listCont = new AjaxGraficos();
    $listCont->opcion = $_POST["opcion"];
    $listCont->ajaxListarContadoresWidget();
}


if (isset($_POST["dashMV1"])) {
    $listMedMV = new AjaxGraficos();
    $listMedMV->ajaxListarTop10MedicamentosMasVendidos();
}
// Dashboard Medicamentos