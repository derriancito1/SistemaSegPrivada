<?php

require_once "conexion.php";

class ModeloListadoNominal{

	/*=============================================
	CREAR CATEGORIA
	=============================================*/

	static public function mdlInsertarListadoNominal($tabla, $no,$no_de_registro,$ambito,$cve_ent,$nom_ent,$cve_mun,$nom_mun,$nom_depen,$fn_snsp,$inst_sp,$nom_corp,$modalidad_autorizada,$nom_puesto_tab,$nom_puesto_fun,$cat_tabular,$cat_cnca,$crit_puesto_cnca,$jer_puesto,$nombre,$primer_ap,$segundo_ap,$rfc,$curp,$cuip,$no_empl,$percep_bruta,$cesp,$see,$cecc,$uecs,$udai,$spa_ui,$spa_uo,$spa_uat,$spa_otra,$c4,$aic,$otra_ads,$genero,$fh_ingreso,$fh_nac,$escolaridad,$direccion_del_elemento,$num_telefonico)
	{

		// $stmt = Conexion::conectar()->prepare("INSERT INTO $tabla(categoria) VALUES (:categoria)");
		$stmt = Conexion::conectar()->prepare("CALL insertar(:no,:no_de_registro,:ambito,:cve_ent,:nom_ent,:cve_mun,:nom_mun,:nom_depen,:fn_snsp,:inst_sp,:nom_corp,:modalidad_autorizada,:nom_puesto_tab,:nom_puesto_fun,:cat_tabular,:cat_cnca,:crit_puesto_cnca,:jer_puesto,:nombre,:primer_ap,:segundo_ap,:rfc,:curp,:cuip,:no_empl,:percep_bruta,:cesp,:see,:cecc,:uecs,:udai,:spa_ui,:spa_uo,:spa_uat,:spa_otra,:c4,:aic,:otra_ads,:genero,:fh_ingreso,:fh_nac,:escolaridad,:direccion_del_elemento,:num_telefonico)");

		$stmt->bindParam(":no", $no, PDO::PARAM_STR);
		$stmt->bindParam(":no_de_registro", $no_de_registro, PDO::PARAM_STR);
		$stmt->bindParam(":ambito", $ambito, PDO::PARAM_STR);
		$stmt->bindParam(":cve_ent", $cve_ent, PDO::PARAM_STR);
		$stmt->bindParam(":nom_ent", $nom_ent, PDO::PARAM_STR);
		$stmt->bindParam(":cve_mun", $cve_mun, PDO::PARAM_STR);
		$stmt->bindParam(":nom_mun", $nom_mun, PDO::PARAM_STR);
		$stmt->bindParam(":nom_depen", $nom_depen, PDO::PARAM_STR);
		$stmt->bindParam(":fn_snsp", $fn_snsp, PDO::PARAM_STR);
		$stmt->bindParam(":inst_sp", $inst_sp, PDO::PARAM_STR);
		$stmt->bindParam(":nom_corp", $nom_corp, PDO::PARAM_STR);
		$stmt->bindParam(":modalidad_autorizada", $modalidad_autorizada, PDO::PARAM_STR);
		$stmt->bindParam(":nom_puesto_tab", $nom_puesto_tab, PDO::PARAM_STR);
		$stmt->bindParam(":nom_puesto_fun", $nom_puesto_fun, PDO::PARAM_STR);
		$stmt->bindParam(":cat_tabular", $cat_tabular, PDO::PARAM_STR);
		$stmt->bindParam(":cat_cnca", $cat_cnca, PDO::PARAM_STR);
		$stmt->bindParam(":crit_puesto_cnca", $crit_puesto_cnca, PDO::PARAM_STR);
		$stmt->bindParam(":jer_puesto", $jer_puesto, PDO::PARAM_STR);
		$stmt->bindParam(":nombre", $nombre, PDO::PARAM_STR);
		$stmt->bindParam(":primer_ap", $primer_ap, PDO::PARAM_STR);
		$stmt->bindParam(":segundo_ap", $segundo_ap, PDO::PARAM_STR);
		$stmt->bindParam(":rfc", $rfc, PDO::PARAM_STR);
		$stmt->bindParam(":curp", $curp, PDO::PARAM_STR);
		$stmt->bindParam(":cuip", $cuip, PDO::PARAM_STR);
		$stmt->bindParam(":no_empl", $no_empl, PDO::PARAM_STR);
		$stmt->bindParam(":percep_bruta", $percep_bruta, PDO::PARAM_STR);
		$stmt->bindParam(":cesp", $cesp, PDO::PARAM_STR);
		$stmt->bindParam(":see", $see, PDO::PARAM_STR);
		$stmt->bindParam(":cecc", $cecc, PDO::PARAM_STR);
		$stmt->bindParam(":uecs", $uecs, PDO::PARAM_STR);
		$stmt->bindParam(":udai", $udai, PDO::PARAM_STR);
		$stmt->bindParam(":spa_ui", $spa_ui, PDO::PARAM_STR);
		$stmt->bindParam(":spa_uo", $spa_uo, PDO::PARAM_STR);
		$stmt->bindParam(":spa_uat", $spa_uat, PDO::PARAM_STR);
		$stmt->bindParam(":spa_otra", $spa_otra, PDO::PARAM_STR);
		$stmt->bindParam(":c4", $c4, PDO::PARAM_STR);
		$stmt->bindParam(":aic", $aic, PDO::PARAM_STR);
		$stmt->bindParam(":otra_ads", $otra_ads, PDO::PARAM_STR);
		$stmt->bindParam(":genero", $genero, PDO::PARAM_STR);
		$stmt->bindParam(":fh_ingreso", $fh_ingreso, PDO::PARAM_STR);
		$stmt->bindParam(":fh_nac", $fh_nac, PDO::PARAM_STR);
		$stmt->bindParam(":escolaridad", $escolaridad, PDO::PARAM_STR);
		$stmt->bindParam(":direccion_del_elemento", $direccion_del_elemento, PDO::PARAM_STR);
		$stmt->bindParam(":num_telefonico", $num_telefonico, PDO::PARAM_STR);




		$stmt -> execute();


		return $stmt -> fetch();

		$stmt->close();
		$stmt = null;

	}

static public function mdlNoEncontrados($cadena, $nom_corp/*, $cadenacurp*/){

		$variable = "SELECT * FROM privada_bd WHERE id NOT IN"."(".$cadena.") and activo=1 and nom_corp='".$nom_corp."';";
		// $variable = "SELECT * FROM privada_bd WHERE id NOT IN"."(".$cadena.") and curp NOT IN"."(".$cadenacurp.") and activo=1 and nom_corp='".$nom_corp."';";
		// $stmt = Conexion::conectar()->prepare("SELECT * FROM privada_bd where id not in(:cadena);");
		$stmt = Conexion::conectar()->prepare($variable);

		$stmt -> execute();

		return $stmt -> fetchAll();

		$stmt->close();
		$stmt = null;

	}


	static public function mdlBajasdb($id,$nombre,$primer_ap,$segundo_ap){

		$stmt = Conexion::conectar()->prepare("CALL bajasDb(:id,:nombre,:primer_ap,:segundo_ap)");

		$stmt->bindParam(":id", $id, PDO::PARAM_STR);
		$stmt->bindParam(":nombre", $nombre, PDO::PARAM_STR);
		$stmt->bindParam(":primer_ap", $primer_ap, PDO::PARAM_STR);
		$stmt->bindParam(":segundo_ap", $segundo_ap, PDO::PARAM_STR);

		$stmt -> execute();

		return $stmt -> fetch();

		$stmt->close();
		$stmt = null;

	}

	static public function mdlLlenarEmpresas($ambito){

		// $stmt = Conexion::conectar()->prepare("CALL consultaNoEncontrados(:cadena)");
		// $variable = "SELECT * FROM privada_bd WHERE id NOT IN"."(".$cadena.") and activo=1 and nom_corp='".$empresa."';";
		$variable = "SELECT nom_corp FROM `privada_bd` WHERE ambito='".$ambito."' GROUP BY nom_corp;";

		// $stmt = Conexion::conectar()->prepare("SELECT * FROM privada_bd where id not in(:cadena);");
		$stmt = Conexion::conectar()->prepare($variable);

		$stmt -> execute();

		return $stmt -> fetchAll();

		$stmt->close();
		$stmt = null;

	}

}
