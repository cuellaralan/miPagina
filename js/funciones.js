function CargarInput(nombre,correo,clave)
{
		$("#nombre").val(nombre);
		$("#correo").val(correo);
		$("#clave").val(clave);
}

function Loguear()
{
		var varNombre=$("#nombre").val();
		var varClave=$("#clave").val();
		var varCorreo=$("#correo").val();
		
$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	

	var funcionAjax=$.ajax({
		url:"../nexo.php",
		type:"post",
		data:{
			nombre:varNombre,
			correo:varCorreo,
			clave:varClave
		}
	});


	funcionAjax.done(function(retorno){
		//alert(retorno);
			if(retorno!="No-esta"){	
				MostarBotones();
				MostarLogin();

				$("#BotonLogin").html("Ir a salir<br>-Sesión-");
				$("#BotonLogin").addClass("btn btn-danger");				
				$("#usuario").val("usuario: "+retorno);
			}else
			{
				$("#informe").html("usuario o clave incorrecta");	
				$("#formLogin").addClass("animated bounceInLeft");
			}
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
}