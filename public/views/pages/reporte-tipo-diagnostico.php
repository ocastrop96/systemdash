<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <h4><strong>Reporte:. Tipo Diagnóstico</strong></h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="dashboard">Ir a Inicio</a></li>
                        <li class="breadcrumb-item active">Reporte Tipo Diagnóstico</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <?php
        // $reporte = ReportesModelo::mdlListarDiagnosxMeses('2020-01-01','2020-08-31',50924,2,0,0,0);
        // var_dump($reporte);
        ?>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                        <div class="form-group">
                            <label>Seleccione Trimestre (Opc):</label>
                            <div class="input-group">
                                <select class="form-control dshTipTrimestre" name="dshTipTrimestre" id="dshTipTrimestre">
                                    <?php
                                    date_default_timezone_set('America/Lima');
                                    $mes2 = date("m");
                                    if ($mes2 >= 1 && $mes2 <= 3) {
                                        echo "<option value='1' selected>1ER TRIMESTRE</option>
                                       <option value='2'>2DO TRIMESTRE</option>
                                       <option value='3'>3ER TRIMESTRE</option>
                                       <option value='4'>4TO TRIMESTRE</option>";
                                    } elseif ($mes2 >= 4 && $mes2 <= 6) {
                                        echo "<option value='1'>1ER TRIMESTRE</option>
                                       <option value='2'selected>2DO TRIMESTRE</option>
                                       <option value='3'>3ER TRIMESTRE</option>
                                       <option value='4'>4TO TRIMESTRE</option>";
                                    } elseif ($mes2 >= 7 && $mes2 <= 9) {
                                        echo "<option value='1'>1ER TRIMESTRE</option>
                                       <option value='2'>2DO TRIMESTRE</option>
                                       <option value='3' selected>3ER TRIMESTRE</option>
                                       <option value='4'>4TO TRIMESTRE</option>";
                                    } elseif ($mes2 >= 10 && $mes2 <= 12) {
                                        echo "<option value='1'>1ER TRIMESTRE</option>
                                        <option value='2'>2DO TRIMESTRE</option>
                                        <option value='3'>3ER TRIMESTRE</option>
                                        <option value='4' selected>4TO TRIMESTRE</option>";
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-2 col-md-1 col-lg-1">
                        <div class="form-group">
                            <label for="dshTipAnio">Año: &nbsp;</label>
                            <div class="input-group">
                                <input type="text" name="dshTipAnio" id="dshTipAnio" class="form-control" required value="<?php date_default_timezone_set('America/Lima');
                                                                                                                        $fechaActual = date('Y');
                                                                                                                        echo $fechaActual; ?>" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div class="form-group">
                            <label>Selecciona un rango de fecha:</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="far fa-calendar-alt"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control float-right" id="rango-dsh2" name="rango-dsh2" readonly <?php date_default_timezone_set('America/Lima');
                                                                                                                                $mes = date("m");
                                                                                                                                $año = date("Y");
                                                                                                                                if ($mes >= 1 && $mes <= 3) {
                                                                                                                                    echo "inicio2= '" . $año . "-01-01' fin2='" . $año . "-03-31'";
                                                                                                                                } elseif ($mes >= 4 && $mes <= 6) {
                                                                                                                                    echo "inicio2= '" . $año . "-04-01' fin2='" . $año . "-06-30'";
                                                                                                                                } elseif ($mes >= 7 && $mes <= 9) {
                                                                                                                                    echo "inicio2= '" . $año . "-07-01' fin2='" . $año . "-09-30'";
                                                                                                                                } elseif ($mes >= 10 && $mes <= 12) {
                                                                                                                                    echo "inicio2= '" . $año . "-10-01' fin2='" . $año . "-12-31'";
                                                                                                                                }
                                                                                                                                ?>>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1">
                        <div class="form-group">
                            <label class="text-light">.</label>
                            <div class="input-group">
                                <button type="btn" class="btn bg-info pull-right" id="deshacer-filtro-DashQX2"><i class="fas fa-broom"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div class="form-group">
                            <label>Ingrese CIE 10 o Descripción de Diagnóstico:</label>
                            <div class="input-group">
                                <select class="form-control" style="width: 100%;" id="diagnosticoQX" name="diagnosticoQX">
                                    <option value="0">Ingrese CIE10 o Descripcion de Dx</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                        <div class="form-group">
                            <label>Seleccione Tip. Ingreso:</label>
                            <div class="input-group">
                                <select class="form-control dshTipIng" name="dshTipIng" id="dshTipIng">
                                    <option value="0">-------------TODAS--------------</option>
                                    <?php
                                    $tipoIngreso = ReportesControlador::ctrListarTipoIngreso();
                                    foreach ($tipoIngreso as $key => $value) {
                                        echo '<option value="' . $value["IdTipoServicio"] . '">' . $value["Descripcion"] . '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div class="form-group">
                            <label>Selecciona Especialidad:</label>
                            <div class="input-group">
                                <select class="form-control dshEspecialidad2" name="dshEspecialidad2" id="dshEspecialidad2">
                                    <option value="0">Seleccione Tipo. Ingreso</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div class="form-group">
                            <label>Selecciona Servicio:</label>
                            <div class="input-group">
                                <select class="form-control dshServicio" name="dshServicio" id="dshServicio">
                                    <option value="0">Seleccione Especialidad</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                        <div class="form-group">
                            <label>Médico</label>
                            <div class="input-group">
                                <select class="form-control" style="width: 100%;" id="medicoQX" name="medicoQX">
                                    <option value="0">Seleccione Médico</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 d-xs-none"></div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="card card-danger">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold"> Top 10 Diagnósticos - <span id="trimestre_año2"></span></h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="chart rd3">
                                <canvas id="graphDashD3" width="350" height="350"></canvas>
                            </div>
                        </div>

                        <div class="card-body table-responsive p-0" id="tabgraphDashD1">
                            <table class="table table-striped table-valign-middle" id="tabDetalle10Diag">
                                <thead>
                                    <tr>
                                        <th>CIE 10</th>
                                        <th>Descripción Dx</th>
                                        <th>N° Frecuencia
                                        </th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody id="cuerpoTab10Diag">
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>TOTAL</th>
                                        <th></th>
                                        <th id="totalTab10Diag"></th>
                                        <th id="totalTab10DiagPorcen"></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-xs-none"></div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold"> Frecuencia de Diagnóstico por Meses - <span id="trimestre_año3"></span></h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="chart rd1">
                                <canvas id="graphDashD1" width="350" height="350"></canvas>
                            </div>

                            <div class="card-body table-responsive p-0" id="tabgraphDashD2">
                                <table class="table table-striped table-valign-middle" id="tabDetalleMesDiag">
                                    <thead>
                                        <tr>
                                            <th>Mes</th>
                                            <th>N° Frecuencia
                                            </th>
                                            <th>%</th>
                                        </tr>
                                    </thead>
                                    <tbody id="cuerpoTabMesDiag">
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>TOTAL</th>
                                            <th id="totalTabMesDiag"></th>
                                            <th id="totalTabMesDiagPorcen"></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="card card-warning">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold">Frecuencia de Diagnóstico por Especialidades - <span id="trimestre_año"></span></h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body rd2">
                            <canvas id="graphDashD2" width="400" height="400"></canvas>
                        </div>


                        <div class="card-body table-responsive p-0" id="tabgraphDashD3">
                            <table class="table table-striped table-valign-middle" id="tabDetalleEspDiag">
                                <thead>
                                    <tr>
                                        <th>Especialidad</th>
                                        <th>N° Frecuencia
                                        </th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody id="cuerpoTabEspDiag">
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>TOTAL</th>
                                        <th id="totalTabEspDiag"></th>
                                        <th id="totalTabEspDiagPorcen"></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>