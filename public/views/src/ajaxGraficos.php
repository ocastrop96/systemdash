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
        UPPER(CONCAT(Empleados.ApellidoPaterno,' ',Empleados.ApellidoMaterno,' ',Empleados.Nombres)) AS medicoDato
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
