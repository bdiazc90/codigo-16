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
	updateTask(id, "status", "delete");
}

function saveTask(element, id) {
	const container = $(element).parent();
	const containerFather = $(element).parent().parent();
	const newText = container.children("input").val();
	updateTask(id, "text", newText);
	container.children().hide();
	containerFather.children().show();
	containerFather.children("span").text(newText);
}

function editTask(element) {
	const container = $(element).parent();
	const id = container.children("input").data("id");
	container.children().hide();
	container.append(
		`
    <div>
      <input placeholder="editar tarea"/>
      <button onclick="saveTask(this, ${id})">✅</button>
    </div>
    `
	);
}

function createInputTask(id, text, status) {
	$("<div class='row my-2'>")
		.html(
			`
      <div class='col-6 col-sm-8 col-md-9'>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" data-id="${id}" id="check_${id}">
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
