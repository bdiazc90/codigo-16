import { useState, useRef } from "react";
import TodoApi from "./services/todoapi";
// import TasksTable from "./components/TasksTable";

function App(props) {
	const inputTask = useRef(null);

	const [text, setText] = useState("");
	const [tasks, setTasks] = useState([]);

	function manejarInput(e) {
		setText(e.target.value);
	}

	async function agregar() {
		const res = await TodoApi.addtask(text);
		console.log(res);
		if (res) {
			inputTask.current.value = "";
			inputTask.current.focus();
			refrescar();
		}
	}

	async function refrescar() {
		const data = await TodoApi.listtasks();
		setTasks(data.tasks);
	}

	// async function addButton(e) {
	// 	if (e) {
	// 		e.currentTarget.blur();
	// 	}
	// 	const res = await TodoApi.addtask(text);
	// 	if (res) {
	// 		setText("");
	// 	}
	// 	await refreshButton();
	// 	inputTask.current.focus();
	// }

	// async function refreshButton(e) {
	// 	if (e) {
	// 		e.currentTarget.blur();
	// 	}
	// 	const data = await TodoApi.listtasks();
	// 	setTasks(data.tasks);
	// 	inputTask.current.focus();
	// }

	// function handleInput(event) {
	// 	setText(event.target.value);
	// }

	// useEffect(() => {
	// 	refreshButton();
	// }, []);

	return (
		<div
			className="container mt-5 mx-auto"
			style={{
				width: 600,
			}}
		>
			<h1>Todo App</h1>
			<div className="card">
				<div className="card-body">
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="New task..."
							onChange={manejarInput}
							autoComplete="off"
							ref={inputTask}
						/>
						<button className="btn btn-primary" onClick={agregar}>
							<span className="fa fa-plus"></span>
							&nbsp; Add
						</button>
						<button
							className="btn btn-outline-primary"
							onClick={refrescar}
						>
							Refresh &nbsp;
							<span className="fa fa-refresh"></span>
						</button>
					</div>
				</div>
			</div>
			{/* <TasksTable tasks={tasks} /> */}
			<div className="card mt-4">
				{tasks.length > 0 ? (
					<ul className="list-group list-group-flush">
						{tasks.map((task, index) => (
							<li key={index} className="list-group-item">
								{task.text}
							</li>
						))}
					</ul>
				) : (
					<h3 className="m-2">Sin tareas</h3>
				)}
			</div>
		</div>
	);
}

export default App;
