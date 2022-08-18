$("#reporteCony,#reporte_fechas,#reporteBajas,#reporte_telefonos").hide();
function reporteCony(fecha_ini, fecha_fin){
	$("#tablereporteCony").remove();
	data={
    "ambito" : "ESTATAL",
		"fecha_ini" : fecha_ini,
		"fecha_fin" : fecha_fin
	};
	var jqXHR = $.ajax({
	// $.ajax({
			url: 'ajax/reportes.ajax.php',
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

function CorporacionesBajas(){
	$("#tablereporteCony").remove();
	data={
    "ambitoBajas" : "ESTATAL"
	};
	var jqXHR = $.ajax({
	// $.ajax({
			url: 'ajax/reportes.ajax.php',
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

function bajasArray(nom_corp, anio, mes){
	$("#tablereporteCony").remove();
	data={
    "nom_corp" : nom_corp,
		"anio" : anio,
		"mes" : mes
	};
	var jqXHR = $.ajax({
	// $.ajax({
			url: 'ajax/reportes.ajax.php',
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

function getMes(anio){
	$("#tablereporteCony").remove();
	data={
    "anio2" : anio
	};
	var jqXHR = $.ajax({
	// $.ajax({
			url: 'ajax/reportes.ajax.php',
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

function getAnio(){
	$("#tablereporteCony").remove();
	data={
    "getanio" : "1"
	};
	var jqXHR = $.ajax({
	// $.ajax({
			url: 'ajax/reportes.ajax.php',
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


$("#excel").click(function(){
	$("#fecha_ini").attr("required", "false");
	$("#fecha_fin").attr("required", "false");
	fecha_ini="";
	fecha_fin="";
	reportes(fecha_ini,fecha_fin)
});


$("#fechas").click(function(){
	var fecha_ini="";
	var fecha_fin="";
	if ($("#fecha_ini").val()=="") {
		alerta('error','Favor de llenar el campo "desde"');
		$("#fecha_ini").focus();
		return;
	}else {
		fecha_ini=$("#fecha_ini").val();
	}

	if ($("#fecha_fin").val()=="") {
		alerta('error','Favor de llenar el campo "hasta"');
		$("#fecha_fin").focus();
		return;
	}else {
		fecha_fin=$("#fecha_fin").val();
	}
	reportes(fecha_ini,fecha_fin);
});

$("#bajas").click(function(){
	$("#fecha_ini").attr("required", "false");
	$("#fecha_fin").attr("required", "false");
	reporteBajas()
});


function reportes(fecha_ini,fecha_fin){
	$("#tablereporteCony").remove();
	var concatenar="";
	var tester=[];
	$.blockUI({ message: '<h1>Generando reporte por favor espere...</h1>' });
	setTimeout(function(){
		tester=reporteCony(fecha_ini,fecha_fin);
		concatenar += '<table id="tablereporteCony" class="ocultar table table-striped table-bordered table-hover table-condensed">';
		concatenar += '<tr><th>AMBITO</th>';
		concatenar += '<th>CVE_ENT</th>';
		concatenar += '<th>NOM_ENT</th>';
		concatenar += '<th>CVE_MUN</th>';
		concatenar += '<th>NOM_MUN</th>';
		concatenar += '<th>NOM_DEPEN</th>';
		concatenar += '<th>FN_SNSP</th>';
		concatenar += '<th>INST_SP</th>';
		concatenar += '<th>NOM_CORP</th>';
		concatenar += '<th>NOM_PUESTO_TAB</th>';
		concatenar += '<th>NOM_PUESTO_FUN</th>';
		concatenar += '<th>CAT_TABULAR</th>';
		concatenar += '<th>CAT_CNCA</th>';
		concatenar += '<th>CRIT_PUESTO_CNCA</th>';
		concatenar += '<th>JER_PUESTO</th>';
		concatenar += '<th>NOMBRE</th>';
		concatenar += '<th>PRIMER_AP</th>';
		concatenar += '<th>SEGUNDO_AP</th>';
		concatenar += '<th>RFC</th>';
		concatenar += '<th>CURP</th>';
		concatenar += '<th>CUIP</th>';
		concatenar += '<th>NO_EMPL</th>';
		concatenar += '<th>PERCEP_BRUTA</th>';
		concatenar += '<th>CESP</th>';
		concatenar += '<th>SEE</th>';
		concatenar += '<th>CECC</th>';
		concatenar += '<th>UECS</th>';
		concatenar += '<th>UDAI</th>';
		concatenar += '<th>SPA_UI</th>';
		concatenar += '<th>SPA_UO</th>';
		concatenar += '<th>SPA_UAT</th>';
		concatenar += '<th>SPA_OTRA</th>';
		concatenar += '<th>C4</th>';
		concatenar += '<th>AIC</th>';
		concatenar += '<th>OTRA_ADS</th>';
		concatenar += '<th>GENERO</th>';
		concatenar += '<th>FH_NAC</th>';
		concatenar += '<th>ESCOLARIDAD</th></tr>';
		for (var i = 0; i < tester.length; i++) {
			concatenar += '<tr><td>' + tester[i].ambito + '</td>';
			concatenar += '<td>' + tester[i].cve_ent + '</td>';
			concatenar += '<td>' + tester[i].nom_ent + '</td>';
			concatenar += '<td>' + tester[i].cve_mun + '</td>';
			concatenar += '<td>' + tester[i].nom_mun + '</td>';
			concatenar += '<td>' + tester[i].nom_depen + '</td>';
			concatenar += '<td>' + tester[i].fn_snsp + '</td>';
			concatenar += '<td>' + tester[i].inst_sp + '</td>';
			concatenar += '<td>' + tester[i].nom_corp + '</td>';
			concatenar += '<td>' + tester[i].nom_puesto_tab + '</td>';
			concatenar += '<td>' + tester[i].nom_puesto_fun + '</td>';
			concatenar += '<td>' + tester[i].cat_tabular + '</td>';
			concatenar += '<td>' + tester[i].cat_cnca + '</td>';
			concatenar += '<td>' + tester[i].crit_puesto_cnca + '</td>';
			concatenar += '<td>' + tester[i].jer_puesto + '</td>';
			concatenar += '<td>' + tester[i].nombre + '</td>';
			concatenar += '<td>' + tester[i].primer_ap + '</td>';
			concatenar += '<td>' + tester[i].segundo_ap + '</td>';
			concatenar += '<td>' + tester[i].rfc + '</td>';
			concatenar += '<td>' + tester[i].curp + '</td>';
			concatenar += '<td>' + tester[i].cuip + '</td>';
			concatenar += '<td>' + tester[i].no_empl + '</td>';
			concatenar += '<td>' + tester[i].percep_bruta + '</td>';
			concatenar += '<td>' + tester[i].cesp + '</td>';
			concatenar += '<td>' + tester[i].see + '</td>';
			concatenar += '<td>' + tester[i].cecc + '</td>';
			concatenar += '<td>' + tester[i].uecs + '</td>';
			concatenar += '<td>' + tester[i].udai + '</td>';
			concatenar += '<td>' + tester[i].spa_ui + '</td>';
			concatenar += '<td>' + tester[i].spa_uo + '</td>';
			concatenar += '<td>' + tester[i].spa_uat + '</td>';
			concatenar += '<td>' + tester[i].spa_otra + '</td>';
			concatenar += '<td>' + tester[i].c4 + '</td>';
			concatenar += '<td>' + tester[i].aic + '</td>';
			concatenar += '<td>' + tester[i].otra_ads + '</td>';
			concatenar += '<td>' + tester[i].genero + '</td>';
			concatenar += '<td>' + tester[i].fh_nac + '</td>';
			concatenar += '<td>' + tester[i].escolaridad + '</td></tr>';
		}
		if (tester.length==0) {
			concatenar += '<tr><td colspan="38" class="text-left">No se encontraron resultados</td></tr>';
		}
		concatenar +='</table>';
		$("#resultado").append(concatenar);
		document.getElementById('reporteCony').click();
		$.unblockUI();
		alerta('success','Se encontraron '+tester.length+' registros')
	}, 200);

}


function sisepuede(){
	var arregloAnioMeses=[];
	var anios=getAnio();
	var valores=[];
	for (var i = 0; i < anios.length; i++) {
		var meses=getMes(anios[i].anio);
		for (var o = 0; o < meses.length; o++) {
			valores.push(meses[o].mes);
		}
		arregloAnioMeses.push({"anio":anios[i].anio, "meses":valores});
	}
	return arregloAnioMeses;
}





var arregloFechas=[];
function reporteBajas(){
	$("#tablereporteCony").remove();
	var concatenar="";
	var corporaciones=[];
	var arregloBajas=[];

	mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	$.blockUI({ message: '<h1>Generando reporte por favor espere...</h1>' });
	setTimeout(function(){
	arregloFechas=sisepuede();
	concatenar += '<table id="tablereporteCony" class="ocultar table table-striped table-bordered table-hover table-condensed">';
	for (var a = 0; a < arregloFechas.length; a++) {
		console.log(arregloFechas[a].anio);
		for (var e = 0; e < arregloFechas[a].meses.length; e++) {
			console.log(arregloFechas[a].meses[e]);


			corporaciones=CorporacionesBajas();

			for (var x = 0; x < corporaciones.length; x++) {
				arregloBajas=bajasArray(corporaciones[x].nom_corp,arregloFechas[a].anio,arregloFechas[a].meses[e]);

				// for (var u = 0; u < arregloFechas.length; u++) {
				if (arregloBajas.length!=0) {
					concatenar+= '<tr><th colspan="4" style="background:white; color:black; text-align: center;">'+corporaciones[x].nom_corp+' '+mes[arregloFechas[a].meses[e]-2] +' del '+arregloFechas[a].anio+'</th></tr>';
					concatenar+= '<tr><th style="background:gray;">Nombre</th><th style="background:gray;">Primer Apellido</th><th style="background:gray;">Segundo Apellido</th><th style="background:gray;">CUIP</th></tr>';

				}


					for (var o = 0; o < arregloBajas.length; o++) {
						concatenar+='<tr><td style="background:#69b844;">'+arregloBajas[o].nombre+'</td>';
						concatenar+='<td style="background:#69b844;">'+arregloBajas[o].primer_ap+'</td>';
						concatenar+='<td>'+arregloBajas[o].segundo_ap+'</td>';
						concatenar+='<td>'+arregloBajas[o].cuip+'</td></tr>';
					}
				if (arregloBajas.length!=0) {
					concatenar+= '<tr><th> </th></tr>';
					concatenar+= '<tr><td> </td></tr>';
				}
			}



		}
	}

	concatenar +='</table>';
	$("#resultado").append(concatenar);
	document.getElementById('reporteBajas').click();
	$.unblockUI();

	}, 200);

}
