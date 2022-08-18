<?php

class ControladorReportes{


	static public function ctrReportesCony($ambito,$fecha_ini,$fecha_fin){
		$tabla = "privada_bd";
		$respuesta = ModeloReportes::mdlReportesCony($ambito,$fecha_ini,$fecha_fin);
		return $respuesta;
	}

	static public function ctrCorporacionesBajas($ambitoBajas){
		$tabla = "privada_bd";
		$respuesta = ModeloReportes::mdlCorporacionesBajas($ambitoBajas);
		return $respuesta;
	}

	static public function ctrReporteBajas($nom_corp,$anio,$mes){
		$tabla = "privada_bd";
		$respuesta = ModeloReportes::mdlReporteBajas($nom_corp,$anio,$mes);
		return $respuesta;
	}

	static public function ctrGetMes($anio){
		$tabla = "privada_bd";
		$respuesta = ModeloReportes::mdlGetMes($anio);
		return $respuesta;
	}
	static public function ctrGetAnio(){
		$tabla = "privada_bd";
		$respuesta = ModeloReportes::mdlGetAnio();
		return $respuesta;
	}


}
