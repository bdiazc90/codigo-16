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
// $(function () {
//   // el acceder de esta forma a los elementos nos da acceso a las funciones de jquery
//   $("h1").css("color", "red");
//   // multiples estilos
//   $("h1").css({
//     "background-color": "blue",
//     "font-size": "100px",
//     "font-family": "Helvetica",
//   });
// });

//* En JS puro IIFE
// (function () {
//   // hacemos algo
// })();

const inputTask = $("#input-task");
const btnTask = $("#btn-task");
const sectionTask = $("#section-task");

// btnTask.on("click", function () {});
btnTask.click(function () {
  const text = inputTask.val();

  inputTask.val("");
  inputTask.focus();

  // para ocultar un elemento usamos hide()
  // hide() => para ocultar
  // show() => para mostrar
  // inputTask.fadeOut(2000);

  // sectionTask.append(`<h1>${text}</h1>`);
  // esto es crear un elemento div
  $("<div>", {
    html: `
      <input type="checkbox"><span>${text}</span>
      <button>✏️</button>
      <button>👁</button>
      <button>❌</button>
    `,
  })
    .appendTo(sectionTask)
    .hide()
    .fadeIn(1000);

  $("div").hover(
    // este estilo se va a mantener
    function () {
      $(this).css("background-color", "#cdcdcd");
    },
    // si ponemos otra funcion separa por , entendera que se ejecutara
    // cuando saque el mouse el element
    function () {
      $(this).css("background-color", "#fff");
    }
  );
});
