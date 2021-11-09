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
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
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
                                                                                                                                    echo 'inicio2= "2021-01-01" fin2="2021-03-31"';
                                                                                                                                } elseif ($mes >= 4 && $mes <= 6) {
                                                                                                                                    echo 'inicio2= "2021-01-01" fin2="2021-03-31"';
                                                                                                                                } elseif ($mes >= 7 && $mes <= 9) {
                                                                                                                                    echo 'inicio2= "2021-01-01" fin2="2021-03-31"';
                                                                                                                                } elseif ($mes >= 10 && $mes <= 12) {
                                                                                                                                    echo 'inicio2= "2021-10-01" fin2="2021-12-31"';
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
                    <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
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
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
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
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
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
                            <h3 class="card-title font-weight-bold"> Top 10 Diagnósticos</h3>
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
                    </div>
                </div>
                <div class="col-md-3 d-xs-none"></div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold"> Frecuencia de Diagnóstico por Meses</h3>
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
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div class="card card-warning">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold">Frecuencia de Diagnóstico por Especialidades</h3>
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
                            <canvas id="graphDashD2" width="350" height="350"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>