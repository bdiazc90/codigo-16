let arrayTask = JSON.parse(localStorage.getItem("tasks")) || [];

arrayTask = arrayTask.map((task) => {
	return {
		...task,
		created_at: new Date(task.created_at),
		toHtml: function () {
			return toHtml(this);
		},
	};
});

function toHtml(task) {
	const div_task = $("<div>", {
		class: "row py-2 my-2",
		"data-id": task.id,
	}).html(`
		<div class='col-6 col-sm-8 col-md-9'>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" onchange="doneTask(this, ${task.id})" id="check_${task.id}">
				<label class="form-check-label" for="check_${task.id}">
					${task.text}
				</label>
			</div>
		</div>
		<div class='col-6 col-sm-4 col-md-3'>
			<button class='btn btn-light' onclick="editTask(this)"><i class="fa fa-pencil text-info"></i></button>
			<button class='btn btn-light' onclick="showTask(${task.id})"><i class="fa fa-square text-info"></i></button>
			<button class='btn btn-dark' onclick="deleteTask(this)">❌</button>
		</div>
	`);
	if (task.status == "done") {
		div_task
			.find("input[type='checkbox']")
			.prop("disabled", true)
			.prop("checked", true);
		div_task.addClass(
			"bg-success bg-opacity-50 rounded text-white fst-italic"
		);
		div_task.find("button").prop("disabled", true);
	} else if (task.status == "delete") {
		div_task.find("input[type='checkbox']").prop("disabled", true);
		div_task.addClass("bg-danger bg-opacity-50 rounded text-white");
		div_task.find("label").addClass("text-decoration-line-through");
		div_task.find("button").hide();
	}
	return div_task;
}

function storeTask(text) {
	// 1,2,3,4,5,6
	const task = {
		id: arrayTask.length + 1,
		text,
		status: "todo",
		created_at: new Date(),
		toHtml: function () {
			return toHtml(this);
		},
	};

	arrayTask.push(task);
	saveInLocalStorage();
	return task;
}

function updateTask(id, key, value) {
	const task = arrayTask.find((task) => task.id === id);
	// esta actualizando la propiedad status en base al que recibimos como parametros
	task[key] = value;
	// para actualizar la data en localStorage solo hace falta llamar a la funcion saveInLocalStorga()
	saveInLocalStorage();
	return task;
}

function saveInLocalStorage() {
	localStorage.setItem("tasks", JSON.stringify(arrayTask));
}
