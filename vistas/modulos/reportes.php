<div class="content-wrapper">
  <section class="content-header">
    <h1>Reportes</h1>
      <ol class="breadcrumb">
        <li><a href="inicio"><i class="fa fa-dashboard"></i> Inicio</a></li>
        <li class="active">Reportes</li>
      </ol>
    </section>

    <section class="content">
      <div class="box text-center">
        <div class="row">
          <div class="col-xs-2 col-xs-offset-4">
            <div class="form-group">
                  <div class='input-group date datepicker' id='datetimepicker1'>
                      <div class="input-group-addon">Desde</div>
                      <input type='text' class="form-control" id="fecha_ini"/>
                      <span class="input-group-addon">
                          <span class="glyphicon glyphicon-calendar"></span>
                      </span>
                  </div>
              </div>
          </div>
          <div class="col-xs-2">
            <div class="form-group">
                  <div class='input-group date datepicker' id='datetimepicker2'>
                      <div class="input-group-addon">hasta</div>
                      <input type='text' class="form-control" id="fecha_fin"/>
                      <span class="input-group-addon">
                          <span class="glyphicon glyphicon-calendar"></span>
                      </span>
                  </div>
              </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <button id="excel" class="btn btn-success" style="margin-top:5px">Descargar reporte Cony</button>
            <a id="reporteCony" class="btn btn-success" download="Reporte_Cony.xls" href="#" onclick="return ExcellentExport.excel(this, 'tablereporteCony', 'Resultado');">Reporte cony</a>
          </div>
          <div class="col-xs-2">
            <button id="fechas" class="btn btn-success" style="margin-top:5px">Descargar reporte por fechas</button>
            <a id="reporte_fechas" class="btn btn-success" download="Reporte_fechas.xls" href="#" onclick="return ExcellentExport.excel(this, 'tablereporteCony', 'Resultado');">Reporte fechas</a>
          </div>

          <div class="col-xs-2">
            <button id="telefonos" class="btn btn-success" style="margin-top:5px">Descargar reporte telefonos</button>
            <a id="reporte_telefonos" class="btn btn-success" download="Reporte_telefonos.xls" href="#" onclick="return ExcellentExport.excel(this, 'tablereporteCony', 'Resultado');">Reporte fechas</a>
          </div>

          <div class="col-xs-2">
            <button id="bajas" class="btn btn-success" style="margin-top:5px">Descargar reporte Bajas</button>
            <a id="reporteBajas" class="btn btn-success" download="Reporte_bajas.xls" href="#" onclick="return ExcellentExport.excel(this, 'tablereporteCony', 'Resultado');">Reporte bajas</a>
          </div>
        </div>

        <div id="resultado">

        </div>
      </div>
    </section>
</div>
