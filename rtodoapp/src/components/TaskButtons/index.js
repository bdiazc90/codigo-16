import { useEffect, useState } from "react";
import TodoApi from "../../services/todoapi";

const Buttons = ({ id, status, editable, setEditable, text, setStatus }) => {
	const [shownButtons, setShownButtons] = useState({
		done: true,
		edit: true,
		delete: true,
		cancel: false,
		save: false,
	});

	async function doneButton() {
		const task = await TodoApi.doneTask(id);
		if (task) {
			setStatus(task.status);
			setShownButtons({
				...shownButtons,
				done: false,
				delete: false,
				edit: false,
			});
		}
	}
	async function deleteButton() {
		const task = await TodoApi.deleteTask(id);
		if (task) {
			setStatus(task.status);
			setShownButtons({
				...shownButtons,
				done: false,
				delete: false,
				edit: false,
			});
		}
	}
	function editButton() {
		if (!editable) {
			setEditable(true);
			setShownButtons({
				...shownButtons,
				done: false,
				delete: false,
				edit: false,
				cancel: true,
				save: true,
			});
		}
	}
	function cancelButton() {
		setEditable(false);
		setShownButtons({
			...shownButtons,
			done: true,
			delete: true,
			edit: true,
			cancel: false,
			save: false,
		});
	}
	async function saveButton() {
		const res = await TodoApi.updateTask(id, text);
		if (res) {
			cancelButton();
		}
	}

	useEffect(() => {
		if (status === "done" || status === "delete") {
			setShownButtons({
				...shownButtons,
				done: false,
				edit: false,
				delete: false,
			});
		}
	}, []);

	return (
		<div className="input-group d-flex justify-content-end">
			{shownButtons.done && (
				<button
					className="btn btn-outline-primary btn-sm"
					onClick={doneButton}
				>
					<i className="fa fa-check"></i>
				</button>
			)}
			{shownButtons.edit && (
				<button
					className="btn btn-outline-secondary btn-sm"
					onClick={editButton}
				>
					<i className="fa fa-pencil"></i>
				</button>
			)}
			{shownButtons.delete && (
				<button
					className="btn btn-outline-danger btn-sm"
					onClick={deleteButton}
				>
					<i className="fa fa-times"></i>
				</button>
			)}
			{shownButtons.cancel && (
				<button
					className="btn btn-outline-success btn-sm"
					onClick={cancelButton}
				>
					<i className="fa fa-arrows-rotate"></i>
				</button>
			)}
			{shownButtons.save && (
				<button
					className="btn btn-outline-success btn-sm"
					onClick={saveButton}
				>
					<i className="fa fa-floppy-disk"></i>
				</button>
			)}
		</div>
	);
};

export default Buttons;
