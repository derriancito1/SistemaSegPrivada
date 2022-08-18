<div class="content-wrapper">
  <section class="content-header">
    <h1>Listados Nominales</h1>
    <ol class="breadcrumb">
      <li><a href="inicio"><i class="fa fa-dashboard"></i> Inicio</a></li>
      <li class="active">Listados Nominales</li>
    </ol>
  </section>

  <section class="content">
    <div class="box">
      <center>
      <form enctype="multipart/form-data" class="formulario">
          <div class="form-group">
          <select class="" id="ambito">
            <option value="">-Sel-</option>
            <option value="estatal">Estatal</option>
            <option value="federal">Federal</option>
            <!-- <option value="sin_dato">Federal pero estatal pero federa, pero ...</option> -->
          </select>
        </div>
        <div class="form-group empresa">
        <select class="" id="empresa">
          <!-- <option value="">-Sel-</option>
          <option value="Empresa1">Empresa1</option>
          <option value="Empresa2">Empresa2</option>
          <option value="Empresa3">Empresa3</option> -->
        </select>
      </div>
          <label class="btn btn-default btn-file imagen">
              Subir archivo <input name="archivo" type="file" style="display: none;" id="imagen">
          </label>
          <input class="btn btn-primary" type="button" value="Guardar" id="guardar"/><br>
      </form>
      <br>
      <div class="messages"></div><br /><br />
      <a id="noEncontrado" class="btn btn-success" download="noencontrado.xls" href="#" onclick="return ExcellentExport.excel(this, 'muestra', 'Resultado');">Exportar excel</a>
      <br>
      <table border="10" id="muestra" class="ocultar table table-striped table-bordered table-hover table-condensed">
        <tr>
        </tr>
      </table>
      <br>
    </div>
  </section>
</div>
