const inputTask = $("#input-task");
const btnTask = $("#btn-task");
const formTask = $("#form-task");
const sectionTask = $("#section-task");
const sectionDetailTask = $("#section-detail-task");
const form = document.querySelector("#form-task");

$(function () {
	// vamos a obtener el queryString de la url
	const queryString = new URLSearchParams(window.location.search);
	const filter = queryString.get("filter"); // todo || done || delete

	if (arrayTask.length > 0) {
		// aca iteremos el array y pintemos las tareas
		arrayTask.forEach((task) => {
			createInputTask(task);
		});

		if (filter) {
			showFilteredModalTask(filter);
		}
	}
});

function showFilteredModalTask(filter) {
	const filterTask = arrayTask.filter((task) => task.status === filter);

	const tbody = $("#tbody");

	filterTask.forEach((task) => {
		tbody.append(
			`<tr>
            <td>${task.id}</td>
            <td>${task.text}</td>
            <td>${task.status}</td>
            <td>${task.created_at}</td>
          </tr>
          `
		);
	});

	const myModal = new bootstrap.Modal(
		document.getElementById("exampleModal")
	);

	myModal.show();
}

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

	createInputTask(task);
	// new Noty({
	// 	theme: "relax",
	// 	text: "Tarea creada!",
	// 	type: "success",
	// 	layout: "topCenter",
	// }).show();
	Swal.fire("Tarea creada!", `[${text}]`, "success");
});

function deleteTask(element) {
	const div_task = $(element).closest(".row");
	const id = div_task.data("id");
	const task = updateTask(id, "status", "delete");
	div_task.replaceWith(task.toHtml());
}

function saveTask(element) {
	const div_task = $(element).closest(".row");
	const id = Number(div_task.attr("data-id"));
	const newText = div_task.find("input").val();
	const task = updateTask(id, "text", newText);
	div_task.replaceWith(task.toHtml());
	new Noty({
		theme: "relax",
		text: "Tarea actualizada!",
		type: "warning",
		layout: "topCenter",
		timeout: 2000,
	}).show();
}

function editTask(element) {
	const div_task = $(element).closest(".row");
	div_task.html(`
      <div class='col-6 col-sm-8 col-md-9'>
        <input placeholder="editar tarea" type="text" class="form-control"/>
      </div>
      <div class='col-6 col-sm-4 col-md-3'>
        <button class="btn btn-dark" onclick="saveTask(this)">✅</button>
      </div>
  `);
}

function showTask(id) {
	const task = arrayTask.find((task) => task.id === id);
	sectionDetailTask.empty().show();

	sectionDetailTask.append(
		`
    <div class="card" style="width: 300px; padding: 0;">
      <img src="https://source.unsplash.com/user/erondu/300x200" class="card-img-top" />
      <div class="card-body">
        <div class="card-title">${task.text}</div>
        <div class="card-text">
        ${task.status}
        </div>
         <div class="card-text">
        ${task.created_at}
        </div>
      </div>
    </div>
    `
	);
	// .fadeOut(5000);
}

function doneTask(element, id) {
	const task = updateTask(id, "status", "done");
	const container = $(element).closest(".row");
	container.replaceWith(task.toHtml());
}

function createInputTask(task) {
	const div_task = task.toHtml();
	div_task.appendTo(sectionTask).hide().fadeIn(1000);
}
