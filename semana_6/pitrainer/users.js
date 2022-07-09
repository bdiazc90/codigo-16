class User {
  constructor(_username) {
    this.username = _username;
    this.games = [];
  }

  gameover() {
    return new Date();
  }
}

// Arreglo de usuarios:
let users = [];

// Comprobar si existe el item "pitrainer.users"
if (localStorage.getItem("pitrainer.users") !== null) {
  const cadena_texto_users = localStorage.getItem("pitrainer.users");

  users = JSON.parse(cadena_texto_users);
}

function addUserToLocalStorage(user) {
  users.push(user);
  // lo sobreescribo en el LS:
  localStorage.setItem("pitrainer.users", JSON.stringify(users));
}

function updateUserLocalStorage(users) {
  localStorage.removeItem("pitrainer.users");
  localStorage.setItem("pitrainer.users", JSON.stringify(users));
}

const button_clear = document.querySelector("#clear");

if (users.length !== 0) {
  div_history = document.querySelector("#history");
  div_history.style.display = "block";
  createTableHistoric();
  button_clear.disabled = false;
}

// Botón para reiniciar la tabla de historic:
button_clear.addEventListener("click", function () {
  localStorage.removeItem("pitrainer.users");
  window.location.reload();
});

function createTableHistoric() {
  // const table_history = document.querySelector("#history > table");
  const container_history = document.querySelector("#history_container");

  users.forEach((user) => {
    // crear los nombres
    const h4 = document.createElement("h4");
    h4.innerText = user.username;

    container_history.append(h4);
    // crear la table
    const table = document.createElement("table");
    const thead = document.createElement("thead");

    thead.innerHTML = `
		<tr>
			<th>Score</th>
			<th>Attempts</th>
			<th>Success Attempts</th>
			<th>Failed Attempts</th>
			<th>Game Over</th>
		</tr>	
		`;

    table.append(thead);
    container_history.append(table);
  });

  // users.forEach(function (user) {
  //   // Creo un node object llamado ROW
  //   const row = document.createElement("tr");
  //   const gameover_at = new Date(user.gameover_at);
  //   // Personalizo el node:
  //   row.innerHTML = `
  //       <td>${user.username}</td>

  //       `;

  // <td>${user.score.toFixed(2)}</td>
  // <td>${user.success_attempts}</td>
  // <td>${gameover_at.toLocaleDateString("es-PE", {
  //   weekday: "short",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  // })}</td>
  // Lo agrega como un hijo de la tabla:
  // table_history.append(row);
  // });
}
