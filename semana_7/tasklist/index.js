const inputTask = $("#input-task");
const btnTask = $("#btn-task");
const formTask = $("#form-task");
const form = document.querySelector("#form-task");
const sectionTask = $("#section-task");

$(function () {
  // vamos a obtener el queryString de la url
  const queryString = new URLSearchParams(window.location.search);
  const filter = queryString.get("filter"); // todo || done || delete

  console.log(filter);

  if (arrayTask.length > 0) {
    // aca iteremos el array y pintemos las tareas
    arrayTask.forEach((task) => {
      createInputTask(task.id, task.text, task.status);
    });

    if (filter) {
      const filterTask = arrayTask.filter((task) => task.status === filter);
      console.log(filterTask);

      const myModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );

      myModal.show();
    }
  }
});

formTask.submit(function (e) {
  e.preventDefault();
  inputTask.focus();
  //! checkValidity analiza los inputs y si tienen required y estan vacios
  //! esta funcion retorna false caso contrario esten lleno
  //* retorna true
  if (!form.checkValidity()) {
    // agregamos la clase was-validated al formulario
    // esto al ser agregado buscara los invalid-feedback y los mostrara
    form.classList.add("was-validated");
    return;
  }

  const text = inputTask.val();
  const task = storeTask(text);
  // console.log("Task", task);

  inputTask.val("");

  createInputTask(task.id, task.text, task.status);
});

function deleteTask(element) {
  const div_task = $(element).closest(".row");
  const id = div_task.data("id");
  div_task
    .find("label")
    .addClass("text-uppercase text-decoration-line-through");
  updateTask(id, "status", "delete");
}

function saveTask(element) {
  const div_task = $(element).closest(".row");
  const id = Number(div_task.attr("data-id"));
  const newText = div_task.find("input").val();
  updateTask(id, "text", newText);
  const task = arrayTask.find((task) => task.id === id);
  div_task.html(`
    <div class='col-6 col-sm-8 col-md-9'>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="check_${id}">
        <label class="form-check-label ${task.status}" for="check_${id}">
          ${task.text}
        </label>
      </div>
    </div>
    <div class='col-6 col-sm-4 col-md-3'>
      <button class='btn btn-light' onclick="editTask(this)">✏️</button>
      <button class='btn btn-light'>👁</button>
      <button class='btn btn-dark' onclick="deleteTask(this)">❌</button>
    </div>
  `);
}

function editTask(element) {
  const div_task = $(element).closest(".row");
  const id = div_task.attr("data-id");
  div_task.html(`
      <div class='col-6 col-sm-8 col-md-9'>
        <input placeholder="editar tarea" type="text" class="form-control"/>
      </div>
      <div class='col-6 col-sm-4 col-md-3'>
        <button class="btn btn-dark" onclick="saveTask(this)">✅</button>
      </div>
  `);
}

function createInputTask(id, text, status) {
  $("<div class='row my-2' data-id='" + id + "'>")
    .html(
      `
      <div class='col-6 col-sm-8 col-md-9'>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="check_${id}">
          <label class="form-check-label ${status}" for="check_${id}">
            ${text}
          </label>
        </div>
      </div>
      <div class='col-6 col-sm-4 col-md-3'>
        <button class='btn btn-light' onclick="editTask(this)">✏️</button>
        <button class='btn btn-light'>👁</button>
        <button class='btn btn-dark' onclick="deleteTask(this)">❌</button>
      </div>
    `
    )
    .appendTo(sectionTask)
    .hide()
    .fadeIn(1000);
}
