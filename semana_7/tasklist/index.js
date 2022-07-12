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

//* En JS puro IIFE
// (function () {
//   // hacemos algo
// })();

const inputTask = $("#input-task");
const btnTask = $("#btn-task");
const sectionTask = $("#section-task");

$(function () {
  if (arrayTask.length > 0) {
    // aca iteremos el array y pintemos las tareas
    arrayTask.forEach((task) => {
      createInputTask(task.id, task.text, task.status);
    });
  }
});

// btnTask.on("click", function () {});
btnTask.click(function () {
  const text = inputTask.val();

  const task = storeTask(text);
  console.log("Task", task);

  inputTask.val("");
  inputTask.focus();

  createInputTask(task.id, task.text, task.status);

  // para ocultar un elemento usamos hide()
  // hide() => para ocultar
  // show() => para mostrar
  // inputTask.fadeOut(2000);

  // sectionTask.append(`<h1>${text}</h1>`);
  // esto es crear un elemento div
});

function deleteTask(element) {
  const container = $(element).parent();

  container.children("span").css({
    "text-decoration": "line-through",
  });

  const id = container.children("input").data("id");
  updateTask(id, "delete");
}

function editTask(element) {
  const container = $(element).parent();
  container.children().hide();
  container.append(
    `
    <input placeholder="editar tarea"/><button>✅</button>
    `
  );
}

function createInputTask(id, text, status) {
  $("<div>", {
    html: `
      <input data-id="${id}" type="checkbox"><span class="${status}">${text}</span>
      <button onclick="editTask(this)">✏️</button>
      <button>👁</button>
      <button onclick="deleteTask(this)">❌</button>
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
}
