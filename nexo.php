<?php 
require_once("clases/AccesoDatos.php");
require_once("clases/cd.php");

$queHago=$_POST['queHacer'];

switch ($queHago) {
	case 'TraerCD':
			//$cd = cd::TraerUnCd($_POST['id']);		
			//echo json_encode($cd) ;
			echo "fernando";

		break;
	default:
		# code...
		break;
}

 ?>