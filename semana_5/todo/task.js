class Task {
  constructor(_text) {
    this.id = "_" + Math.random().toString(36).slice(2);
    this.text = _text;
    this.status = "todo"; // done | delete
    this.created_at = new Date();
    // this.priority = 'high';
    this.done_at = null;
    this.deleted_at = null;
  }

  done() {
    this.status = "done";
    this.done_at = new Date(); // fecha y hora actual.
    const element = document.querySelector("#" + this.id);
    element.classList.add("done");
    element.classList.remove("todo");
  }

  delete() {
    this.status = "delete";
    this.deleted_at = new Date();
    const element = document.querySelector("#" + this.id);
    element.classList.add("delete");
    element.classList.remove("todo");
  }

  createElement() {
    const element = document.createElement("p");
    element.setAttribute("id", this.id);
    element.setAttribute("class", "task todo");
    element.innerHTML = `
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.text}</span>
            <a onclick="deleteTask(this);">❌</a>
        `;
    return element; // elemento HTML
  }
}
