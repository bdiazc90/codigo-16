import { useState } from "react";
import Buttons from "../TaskButtons";

const Task = ({ task }) => {
	const [editable, setEditable] = useState(false);

	const [text, setText] = useState(task.text);
	const [status, setStatus] = useState(task.status);

	let statusClassNames = {
		todo: "",
		done: "bg-primary bg-opacity-25",
		delete: "bg-danger bg-opacity-25",
	};

	function handleInput(event) {
		setText(event.target.value);
	}

	return (
		<li className={`list-group-item ${statusClassNames[status]}`}>
			<div className="row">
				<div className="col-9 align-self-center">
					{editable && (
						<input
							type="text"
							className="form-control"
							placeholder={text}
							value={text}
							onChange={handleInput}
						/>
					)}
					{!editable && <span>{text}</span>}
				</div>
				<div className="col-3">
					<Buttons
						id={task.id}
						status={task.status}
						editable={editable}
						setEditable={setEditable}
						text={text}
						setStatus={setStatus}
					/>
				</div>
			</div>
		</li>
	);
};

function TasksTable(props) {
	const { tasks } = props;
	if (tasks.length === 0) return;

	return (
		<div className="card mt-4">
			<ul className="list-group list-group-flush">
				{tasks.map((task, index) => (
					<Task key={index} task={task} />
				))}
			</ul>
		</div>
	);
}

export default TasksTable;
