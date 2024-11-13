 var puntaje = 0;
 var preguntas = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,";
 var pregunta_actual = 0;

	$(document).ready(function(){
		$("#puntos").html(puntaje);
           random();

    });

	function none(esto){
		puntaje = puntaje - 1;
        $(esto).css("background","red");
        $("#puntos").html(puntaje);
			//BORRAMOS LA PREGUNTA
			preguntas = preguntas.replace(pregunta_actual + ",","");
            setTimeout(function(){ random(); }, 1000);
        }
	
	function valido(pregunta){
		puntaje = puntaje + 1;
        $("#" + pregunta + "respuesta").css("background","green");
        $("#puntos").html(puntaje);
              //BORRAMOS LA PREGUNTA
        preguntas = preguntas.replace(pregunta + ",","");
			setTimeout(function(){ random(); }, 1000);
	}

    function random(){
              for(var i = 1;i <= 14; i++){
                $("#" + i).hide();
              }
              var rando = preguntas.split(",");
              var num = rando.length - 1;

              var operacion = Math.random() * (num - 0) + 0;

              var numero_random =  Math.floor(operacion);

              pregunta_actual = rando[numero_random];

              $("#" + pregunta_actual).show();
              var pregunta = $("#" + pregunta_actual + "pregunta").html();

              $("#recuadro").html(pregunta);

              if(num == 1){

                endgame();

              }



            }


            function endgame(){
			let elementHTML = "";
			let elementHTML = "<div data-role='popup' id='popupBasic'>";
              if(puntaje > 10){

			
              alert("GENIAL ! Obtuviste una puntuación de: " + puntaje + ". FELICITACIONES.");


              }else if(puntaje > 5){
                      elementHTML += "<h4>Buen Jugador...</h4>";
					  elementHTML += "Obtuviste una puntuación de: " + puntaje + ". Eres un Buen Jugador ! ";

              }else{
			  elementHTML += "<h4>Mal Jugador...</h4>";
			  elementHTML += "Obtuviste una puntuación de: " + puntaje + ". Debes de seguir mejorando ! " ;
              }
			      elementHTML += "</div>"; // cerramos el div con el contenido
				  //document.getElementById("content").innerHTML = elementHTML;
              location.href='index.html';
            }		
			 