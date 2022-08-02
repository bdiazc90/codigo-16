const url_api = "http://localhost:3000/";

const task_text = document.getElementById("task_text");
const button_get = document.getElementById("button_get");
const button_fetch = document.getElementById("button_fetch");
const list_tasks = document.getElementById("list_tasks");

button_get.addEventListener("click", () => {
	fetch(url_api + "tasks")
		.then((res) => res.json())
		.then((data_json) => renderTasks(data_json.tasks));
});

function renderTasks(tasks) {
	list_tasks.innerHTML = "";
	if (tasks.length == 0) {
		list_tasks.parentElement.classList.add("invisible");
		return;
	}
	tasks.forEach((task) => {
		list_tasks.innerHTML += `<li class="list-group-item">${task.text}</li>`;
	});

	list_tasks.parentElement.classList.remove("invisible");
}

button_fetch.addEventListener("click", () => {
	fetch(url_api + "task", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			task_text: task_text.value,
		}),
	}).then((res) => {
		if (res.ok) {
			fetch(url_api + "tasks")
				.then((res) => res.json())
				.then((data_json) => renderTasks(data_json.tasks));
		}
	});
});
