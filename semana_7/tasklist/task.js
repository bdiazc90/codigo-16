let arrayTask = JSON.parse(localStorage.getItem("tasks")) || [];

console.log("arrayTask", arrayTask);

function storeTask(text) {
  // 1,2,3,4,5,6
  const task = {
    id: arrayTask.length + 1,
    text,
    status: "todo",
    created_at: new Date(),
  };

  arrayTask.push(task);
  saveInLocalStorage();
  return task;
}

function saveInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(arrayTask));
}
