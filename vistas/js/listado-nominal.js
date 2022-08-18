  var listado_nominal = [];
  var url_extrac= undefined;
  var empresas=[];

  $(".ocultar,.empresa,.imagen,.messages,#noEncontrado,#encontrado,#guardar").hide();

  $("#ambito").change(function(){
    if ($("#ambito").val()!="") {
      $(".empresa").show();
      empresas=llenarEmpresas($("#ambito").val());
      empresasOption="<option value=''>-Sel-</option>";
      $("#empresa option").remove();
      for (var i = 0; i < empresas.length; i++) {
        empresasOption+="<option value='"+empresas[i].nom_corp+"'>"+empresas[i].nom_corp+"</option>";
      }
      empresasOption+="<option value='otros'>Otros</option>";
      $("#empresa").append(empresasOption);
    }else {
      $(".empresa").hide();
      $("#empresa").val("");
      $("#empresa").change();
    }
  });

  $("#empresa").change(function(){
    if ($("#empresa").val()!="") {
      $(".imagen").show();
    }else {
      $(".imagen").hide();
    }
  });

    var fileExtension = "";
    $("#imagen").change(function()
    {
        $(".ocultar").hide();
        var file = undefined;
        var fileName = undefined;
        fileExtension = undefined;
        var fileSize = undefined;
        var fileType = undefined;

        file = $("#imagen")[0].files[0];
        fileName = file.name;
        fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        fileSize = file.size;
        fileType = file.type;

        if (file.type==='application/vnd.ms-excel' || file.type==='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          showMessage("<h1><span class='label label-warning'>Archivo para subir: "+fileName+", peso total: "+((fileSize/1024)/1024).toFixed(2)+" Mb.</span></h1>");
        }else {
          showMessage("<h1><span class='label label-danger'>Solo se adminte archivos de excel .xlsx, .xls</span></h1>");
          $("#guardar").hide();
          return;
        }
			$("#guardar").click();
    });

    $("#guardar").click(function(){
        listado_nominal = [];
        var formData = new FormData($(".formulario")[0]);
        formData.append("ambito", $("#ambito").val());
        formData.append("empresa", $("#empresa").val());
        var message = "";
        $.ajax({
            url: 'ajax/upload.php',
            type: 'POST',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function(){
                message = $("<h1><span class='label label-primary'>Subiendo Archivo, por favor espere...</span></h1>");
                showMessage(message)
            },
            success: function(data){
                message = $("<h1><span class='label label-success'>Archivo subido correctamente. Procesando...</span></h1>");
                showMessage(message);
                excelToJson(data);
                setTimeout(function(){imprimir();$("#guardar").hide();},1000);
            },
            error: function(){
                message = $("<h1><span class='label label-danger'>Ha ocurrido un error.</span></h1>");
                showMessage(message);
            }
        });
    });


function insertar(no,no_de_registro,ambito,cve_ent,nom_ent,cve_mun,nom_mun,nom_depen,fn_snsp,inst_sp,nom_corp,modalidad_autorizada,nom_puesto_tab,nom_puesto_fun,cat_tabular,cat_cnca,crit_puesto_cnca,jer_puesto,nombre,primer_ap,segundo_ap,rfc,curp,cuip,no_empl,percep_bruta,cesp,see,cecc,uecs,udai,spa_ui,spa_uo,spa_uat,spa_otra,c4,aic,otra_ads,genero,fh_ingreso,fh_nac,escolaridad,direccion_del_elemento,num_telefonico){
var resultado="";
	data={
    "no" : no,
    "no_de_registro" : no_de_registro,
    "ambito" : ambito,
    "cve_ent" : cve_ent,
    "nom_ent" : nom_ent,
    "cve_mun" : cve_mun,
    "nom_mun" : nom_mun,
    "nom_depen" : nom_depen,
    "fn_snsp" : fn_snsp,
    "inst_sp" : inst_sp,
    "nom_corp" : nom_corp,
    "modalidad_autorizada" : modalidad_autorizada,
    "nom_puesto_tab" : nom_puesto_tab,
    "nom_puesto_fun" : nom_puesto_fun,
    "cat_tabular" : cat_tabular,
    "cat_cnca" : cat_cnca,
    "crit_puesto_cnca" : crit_puesto_cnca,
    "jer_puesto" : jer_puesto,
    "nombre" : nombre,
    "primer_ap" : primer_ap,
    "segundo_ap" : segundo_ap,
    "rfc" : rfc,
    "curp" : curp,
    "cuip" : cuip,
    "no_empl" : no_empl,
    "percep_bruta" : percep_bruta,
    "cesp" : cesp,
    "see" : see,
    "cecc" : cecc,
    "uecs" : uecs,
    "udai" : udai,
    "spa_ui" : spa_ui,
    "spa_uo" : spa_uo,
    "spa_uat" : spa_uat,
    "spa_otra" : spa_otra,
    "c4" : c4,
    "aic" : aic,
    "otra_ads" : otra_ads,
    "genero" : genero,
    "fh_ingreso" : fh_ingreso,
    "fh_nac" : fh_nac,
    "escolaridad" : escolaridad,
    "direccion_del_elemento" : direccion_del_elemento,
    "num_telefonico" : num_telefonico
	};
	var jqXHR = $.ajax({
			url: 'ajax/listado-nominal.ajax.php',
			type: 'POST',
			data: data,
      async: false,
			beforeSend: function(){
					message = $("<h1><span class='label label-primary'>Insertando registros...</span></h1>");
					showMessage(message)
			},
			success: function(data){
					message = $("<h1><span class='label label-success'>Proceso Finalizado</span></h1>");
					showMessage(message);
            console.log(data);
			},
			error: function(){
					message = $("<h1><span class='label label-danger'>Ha ocurrido un error.</span></h1>");
					showMessage(message);
			}
	});
  return JSON.parse(jqXHR.responseText);
}


function ConsultaNoEncontrados(cadena){
  var select=$("#empresa").val();
	data={
    "cadena" : cadena,
    "nom_corp" : select
	};
	var jqXHR = $.ajax({
			url: 'ajax/listado-nominal.ajax.php',
			type: 'POST',
			data: data,
      async: false,
			beforeSend: function(){
					message = $("<h1><span class='label label-primary'>Consultando registros...</span></h1>");
					showMessage(message)
			},
			success: function(data){
					message = $("<h1><span class='label label-success'>Proceso Finalizado</span></h1>");
					showMessage(message);
			},
			error: function(){
					message = $("<h1><span class='label label-danger'>Ha ocurrido un error.</span></h1>");
					showMessage(message);
			}
	});
  return JSON.parse(jqXHR.responseText);
}

function bajaDb(id, nombre, primer_ap, segundo_ap){
  console.log("entra a bajas")
	data={
    "id" : id,
    "nombre" : nombre,
    "primer_ap" : primer_ap,
    "segundo_ap" : segundo_ap
	};
	var jqXHR = $.ajax({
			url: 'ajax/listado-nominal.ajax.php',
			type: 'POST',
			data: data,
      async: false,
			beforeSend: function(){
					message = $("<h1><span class='label label-primary'>Consultando registros...</span></h1>");
					showMessage(message)
			},
			success: function(data){
					message = $("<h1><span class='label label-success'>Proceso Finalizado</span></h1>");
					showMessage(message);
			},
			error: function(){
					message = $("<h1><span class='label label-danger'>Ha ocurrido un error.</span></h1>");
					showMessage(message);
			}
	});
  return jqXHR.responseText;
}

function llenarEmpresas(ambito){
	data={
    "ambitointerno" : ambito
	};
	var jqXHR = $.ajax({
			url: 'ajax/listado-nominal.ajax.php',
			type: 'POST',
			data: data,
      async: false,
			beforeSend: function(){

			},
			success: function(data){

			},
			error: function(){

			}
	});
  return JSON.parse(jqXHR.responseText);
}


function showMessage(message){
    $(".messages").html("").show();
    $(".messages").html(message);
}

// modificaciones
function excelToJson(file) {
var url = "ajax/"+file;
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";
oReq.onload = function(e) {
  var arraybuffer = oReq.response;
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");
  var workbook = XLSX.read(bstr, {type:"binary", cellDates: true ,cellNF: false , cellText: false });
  var first_sheet_name = workbook.SheetNames[0];
  var worksheet = workbook.Sheets[first_sheet_name];
  console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true, dateNF: 'dd/mm/yyyy'}));
  listado_nominal=XLSX.utils.sheet_to_json(worksheet,{dateNF: 'yyyy/mm/dd'});
}
 oReq.send();
}


function imprimir(){
  var noEncontrados="";
  var encontrados="";
  var bajas="";
  var found=[];
  var testeando=[];
  var arregloEncontrados=[];
  var validaexcel=[];
  var cadena="";
  var uno=1;
  var cero=1;

  noEncontrados+='<tr>';
  noEncontrados+='  <th colspan="9" style="background:red; color:white; text-align: center;"><h3>No encontrados(Altas)</h3></th>';
  noEncontrados+='</tr>';
  noEncontrados+='<tr class="ocultar">';
  noEncontrados+='  <th>Numero</th>';
  noEncontrados+='  <th>Nombre</th>';
  noEncontrados+='  <th>Apellido Paterno</th>';
  noEncontrados+='  <th>Apellido Materno</th>';
  noEncontrados+='  <th>CUIP</th>';
  noEncontrados+='  <th>Nombre corporacion</th>';
  noEncontrados+='  <th>RFC</th>';
  noEncontrados+='  <th>CURP</th>';
  noEncontrados+='  <th>Genero</th>';
  noEncontrados+='</tr>';

  encontrados+='<tr>';
  encontrados+='  <th colspan="9" style="background:red; color:white; text-align: center;"><h3>Encontrados</h3></th>';
  encontrados+='</tr>';
  encontrados+='<tr class="ocultar">';
  encontrados+='  <th>Numero</th>';
  encontrados+='  <th>Nombre</th>';
  encontrados+='  <th>Apellido Paterno</th>';
  encontrados+='  <th>Apellido Materno</th>';
  encontrados+='  <th>CUIP</th>';
  encontrados+='  <th>Nombre corporacion</th>';
  encontrados+='  <th>RFC</th>';
  encontrados+='  <th>CURP</th>';
  encontrados+='  <th>Genero</th>';
  encontrados+='</tr>';

  bajas+='<tr>';
  bajas+='  <th colspan="9" style="background:gray; color:black; text-align: center;"><h3>Bajas</h3></th>';
  bajas+='</tr>';
  bajas+='<tr class="ocultar">';
  bajas+='  <th style="background:#69b844;">Numero</th>';
  bajas+='  <th style="background:#69b844;">Nombre</th>';
  bajas+='  <th style="background:#69b844;">Apellido Paterno</th>';
  bajas+='  <th>Apellido Materno</th>';
  bajas+='  <th>CUIP</th>';
  bajas+='  <th>Nombre corporacion</th>';
  bajas+='  <th>RFC</th>';
  bajas+='  <th>CURP</th>';
  bajas+='  <th>Genero</th>';
  bajas+='</tr>';

  validaexcel=validaExcel(listado_nominal);
  console.log(validaexcel);
  if (validaexcel.fallo=="1") {
    return;
  }

      for (var i = 0; i < listado_nominal.length; i++) {
        if (  listado_nominal[i].NOMBRE==undefined && listado_nominal[i].PRIMER_AP==undefined) {
          message = $("<h1><span class='label label-success'>Proceso Detenido por no ser archivo correcto</span></h1>");
          showMessage(message);
          return;
        }
        no = listado_nominal[i].No!=undefined?listado_nominal[i].No:"";
        no_de_registro = listado_nominal[i].No_DE_REGISTRO!=undefined?listado_nominal[i].No_DE_REGISTRO:"";
        ambito = (listado_nominal[i].AMBITO!=undefined?listado_nominal[i].AMBITO:"").toUpperCase();
        cve_ent = listado_nominal[i].CVE_ENT!=undefined?listado_nominal[i].CVE_ENT:"";
        nom_ent = (listado_nominal[i].NOM_ENT!=undefined?listado_nominal[i].NOM_ENT:"").toUpperCase();
        cve_mun = listado_nominal[i].CVE_MUN!=undefined?listado_nominal[i].CVE_MUN:"";
        nom_mun = (listado_nominal[i].NOM_MUN!=undefined?listado_nominal[i].NOM_MUN:"").toUpperCase();
        nom_depen = (listado_nominal[i].NOM_DEPEN!=undefined?listado_nominal[i].NOM_DEPEN:"").toUpperCase();
        fn_snsp = listado_nominal[i].FN_SNSP!=undefined?listado_nominal[i].FN_SNSP:"";
        inst_sp = (listado_nominal[i].INST_SP!=undefined?listado_nominal[i].INST_SP:"").toUpperCase();
        nom_corp = (listado_nominal[i].NOM_CORP!=undefined?listado_nominal[i].NOM_CORP:"").toUpperCase();
        modalidad_autorizada = (listado_nominal[i].MODALIDAD_AUTORIZADA!=undefined?listado_nominal[i].MODALIDAD_AUTORIZADA:"").toUpperCase();
        nom_puesto_tab = (listado_nominal[i].NOM_PUESTO_TAB!=undefined?listado_nominal[i].NOM_PUESTO_TAB:"").toUpperCase();
        nom_puesto_fun = (listado_nominal[i].NOM_PUESTO_FUN!=undefined?listado_nominal[i].NOM_PUESTO_FUN:"").toUpperCase();
        cat_tabular = listado_nominal[i].CAT_TABULAR!=undefined?listado_nominal[i].CAT_TABULAR:"";
        cat_cnca = listado_nominal[i].CAT_CNCA!=undefined?listado_nominal[i].CAT_CNCA:"";
        crit_puesto_cnca = listado_nominal[i].CRIT_PUESTO_CNCA!=undefined?listado_nominal[i].CRIT_PUESTO_CNCA:"";
        jer_puesto = listado_nominal[i].JER_PUESTO!=undefined?listado_nominal[i].JER_PUESTO:"";
        nombre = (listado_nominal[i].NOMBRE!=undefined?listado_nominal[i].NOMBRE:"").toUpperCase();
        primer_ap = (listado_nominal[i].PRIMER_AP!=undefined?listado_nominal[i].PRIMER_AP:"").toUpperCase();
        segundo_ap = (listado_nominal[i].SEGUNDO_AP!=undefined?listado_nominal[i].SEGUNDO_AP:"").toUpperCase();
        rfc = (listado_nominal[i].RFC!=undefined?listado_nominal[i].RFC:"").toUpperCase();
        curp = (listado_nominal[i].CURP!=undefined?listado_nominal[i].CURP:"").toUpperCase();
        cuip = (listado_nominal[i].CUIP!=undefined?listado_nominal[i].CUIP:"").toUpperCase();
        no_empl = listado_nominal[i].NO_EMPL!=undefined?listado_nominal[i].NO_EMPL:"";
        percep_bruta = listado_nominal[i].PERCEP_BRUTA!=undefined?listado_nominal[i].PERCEP_BRUTA:"";
        cesp = listado_nominal[i].CESP!=undefined?listado_nominal[i].CESP:"";
        see = listado_nominal[i].SEE!=undefined?listado_nominal[i].SEE:"";
        cecc = listado_nominal[i].CECC!=undefined?listado_nominal[i].CECC:"";
        uecs = listado_nominal[i].UECS!=undefined?listado_nominal[i].UECS:"";
        udai = listado_nominal[i].UDAI!=undefined?listado_nominal[i].UDAI:"";
        spa_ui = listado_nominal[i].SPA_UI!=undefined?listado_nominal[i].SPA_UI:"";
        spa_uo = listado_nominal[i].SPA_UO!=undefined?listado_nominal[i].SPA_UO:"";
        spa_uat = listado_nominal[i].SPA_UAT!=undefined?listado_nominal[i].SPA_UAT:"";
        spa_otra = listado_nominal[i].SPA_OTRA!=undefined?listado_nominal[i].SPA_OTRA:"";
        c4 = listado_nominal[i].C4!=undefined?listado_nominal[i].C4:"";
        aic = listado_nominal[i].AIC!=undefined?listado_nominal[i].AIC:"";
        otra_ads = listado_nominal[i].OTRA_ADS!=undefined?listado_nominal[i].OTRA_ADS:"";
        genero = (listado_nominal[i].GENERO!=undefined?listado_nominal[i].GENERO:"").toUpperCase();
        fh_ingreso = listado_nominal[i].FH_INGRESO!=undefined?listado_nominal[i].FH_INGRESO:"";
        fh_nac = listado_nominal[i].FH_NAC!=undefined?listado_nominal[i].FH_NAC:"";
        escolaridad = (listado_nominal[i].ESCOLARIDAD!=undefined?listado_nominal[i].ESCOLARIDAD:"").toUpperCase();
        direccion_del_elemento = (listado_nominal[i].DIRECCION_DEL_ELEMENTO!=undefined?listado_nominal[i].DIRECCION_DEL_ELEMENTO:"").toUpperCase();
        num_telefonico = (listado_nominal[i].NUM_TELEFONICO!=undefined?listado_nominal[i].NUM_TELEFONICO:"").toUpperCase();



        found = insertar(no,no_de_registro,ambito,cve_ent,nom_ent,cve_mun,nom_mun,nom_depen,fn_snsp,inst_sp,nom_corp,modalidad_autorizada,nom_puesto_tab,nom_puesto_fun,cat_tabular,cat_cnca,crit_puesto_cnca,jer_puesto,nombre,primer_ap,segundo_ap,rfc,curp,cuip,no_empl,percep_bruta,cesp,see,cecc,uecs,udai,spa_ui,spa_uo,spa_uat,spa_otra,c4,aic,otra_ads,genero,fh_ingreso,fh_nac,escolaridad,direccion_del_elemento,num_telefonico);


        if (found.existe=="1") {
          // arregloEncontrados.push({"id":found.id, "curp":found.curp});
          arregloEncontrados.push(found.id);
          noEncontrados+='<tr>';
          noEncontrados+='<td>'+(uno)+'</td>';
          noEncontrados+='<td>'+nombre+'</td>';
          noEncontrados+='<td>'+primer_ap;+'</td>';
          noEncontrados+='<td>'+segundo_ap+'</td>';
          noEncontrados+='<td>'+cuip+'</td>';
          noEncontrados+='<td>'+nom_corp+'</td>';
          noEncontrados+='<td>'+rfc+'</td>';
          noEncontrados+='<td>'+curp+'</td>';
          noEncontrados+='<td>'+genero+'</td>';
          noEncontrados+='</tr>';
          uno++;
        }else if (found.existe="0") {
          // arregloEncontrados.push({"id":found.id, "curp":found.curp});
          arregloEncontrados.push(found.id);
          encontrados+='<tr>';
          encontrados+='<td>'+(cero)+'</td>';
          encontrados+='<td>'+nombre+'</td>';
          encontrados+='<td>'+primer_ap;+'</td>';
          encontrados+='<td>'+segundo_ap+'</td>';
          encontrados+='<td>'+cuip+'</td>';
          encontrados+='<td>'+nom_corp+'</td>';
          encontrados+='<td>'+rfc+'</td>';
          encontrados+='<td>'+curp+'</td>';
          encontrados+='<td>'+genero+'</td>';
          encontrados+='</tr>';
          cero++;
        }else {
          console.log("entro en el else");
        }
      }
      cadena+=arregloEncontrados[0];
      for (var i = 1; i < arregloEncontrados.length; i++) {
        cadena+=","+arregloEncontrados[i];
      }

      testeando=ConsultaNoEncontrados(cadena);
      console.log(testeando);
      for (var i = 0; i < testeando.length; i++) {
        console.log('entro');
        bajaDb(testeando[i].id,testeando[i].nombre,testeando[i].primer_ap,testeando[i].segundo_ap);
        bajas+='<tr>';
        bajas+='<td style="background:#69b844;">'+(i+1)+'</td>';
        bajas+='<td style="background:#69b844;">'+testeando[i].nombre+'</td>';
        bajas+='<td style="background:#69b844;">'+testeando[i].primer_ap+'</td>';
        bajas+='<td>'+testeando[i].segundo_ap+'</td>';
        bajas+='<td>'+testeando[i].cuip+'</td>';
        bajas+='<td>'+testeando[i].nom_corp+'</td>';
        bajas+='<td>'+testeando[i].rfc+'</td>';
        bajas+='<td>'+testeando[i].curp+'</td>';
        bajas+='<td>'+testeando[i].genero+'</td>';
        bajas+='</tr>';
      }
      $("#muestra tr").remove();
      $(".ocultar").show();
      $("#noEncontrado").show();
      $('#muestra > tbody:last-child').after(noEncontrados+bajas+encontrados);
    }

function validaExcel(data){
  console.log("validacion excel");
  for (var i = 0; i < listado_nominal.length; i++) {
    //Revisa si el campo de ambito esta lleno
    if (listado_nominal[i].AMBITO==undefined) {
      alerta('error','Favor de revisar el ambito de la fila #'+(i+2));
      showMessage('<h1><span class="label label-success">Favor de revisar el ambito de la fila #'+(i+2)+'</span></h1>');
      return {"fallo": "1","fila": (i+2)};}
    //Revisa si el campo de ambito coincide con el campo de ambito seleccionado
    else if (listado_nominal[i].AMBITO.toUpperCase()!=$("#ambito").val().toUpperCase()) {
      alerta('error','El ambito de la fila #'+(i+2)+' no coincide con el seleccionado');
      showMessage('<h1><span class="label label-success">El ambito de la fila #'+(i+2)+' no coincide con el seleccionado</span></h1>');
      return {"fallo": "1","fila": (i+2)};}
    //Revisa si el campo de nom_corp esta lleno
    else if (listado_nominal[i].NOM_CORP==undefined) {
      alerta('error','Favor de revisar el nombre de la corporacion de la fila #'+(i+2));
      showMessage('<h1><span class="label label-success">Favor de revisar el nombre de la corporacion de la fila #'+(i+2)+'</span></h1>');
      return {"fallo": "1","fila": (i+2)};}
    //Revisa si el campo de nom_corp coincide con el campo de nom_corp seleccionado
    else if (listado_nominal[i].NOM_CORP.toUpperCase()!=$("#empresa").val().toUpperCase() && $("#empresa").val()!="otros") {
      alerta('error','El nombre de la corporacion de la fila #'+(i+2)+' no coincide con el seleccionado');
      showMessage('<h1><span class="label label-success">El nombre de la corporacion de la fila #'+(i+2)+' no coincide con el seleccionado</span></h1>');
      return {"fallo": "1","fila": (i+2)};}



  }
  return {"fallo": "0","fila": i};

}
