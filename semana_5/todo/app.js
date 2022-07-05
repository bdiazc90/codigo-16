// DOM:
const listTasks = document.querySelector("#list");
const inputTask = document.querySelector("#input_newtask");

inputTask.focus();

const arrayTasks = [];

// Funciones para las tareas:
function addTask() {
  if (inputTask.value == "") {
    alert("Ingresa un texto para la tarea.");
    return;
  }
  // Creamos la nueva tarea:
  const task = new Task(inputTask.value);
  // Agregamos al arreglo de tareas:
  arrayTasks.push(task);
  // Agregamos la tarea al DOM:
  document.querySelector(".form").before(task.createElement());
  inputTask.value = "";
  inputTask.focus();
}

function checkTask(checkbox) {
  if (checkbox.checked) {
    parentTask(checkbox).done();
    checkbox.setAttribute("disabled", true);
  }
}

function deleteTask(anchor) {
  parentTask(anchor).delete();
}

function updateTask(anchor) {
  const newText = prompt("Ingrese el nuevo nombre de su tarea");
  parentTask(anchor).update(newText);
}

/**
 * Recurden que parentTask busca en el array de tareas
 * el element por id
 */
function parentTask(element) {
  return arrayTasks.find(
    (task) => task.id == element.parentElement.parentElement.id
  );
}

const chxTaskDone = document.querySelector("#chx_task_done");
const chxTaskDelete = document.querySelector("#chx_task_delete");
const chxTaskTodo = document.querySelector("#chx_task_todo");

// Checkbox tiene el evento onchange
chxTaskDone.onchange = function () {
  showOrHideElement(this.checked, ".todo", ".delete");
};

chxTaskDelete.onchange = function () {
  showOrHideElement(this.checked, ".todo", ".done");
};

chxTaskTodo.onchange = function () {
  showOrHideElement(this.checked, ".delete", ".done");
};

function showOrHideElement(checked, typeOne, typeTwo) {
  const elementsOne = document.querySelectorAll(typeOne);
  const elementsTwo = document.querySelectorAll(typeTwo);

  if (checked) {
    elementsOne.forEach((todo) => (todo.style.display = "none"));
    elementsTwo.forEach((task) => (task.style.display = "none"));
  } else {
    elementsOne.forEach((todo) => (todo.style.display = "block"));
    elementsTwo.forEach((task) => (task.style.display = "block"));
  }
}

document.querySelector('#chx_task_done').addEventListener('change', function() {
    if (this.checked) {
        document.querySelectorAll(".done").forEach(task => task.style.display = 'block');
    } else {
        document.querySelectorAll(".done").forEach(task => task.style.display = 'none');
    }
    // 
});

// NUEVAS FUNCIONALIDADES:
// function updateTask(task todo) {}
// function uncheckTask(task done) {}
// function setPriorityTask(task todo) {}

// SETTINGS:
// function sortTasks() {}
// function showDoneTask() {}
// function showDeletedTask() {}
