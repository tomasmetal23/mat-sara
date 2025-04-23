window.onload = function () {
    /* Esta función se ejecuta una vez que la página web ha sido completamente cargada, 
	incluyendo todos sus recursos (imágenes, scripts, etc.).*/

    // Variables
    const IMAGENES = [
        'img/gottvsnew/1.jpg',
        'img/gottvsnew/2.jpg',
        'img/gottvsnew/3.jpg',
        'img/gottvsnew/4.jpg',
        'img/gottvsnew/5.jpg',
        'img/gottvsnew/6.jpg',
        'img/gottvsnew/7.jpg',
        'img/gottvsnew/8.jpg',
        'img/gottvsnew/9.jpg',
        'img/gottvsnew/10.jpg',
        'img/gottvsnew/11.jpg'
		 /* Este array "IMAGENES" contiene las rutas (strings) de las imágenes que se mostrarán en el carrusel.*/
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2200;
    let posicionActual = 0;
    let $imagen = document.querySelector('#imagen');
    let intervalo;


    /* Funcion que cambia la foto en la siguiente posicion */
    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /* Funcion que cambia la foto en la anterior posicion */
    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /* Funcion que actualiza la imagen de imagen dependiendo de posicionActual */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /* Activa el autoplay de la imagen */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    }

    /* Para el autoplay de la imagen  */
    function stopIntervalo() {
        clearInterval(intervalo);
    }

    renderizarImagen();
    // Inicia el autoplay del carrusel al cargar la página
    playIntervalo();
};
