class Task {

    constructor(_name) {
        this.id = '_' + Math.random().toString(36).slice(2);
        this.name = _name;
        this.status = "todo"; // done | del
        this.created_at = new Date();
        this.done_at = null;
        this.deleted_at = null;
    }

    done() {
        this.status = "done";
        this.done_at = new Date();
        document.getElementById(this.id).classList.add('done');
    }

    del() {
        this.status = "del";
        this.deleted_at = new Date();
        document.getElementById(this.id).classList.add('delete');
    }

    get element() {
        const element = document.createElement("p");
        element.setAttribute('id', this.id);
        element.setAttribute('class', 'task');
        // agregamos html usando template string:
        element.innerHTML = `
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.name}</span>
            <a onclick="deleteTask(this);">❌</a>
            `;
        return element;
    }
}

// DOM:
const listTasks = document.querySelector("#list");
const inputTask = document.querySelector("#input_newtask");
inputTask.focus();

// Array tasks:
const arrayTasks = [];


// Funciones
function addTask() {
    if (inputTask.value == "") {
        alert("Ingresa un texto como tarea.")
        return;
    }
    const task = new Task(inputTask.value);
    arrayTasks.push(task);
    // Mostrar en el DOM:
    const lastTask = listTasks.lastElementChild;
    lastTask.before(task.element)
    inputTask.value = "";
    inputTask.focus();
}

function checkTask(checkbox) {
    if (checkbox.checked) {
        const task_id = checkbox.parentElement.id;
        const task = arrayTasks.find(task => task.id == task_id);
        checkbox.setAttribute('disabled', true);
        task.done();
    }
}

function deleteTask(anchor) {
    const task_id = anchor.parentElement.id;
    const task = arrayTasks.find(task => task.id == task_id);
    task.del();
    anchor.style.display = 'none';
}
