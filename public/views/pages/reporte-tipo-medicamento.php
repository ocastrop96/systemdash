<div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="public/views/resources/img/mrms-logo.png" alt="MRMS-LOGO" height="80" width="80">
</div>
<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <h4><strong>Reporte:. Tipo Consulta</strong></h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="dashboard">Ir a Inicio</a></li>
                        <li class="breadcrumb-item active">Reporte Tipo Consulta</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
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
                                <input type="text" class="form-control float-right" id="rango-dsh" name="rango-dsh" readonly inicio="<?php date_default_timezone_set('America/Lima');
                                                                                                                                        echo date("Y-m-d"); ?>" fin="<?php date_default_timezone_set('America/Lima');
                                                                                                                                                                        echo date("Y-m-d"); ?>">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                        <div class="form-group">
                            <label class="text-light">.</label>
                            <div class="input-group">
                                <button type="btn" class="btn bg-info pull-right" id="deshacer-filtro-DashQX"><i class="fas fa-undo-alt"></i> Deshacer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div class="form-group">
                            <label>Selecciona Especialidad:</label>
                            <div class="input-group">
                                <select class="form-control" name="dshEspecialidad" id="dshEspecialidad">
                                    <option value="0">--------------------------TODAS---------------------------</option>
                                    <?php
                                    $especialidades = ReportesControlador::ctrListarEspecialidades();
                                    foreach ($especialidades as $key => $value) {
                                        echo '<option value="' . $value["IdEspecialidad"] . '">' . $value["Nombre"] . '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div class="form-group">
                            <label>Selecciona IAFA:</label>
                            <div class="input-group">
                                <select class="form-control" name="dshIAFA" id="dshIAFA">
                                    <option value="0">-------------TODAS--------------</option>
                                    <?php
                                    $especialidades = ReportesControlador::ctrListarIAFAS();
                                    foreach ($especialidades as $key => $value) {
                                        echo '<option value="' . $value["IdFuenteFinanciamiento"] . '">' . $value["Descripcion"] . ' ' . $value["Nombre"] . '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div class="form-group">
                            <label>Ingrese DNI:</label>
                            <div class="input-group">
                                <select class="form-control" style="width: 100%;" id="pacienteQX" name="pacienteQX">
                                    <option value="">Ingrese DNI</option>
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
                <div class="col-md-6">
                    <div class="card card-gray">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold"> Atenciones por Mes</h3>
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
                            <div class="chart rj1">
                                <canvas id="graphDash1" width="400" height="400"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-info">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold">Atenciones por Especialidad</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body rj2">
                            <canvas id="graphDash2" width="400" height="400"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row align-content-center">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold">Atenciones por IAFA</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body rj3">
                            <canvas id="graphDash3" width="400" height="400"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
    </section>
</div>