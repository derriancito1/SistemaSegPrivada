<?php

require_once "../controladores/listado-nominal.controlador.php";
require_once "../modelos/listado-nominal.modelo.php";

class AjaxListadoNominal{

	/*=============================================
	EDITAR CATEGORÍA
	=============================================*/

	public $FirstName;

	public function ajaxInsertarListadoNominal(){

		$no = $this->no;
		$no_de_registro = $this->no_de_registro;
		$ambito = $this->ambito;
		$cve_ent = $this->cve_ent;
		$nom_ent = $this->nom_ent;
		$cve_mun = $this->cve_mun;
		$nom_mun = $this->nom_mun;
		$nom_depen = $this->nom_depen;
		$fn_snsp = $this->fn_snsp;
		$inst_sp = $this->inst_sp;
		$nom_corp = $this->nom_corp;
		$modalidad_autorizada = $this->modalidad_autorizada;
		$nom_puesto_tab = $this->nom_puesto_tab;
		$nom_puesto_fun = $this->nom_puesto_fun;
		$cat_tabular = $this->cat_tabular;
		$cat_cnca = $this->cat_cnca;
		$crit_puesto_cnca = $this->crit_puesto_cnca;
		$jer_puesto = $this->jer_puesto;
		$nombre = $this->nombre;
		$primer_ap = $this->primer_ap;
		$segundo_ap = $this->segundo_ap;
		$rfc = $this->rfc;
		$curp = $this->curp;
		$cuip = $this->cuip;
		$no_empl = $this->no_empl;
		$percep_bruta = $this->percep_bruta;
		$cesp = $this->cesp;
		$see = $this->see;
		$cecc = $this->cecc;
		$uecs = $this->uecs;
		$udai = $this->udai;
		$spa_ui = $this->spa_ui;
		$spa_uo = $this->spa_uo;
		$spa_uat = $this->spa_uat;
		$spa_otra = $this->spa_otra;
		$c4 = $this->c4;
		$aic = $this->aic;
		$otra_ads = $this->otra_ads;
		$genero = $this->genero;
		$fh_ingreso = $this->fh_ingreso;
		$fh_nac = $this->fh_nac;
		$escolaridad = $this->escolaridad;

		$direccion_del_elemento = $this->direccion_del_elemento;
		$num_telefonico = $this->num_telefonico;

		$respuesta = ControladorListadoNominal::ctrInsertarListadoNominal($no,$no_de_registro,$ambito,$cve_ent,$nom_ent,$cve_mun,$nom_mun,$nom_depen,$fn_snsp,$inst_sp,$nom_corp,$modalidad_autorizada,$nom_puesto_tab,$nom_puesto_fun,$cat_tabular,$cat_cnca,$crit_puesto_cnca,$jer_puesto,$nombre,$primer_ap,$segundo_ap,$rfc,$curp,$cuip,$no_empl,$percep_bruta,$cesp,$see,$cecc,$uecs,$udai,$spa_ui,$spa_uo,$spa_uat,$spa_otra,$c4,$aic,$otra_ads,$genero,$fh_ingreso,$fh_nac,$escolaridad,$direccion_del_elemento,$num_telefonico);

		echo json_encode($respuesta, JSON_FORCE_OBJECT);
	}

	public function ajaxNoEncontrados(){

		$cadena = $this->cadena;
		$nom_corp = $this->nom_corp;
		// $cadenacurp = $this->cadenacurp;

	$respuesta = ControladorListadoNominal::ctrNoEncontrados($cadena, $nom_corp/*,$cadenacurp*/);

		echo json_encode($respuesta);
	}


	public function ajaxBajasDb(){

		$id = $this->id;
		$nombre = $this->nombre;
		$primer_ap = $this->primer_ap;
		$segundo_ap = $this->segundo_ap;

		$respuesta = ControladorListadoNominal::ctrBajasDb($id,$nombre,$primer_ap,$segundo_ap);

		echo $respuesta;
	}

	public function ajaxLlenarEmpresas(){

		$ambito = $this->ambito;

		$respuesta = ControladorListadoNominal::ctrLlenarEmpresas($ambito);

		echo json_encode($respuesta);
	}

}



/*=============================================
EDITAR CATEGORÍA
=============================================*/
if(isset($_POST["curp"])){

	$listado_nominal = new AjaxListadoNominal();
	$listado_nominal -> no = $_POST["no"];
	$listado_nominal -> no_de_registro = $_POST["no_de_registro"];
	$listado_nominal -> ambito = $_POST["ambito"];
	$listado_nominal -> cve_ent = $_POST["cve_ent"];
	$listado_nominal -> nom_ent = $_POST["nom_ent"];
	$listado_nominal -> cve_mun = $_POST["cve_mun"];
	$listado_nominal -> nom_mun = $_POST["nom_mun"];
	$listado_nominal -> nom_depen = $_POST["nom_depen"];
	$listado_nominal -> fn_snsp = $_POST["fn_snsp"];
	$listado_nominal -> inst_sp = $_POST["inst_sp"];
	$listado_nominal -> nom_corp = $_POST["nom_corp"];
	$listado_nominal -> modalidad_autorizada = $_POST["modalidad_autorizada"];
	$listado_nominal -> nom_puesto_tab = $_POST["nom_puesto_tab"];
	$listado_nominal -> nom_puesto_fun = $_POST["nom_puesto_fun"];
	$listado_nominal -> cat_tabular = $_POST["cat_tabular"];
	$listado_nominal -> cat_cnca = $_POST["cat_cnca"];
	$listado_nominal -> crit_puesto_cnca = $_POST["crit_puesto_cnca"];
	$listado_nominal -> jer_puesto = $_POST["jer_puesto"];
	$listado_nominal -> nombre = $_POST["nombre"];
	$listado_nominal -> primer_ap = $_POST["primer_ap"];
	$listado_nominal -> segundo_ap = $_POST["segundo_ap"];
	$listado_nominal -> rfc = $_POST["rfc"];
	$listado_nominal -> curp = $_POST["curp"];
	$listado_nominal -> cuip = $_POST["cuip"];
	$listado_nominal -> no_empl = $_POST["no_empl"];
	$listado_nominal -> percep_bruta = $_POST["percep_bruta"];
	$listado_nominal -> cesp = $_POST["cesp"];
	$listado_nominal -> see = $_POST["see"];
	$listado_nominal -> cecc = $_POST["cecc"];
	$listado_nominal -> uecs = $_POST["uecs"];
	$listado_nominal -> udai = $_POST["udai"];
	$listado_nominal -> spa_ui = $_POST["spa_ui"];
	$listado_nominal -> spa_uo = $_POST["spa_uo"];
	$listado_nominal -> spa_uat = $_POST["spa_uat"];
	$listado_nominal -> spa_otra = $_POST["spa_otra"];
	$listado_nominal -> c4 = $_POST["c4"];
	$listado_nominal -> aic = $_POST["aic"];
	$listado_nominal -> otra_ads = $_POST["otra_ads"];
	$listado_nominal -> genero = $_POST["genero"];
	$listado_nominal -> fh_ingreso = $_POST["fh_ingreso"];
	$listado_nominal -> fh_nac = $_POST["fh_nac"];
	$listado_nominal -> escolaridad = $_POST["escolaridad"];
	$listado_nominal -> direccion_del_elemento = $_POST["direccion_del_elemento"];
	$listado_nominal -> num_telefonico = $_POST["num_telefonico"];




	$listado_nominal -> ajaxInsertarListadoNominal();
}


if(isset($_POST["cadena"])){

	$listado_nominal = new AjaxListadoNominal();
	$listado_nominal -> cadena = $_POST["cadena"];
	$listado_nominal -> nom_corp = $_POST["nom_corp"];
	// $listado_nominal -> cadenacurp = $_POST["cadenacurp"];
	// $listado_nominal -> cadena =  json_decode($_POST["cadena"], true);
	$listado_nominal -> ajaxNoEncontrados();
}


if(isset($_POST["id"]) && isset($_POST["nombre"])){
	$listado_nominal = new AjaxListadoNominal();
	$listado_nominal -> id = $_POST["id"];
	$listado_nominal -> nombre = $_POST["nombre"];
	$listado_nominal -> primer_ap = $_POST["primer_ap"];
	$listado_nominal -> segundo_ap = $_POST["segundo_ap"];
	// $listado_nominal -> cadena =  json_decode($_POST["cadena"], true);
	$listado_nominal -> ajaxBajasDb();
}

if(isset($_POST["ambitointerno"])){

	$listado_nominal = new AjaxListadoNominal();
	$listado_nominal -> ambito = $_POST["ambitointerno"];
	// $listado_nominal -> cadena =  json_decode($_POST["cadena"], true);
	$listado_nominal -> ajaxLlenarEmpresas();
}
