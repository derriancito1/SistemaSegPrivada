<?php

require_once "conexion.php";

class ModeloReportes{


	static public function mdlReportesCony($ambito,$fecha_ini,$fecha_fin){

		$stmt = Conexion::conectar()->prepare("CALL reporteCony(:ambito,:fecha_in,:fecha_fin)");

		$stmt->bindParam(":ambito", $ambito, PDO::PARAM_STR);
		if ($fecha_ini=="") {
			$fecha_ini = null;
			$stmt->bindParam(":fecha_in", $fecha_ini, PDO::PARAM_NULL);
		}else {
			$stmt->bindParam(":fecha_in", $fecha_ini, PDO::PARAM_STR);
		}

		if ($fecha_fin=="") {
			$fecha_fin = null;
			$stmt->bindParam(":fecha_fin", $fecha_fin, PDO::PARAM_NULL);
		}else {
			$stmt->bindParam(":fecha_fin", $fecha_fin, PDO::PARAM_STR);
		}

		$stmt -> execute();

		return $stmt -> fetchAll();

		$stmt->close();
		$stmt = null;
	}

	static public function mdlCorporacionesBajas($ambitoBajas){

		$stmt = Conexion::conectar()->prepare("CALL corporacionesBajas(:ambitoBajas)");
		$stmt->bindParam(":ambitoBajas", $ambitoBajas, PDO::PARAM_STR);

		$stmt -> execute();
		return $stmt -> fetchAll();
		$stmt->close();
		$stmt = null;
	}

	static public function mdlReporteBajas($nom_corp,$anio,$mes){

		$stmt = Conexion::conectar()->prepare("CALL reporteBajas(:nom_corp,:anio,:mes)");
		$stmt->bindParam(":nom_corp", $nom_corp, PDO::PARAM_STR);
		$stmt->bindParam(":anio", $anio, PDO::PARAM_STR);
		$stmt->bindParam(":mes", $mes, PDO::PARAM_STR);

		$stmt -> execute();
		return $stmt -> fetchAll();
		$stmt->close();
		$stmt = null;
	}


	static public function mdlGetMes($anio){
		$stmt = Conexion::conectar()->prepare("CALL getMes(:anio)");
		$stmt->bindParam(":anio", $anio, PDO::PARAM_STR);

		$stmt -> execute();
		return $stmt -> fetchAll();
		$stmt->close();
		$stmt = null;
	}

	static public function mdlGetAnio(){
		$stmt = Conexion::conectar()->prepare("CALL getAnio()");
		// $stmt->bindParam(":anio", $anio, PDO::PARAM_STR);

		$stmt -> execute();
		return $stmt -> fetchAll();
		$stmt->close();
		$stmt = null;
	}
}
