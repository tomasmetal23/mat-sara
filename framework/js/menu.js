$(document).ready(function () {
    // Esta función se ejecuta cuando el documento HTML ha sido completamente cargado y está listo.

    $("#accion").click(function(){
        // Cuando se hace clic en el elemento con el ID "accion":
        location.href="juego/index.html";
        // Redirige la ventana actual a la página "index.html" que se encuentra dentro de la carpeta "juego".
    })

    $("#contenido").click(function(){
        // Cuando se hace clic en el elemento con el ID "contenido":
        location.href="contenido.html";
        // Redirige la ventana actual a la página "contenido.html".
    })

    $("#tabla").click(function(){
        // Cuando se hace clic en el elemento con el ID "tabla":
        location.href="tabla.html";
        // Redirige la ventana actual a la página "tabla.html".
    })


    $("#aempresa").click(function(){
        // Cuando se hace clic en el elemento con el ID "aempresa":
        location.href = "calculadora.html";
        // Redirige la ventana actual a la página "calculadora.html".
    })
})

function redir(){
    // Esta función se llama "redir" y no recibe ningún argumento.
    location.href = "index.html";
    // Redirige la ventana actual a la página "index.html".
}

function ir(){
    // Esta función se llama "ir" y no recibe ningún argumento.
    window.open('https://www.superprof.es/apuntes/escolar/matematicas/calculo/integrales/', '_blank', 'location=no');
    // Abre una nueva ventana o pestaña del navegador.
    // El primer argumento es la URL que se abrirá.
    // El segundo argumento '_blank' indica que se debe abrir en una nueva ventana o pestaña.
    // El tercer argumento 'location=no' es una cadena de características de la ventana; en este caso, oculta la barra de ubicación.
}
  
  
