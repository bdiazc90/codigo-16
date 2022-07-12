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
  console.log(text);

  // sectionTask.append(`<h1>${text}</h1>`);
  // esto es crear un elemento div
  $("<div>", {
    html: `
      <input type="checkbox"><span>${text}</span>
      <button>✏️</button>
      <button>👁</button>
      <button>❌</button>
    `,
  }).appendTo(sectionTask);
});
