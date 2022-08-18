<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest')
{
    $empresa =$_POST["empresa"];
    $file= $empresa." ".date('Y').".xlsx";
    $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    // $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");

    $fecha= $meses[date('n')-1]. " del ".date('Y');
    // echo $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') ;

    $direccion= "files/".$fecha."/";
    $ambito =$_POST["ambito"]."/";

    if(!is_dir($direccion))mkdir($direccion, 0777);
    if(!is_dir($direccion.$ambito))mkdir($direccion.$ambito, 0777);

    if ($file && move_uploaded_file($_FILES['archivo']['tmp_name'],$direccion.$ambito.$file))
    {
       sleep(3);
       echo $direccion.$ambito.$file;
    }
}else{
    throw new Exception("Error Processing Request", 1);
}
