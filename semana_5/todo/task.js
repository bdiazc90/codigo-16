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

  changeStatus(status) {
    this.status = status;

    status === "delete"
      ? (this.deleted_at = new Date())
      : (this.done_at = new Date());

    const element = document.querySelector("#" + this.id);
    element.classList.add(status);
    element.classList.remove("todo");
  }

  done() {
    this.changeStatus("done");
  }

  delete() {
    this.changeStatus("delete");
  }

  update(newText) {
    const element = document.querySelector(`#${this.id}`);
    // children: Busca los elementos hijos
    // Nota recurden que ponemos 0 porque p tiene 2 div hijos
    // Versiona larga
    const primerDiv = element.children[0];
    const span = primerDiv.children[1]; // 0 => input, 1=> span
    // ya tenemos al span, solo falta cambiarle el texto
    // span tiene la propieda textContent la cual permite
    // cambiar el contenido
    span.textContent = newText;
  }

  createElement() {
    const element = document.createElement("p");
    element.setAttribute("id", this.id);
    element.setAttribute("class", "task todo");
    element.innerHTML = `
      <div>
        <input type="checkbox" onchange="checkTask(this);">
        <span>${this.text}</span>
      </div>
      <div>
        <a onclick="updateTask(this);">✏️</a>
        <a onclick="deleteTask(this);">❌</a>
      </div>
        `;
    return element; // elemento HTML
  }
}
