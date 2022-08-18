<?php

class ControladorListadoNominal{


	/*=============================================
	MOSTRAR CATEGORIAS
	=============================================*/

	static public function ctrInsertarListadoNominal($no,$no_de_registro,$ambito,$cve_ent,$nom_ent,$cve_mun,$nom_mun,$nom_depen,$fn_snsp,$inst_sp,$nom_corp,$modalidad_autorizada,$nom_puesto_tab,$nom_puesto_fun,$cat_tabular,$cat_cnca,$crit_puesto_cnca,$jer_puesto,$nombre,$primer_ap,$segundo_ap,$rfc,$curp,$cuip,$no_empl,$percep_bruta,$cesp,$see,$cecc,$uecs,$udai,$spa_ui,$spa_uo,$spa_uat,$spa_otra,$c4,$aic,$otra_ads,$genero,$fh_ingreso,$fh_nac,$escolaridad,$direccion_del_elemento,$num_telefonico){

		$tabla = "privada_bd";

		$respuesta = ModeloListadoNominal::mdlInsertarListadoNominal($tabla,$no,$no_de_registro,$ambito,$cve_ent,$nom_ent,$cve_mun,$nom_mun,$nom_depen,$fn_snsp,$inst_sp,$nom_corp,$modalidad_autorizada,$nom_puesto_tab,$nom_puesto_fun,$cat_tabular,$cat_cnca,$crit_puesto_cnca,$jer_puesto,$nombre,$primer_ap,$segundo_ap,$rfc,$curp,$cuip,$no_empl,$percep_bruta,$cesp,$see,$cecc,$uecs,$udai,$spa_ui,$spa_uo,$spa_uat,$spa_otra,$c4,$aic,$otra_ads,$genero,$fh_ingreso,$fh_nac,$escolaridad,$direccion_del_elemento,$num_telefonico);

		return $respuesta;

	}

static public function ctrNoEncontrados($cadena, $nom_corp/*,$cadenacurp*/){

		$tabla = "privada_bd";
		// $nom_corp = "AALCES SEGURIDAD S.C.";

	$respuesta = ModeloListadoNominal::mdlNoEncontrados($cadena, $nom_corp/*,$cadenacurp*/);

		return $respuesta;


	}



	static public function ctrBajasDb($id,$nombre,$primer_ap,$segundo_ap){

		$tabla = "privada_bd";

		$respuesta = ModeloListadoNominal::mdlBajasDb($id,$nombre,$primer_ap,$segundo_ap);

		return $respuesta;


	}

	static public function ctrLlenarEmpresas($ambito){

		$tabla = "privada_bd";

		$respuesta = ModeloListadoNominal::mdlLlenarEmpresas($ambito);

		return $respuesta;


	}


}
