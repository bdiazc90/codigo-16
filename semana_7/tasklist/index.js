// document.querySelector
// jquery

/* $('element')
Ejemplo
 h1
 $('h1')
 div
 $('div')

 id="container"
 $('#container')

 class="input-nombre"
 $('.input-nombre')
*/

//* Nota: Esta funcion que empieza con $(function) se
//* ejecuta cuando la pagina web inicia
//* Esto es solo en JQUERY
$(function () {
  // el acceder de esta forma a los elementos nos da acceso a las funciones de jquery
  $("h1").css("color", "red");
  // multiples estilos
  $("h1").css({
    "background-color": "blue",
    "font-size": "100px",
    "font-family": "Helvetica",
  });
});

//* En JS puro IIFE
// (function () {
//   // hacemos algo
// })();
