<?php

class Conexion{

	static public function conectar(){
		if ($_SERVER["HTTP_HOST"]=="localhost:8080" || $_SERVER["HTTP_HOST"]=="localhost" || $_SERVER["HTTP_HOST"]=="XXX") {
			$link = new PDO("mysql:host=localhost;dbname=XXX",
										"XXX",
										"XXX");
		}elseif ($_SERVER["HTTP_HOST"]=="XXX") {
			$link = new PDO("mysql:host=localhost;dbname=XXX",
				            "XXX",
				            "XXX");
		}

		$link->exec("set names utf8");

		return $link;

	}

}
