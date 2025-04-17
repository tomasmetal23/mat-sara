const preguntas = [
  {
    pregunta: "img/level5/p1.png",
    respuestas: [
      "img/level5/r1_1.png",
      "img/level5/r1_2.png",
      "img/level5/r1_3.png",
      "img/level5/r1_4.png",
    ],
    respuestaCorrecta: "img/level5/r1_1.png",
  },
  {
    pregunta: "img/level5/p2.png",
    respuestas: [
      "img/level5/r2_1.png",
      "img/level5/r2_2.png",
      "img/level5/r2_3.png",
      "img/level5/r2_4.png",
    ],
    respuestaCorrecta: "img/level5/r2_3.png",
  },
  {
    pregunta: "img/level5/p3.png",
    respuestas: [
      "img/level5/r3_1.png",
      "img/level5/r3_2.png",
      "img/level5/r3_3.png",
      "img/level5/r3_4.png",
    ],
    respuestaCorrecta: "img/level5/r3_2.png",
  },/*
  
    {
    pregunta: "img/level5/p4.png",
    respuestas: [
      "img/level5/r4_1.png",
      "img/level5/r4_2.png",
      "img/level5/r4_3.png",
      "img/level5/r4_4.png",
    ],
    respuestaCorrecta: "img/level5/r3_3.png",
  },
  
  {
    pregunta: "img/level5/p5.png",
    respuestas: [
      "img/level5/r5_1.png",
      "img/level5/r5_2.png",
      "img/level5/r5_3.png",
      "img/level5/r5_4.png",
    ],
    respuestaCorrecta: "img/level5/r5_2.png",
  },*/
];

let puntuacion = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let preguntasSinUsar = [...preguntas];
let puntuacionMasAlta5 = localStorage.getItem("puntuacionMasAlta5") || 0;

document.addEventListener("DOMContentLoaded", () => {
  const preguntaElemento = document.getElementById("pregunta");
  const respuestasElemento = document.getElementById("respuestas");
  const resultadoElemento = document.getElementById("resultado");
  const puntuacionElemento = document.getElementById("puntuacion");
  const puntuacionMasAlta5Elemento = document.getElementById("puntuacion-alta");
  const siguienteBoton = document.getElementById("siguiente");
  const reiniciarBoton = document.getElementById("reiniciar");

  if (puntuacionMasAlta5Elemento) {
    puntuacionMasAlta5Elemento.textContent = `Puntuación más alta: ${puntuacionMasAlta5}`;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function mostrarPregunta() {
    console.log("Mostrar pregunta, preguntas restantes:", preguntasSinUsar.length);
    if (preguntasSinUsar.length === 0) {
      juegoTerminado();
      return;
    }

    const indiceAleatorio = Math.floor(Math.random() * preguntasSinUsar.length);
    const preguntaActual = preguntasSinUsar[indiceAleatorio];

    preguntaElemento.querySelector("img").src = preguntaActual.pregunta;

    const respuestasMezcladas = shuffleArray(preguntaActual.respuestas);
    const elementosRespuesta = respuestasElemento.querySelectorAll("img");

    for (let i = 0; i < elementosRespuesta.length; i++) {
      elementosRespuesta[i].src = respuestasMezcladas[i];
      elementosRespuesta[i].alt = `Respuesta ${i + 1}`;
      elementosRespuesta[i].dataset.correcta =
        respuestasMezcladas[i] === preguntaActual.respuestaCorrecta;

      elementosRespuesta[i].removeEventListener("click", verificarRespuesta);
      elementosRespuesta[i].addEventListener("click", verificarRespuesta);
    }

    preguntasSinUsar.splice(indiceAleatorio, 1);
  }

  function verificarRespuesta(evento) {
    const esCorrecta = evento.target.dataset.correcta === "true";
    const elementosRespuesta = respuestasElemento.querySelectorAll("img");

    if (esCorrecta) {
      resultadoElemento.textContent = "¡Correcto!";
      resultadoElemento.classList.add("correcto");
      resultadoElemento.classList.remove("incorrecto");
      puntuacion += 3;
      respuestasCorrectas++;
      puntuacionElemento.textContent = `Puntuación: ${puntuacion}`;
      setTimeout(mostrarPregunta, 1000);
    } else {
      resultadoElemento.textContent = "¡Incorrecto!";
      resultadoElemento.classList.add("incorrecto");
      resultadoElemento.classList.remove("correcto");

      puntuacion -= 3;
      if (puntuacion < 0) {
        puntuacion = 0;
      }
      puntuacionElemento.textContent = `Puntuación: ${puntuacion}`;

      setTimeout(() => {
        respuestasIncorrectas++;
        mostrarPregunta();
      }, 1000);
    }
    for (let i = 0; i < elementosRespuesta.length; i++) {
        elementosRespuesta[i].removeEventListener("click", verificarRespuesta);
    }
  }

  function juegoTerminado() {
    let mensaje = `¡Has respondido todas las preguntas! <br> Correctas: ${respuestasCorrectas}, Incorrectas: ${respuestasIncorrectas}.`;

    if (puntuacion >= 10) {
      mensaje += "<br> ¡Excelente! Eres un verdadero experto.";
    } else if (puntuacion >= 5) {
      mensaje += "<br> ¡Muy bien! Tienes un gran conocimiento.";
    } else {
      mensaje += "<br> ¡Sigue intentando! Con un poco más de práctica lo lograrás.";
    }

    resultadoElemento.innerHTML = mensaje;
    resultadoElemento.classList.add("correcto");
    resultadoElemento.classList.remove("incorrecto");

    if (puntuacion > puntuacionMasAlta5) {
      puntuacionMasAlta5 = puntuacion;
      localStorage.setItem("puntuacionMasAlta5", puntuacionMasAlta5);
      if (puntuacionMasAlta5Elemento) {
        puntuacionMasAlta5Elemento.textContent = `¡Nueva puntuación más alta!: ${puntuacionMasAlta5}`;
      }
    } else if (puntuacionMasAlta5Elemento) {
      puntuacionMasAlta5Elemento.textContent = `Puntuación más alta: ${puntuacionMasAlta5}`;
    }
  }

  function reiniciarJuego() {
    console.log("Reiniciar juego");
    puntuacion = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    puntuacionElemento.textContent = `Puntuación: ${puntuacion}`;
    resultadoElemento.textContent = "";
    resultadoElemento.classList.remove("correcto", "incorrecto");
    preguntasSinUsar = [...preguntas];
    mostrarPregunta();
  }

  mostrarPregunta();

  if (siguienteBoton) {
    siguienteBoton.addEventListener("click", mostrarPregunta);
    siguienteBoton.style.display = "none";
  }

  if (reiniciarBoton) {
    reiniciarBoton.addEventListener("click", reiniciarJuego);
  }
});