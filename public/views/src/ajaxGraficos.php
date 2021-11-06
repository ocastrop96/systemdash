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
