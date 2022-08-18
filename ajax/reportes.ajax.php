<?php
require_once "../controladores/reportes.controlador.php";
require_once "../modelos/reportes.modelo.php";

class AjaxReportes{

	// public $ambito;

	public function ajaxReportesCony(){
		$ambito = $this->ambito;
		$fecha_ini = $this->fecha_ini;
		$fecha_fin = $this->fecha_fin;
		$respuesta = ControladorReportes::ctrReportesCony($ambito,$fecha_ini,$fecha_fin);
		echo json_encode($respuesta);
	}

	public function ajaxCorporacionesBajas(){
		$ambitoBajas = $this->ambitoBajas;
		$respuesta = ControladorReportes::ctrCorporacionesBajas($ambitoBajas);
		echo json_encode($respuesta);
	}

	public function ajaxReporteBajas(){
		$nom_corp = $this->nom_corp;
		$anio = $this->anio;
		$mes = $this->mes;
		$respuesta = ControladorReportes::ctrReporteBajas($nom_corp,$anio,$mes);
		echo json_encode($respuesta);
	}
	public function ajaxGetMes(){
		$anio = $this->anio;
		$respuesta = ControladorReportes::ctrGetMes($anio);
		echo json_encode($respuesta);
	}
	public function ajaxGetAnio(){
		$getanio = $this->getanio;
		$respuesta = ControladorReportes::ctrGetAnio();
		echo json_encode($respuesta);
	}


}


//activadores
if(isset($_POST["ambito"])){
	$reportes = new AjaxReportes();
	$reportes -> ambito = $_POST["ambito"];
	$reportes -> fecha_ini = $_POST["fecha_ini"];
	$reportes -> fecha_fin = $_POST["fecha_fin"];
	$reportes -> ajaxReportesCony();
}

if(isset($_POST["ambitoBajas"])){
	$reportes = new AjaxReportes();
	$reportes -> ambitoBajas = $_POST["ambitoBajas"];
	$reportes -> ajaxCorporacionesBajas();
}

if(isset($_POST["nom_corp"])){
	$reportes = new AjaxReportes();
	$reportes -> nom_corp = $_POST["nom_corp"];
	$reportes -> anio = $_POST["anio"];
	$reportes -> mes = $_POST["mes"];
	$reportes -> ajaxReporteBajas();
}

if(isset($_POST["anio2"])){
	$reportes = new AjaxReportes();
	$reportes -> anio = $_POST["anio2"];
	$reportes -> ajaxGetMes();
}

if(isset($_POST["getanio"])){
	$reportes = new AjaxReportes();
	$reportes -> getanio = $_POST["getanio"];
	$reportes -> ajaxGetAnio();
}
