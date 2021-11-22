<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <h4><strong>Reporte:. Tipo Medicamento</strong></h4>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="dashboard">Ir a Inicio</a></li>
                        <li class="breadcrumb-item active">Reporte Tipo Medicamento</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Filtros &nbsp;<i class="fas fa-filter"></i></h3>
                <div class="card-tools">
                    <a href="public/views/reports/ReporteFarmacia.php?reporte=reporte" class="rptControl">
                        <button type="btn" class="btn bg-success" id="btnRptControl"><i class="fas fa-file-excel"></i>&nbsp; Exportar Saldos
                        </button>
                    </a>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                        <div class="form-group">
                            <label>Seleccione Trim (Opc):</label>
                            <div class="input-group">
                                <select class="form-control dshTipTrimestre3" name="dshTipTrimestre3" id="dshTipTrimestre3">
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
                            <label for="dshTipAnio3">Año: &nbsp;</label>
                            <div class="input-group">
                                <input type="text" name="dshTipAnio3" id="dshTipAnio3" class="form-control" required value="<?php date_default_timezone_set('America/Lima');
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
                                <input type="text" class="form-control float-right" id="rango-dsh3" name="rango-dsh3" readonly <?php date_default_timezone_set('America/Lima');
                                                                                                                                $mes = date("m");
                                                                                                                                $año = date("Y");
                                                                                                                                if ($mes >= 1 && $mes <= 3) {
                                                                                                                                    echo "inicio3= '" . $año . "-01-01' fin3='" . $año . "-03-31'";
                                                                                                                                } elseif ($mes >= 4 && $mes <= 6) {
                                                                                                                                    echo "inicio3= '" . $año . "-04-01' fin3='" . $año . "-06-30'";
                                                                                                                                } elseif ($mes >= 7 && $mes <= 9) {
                                                                                                                                    echo "inicio3= '" . $año . "-07-01' fin3='" . $año . "-09-30'";
                                                                                                                                } elseif ($mes >= 10 && $mes <= 12) {
                                                                                                                                    echo "inicio3= '" . $año . "-10-01' fin3='" . $año . "-12-31'";
                                                                                                                                }
                                                                                                                                ?>>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1">
                        <div class="form-group">
                            <label class="text-light">.</label>
                            <div class="input-group">
                                <button type="btn" class="btn bg-success pull-right" id="deshacer-filtro-DashQX3"><i class="fas fa-broom"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div class="form-group">
                            <label>Ingrese Nombre del Medicamento:</label>
                            <div class="input-group">
                                <select class="form-control" style="width: 100%;" id="medicamentoQX" name="medicamentoQX">
                                    <option value="0">Ingrese nombre o descripción</option>
                                </select>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="card card-warning">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold"> 10 Medicamentos más vendidos - <span id="trimestre_añoPV"></span></h3>
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
                            <div class="chart rmv1">
                                <canvas id="graphDashMV1" width="400" height="400"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold"> Top 10 medicamentos con más stock</h3>
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
                            <div class="chart rm1">
                                <canvas id="graphDashM1" width="100" height="100"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-danger">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold">Top 10 medicamentos quirúrgicos con más stock</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body rm2">
                            <canvas id="graphDashM2" width="400" height="400"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card card-gray">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold"> Top 10 medicamentos con menos stock</h3>
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
                            <div class="chart rm3">
                                <canvas id="graphDashM3" width="400" height="400"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card card-info">
                        <div class="card-header">
                            <h3 class="card-title font-weight-bold">Top 10 medicamentos quirúrgicos con menos stock</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button type="button" class="btn btn-tool" data-card-widget="remove">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body rm4">
                            <canvas id="graphDashM4" width="400" height="400"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>