class User {
    constructor(_username) {
        this.username = _username;
        this.created_at = new Date();
        this.attempts = 0;
        this.success_attempts = 0;
        this.failed_attempts = 0;
        this.score = 0;
        this.gameover_at = null;
    }

    gameover() {
        this.gameover_at = new Date();
    }
}

// Arreglo de usuarios:
let users = null;

// Comprobar si existe el item "pitrainer.users"
if (localStorage.getItem("pitrainer.users") !== null) {
    users = JSON.parse(localStorage.getItem("pitrainer.users"));
}

function addUserToLocalStorage(user) {
    // Comprobar si existe una lista de usuarios en el LS:
    if (users !== null) {
        users.push(user);
    } else {
        users = [];
        users.push(user);
    }
    localStorage.setItem("pitrainer.users", JSON.stringify(users));
}

function createTableHistoric() {
    const table_history = document.querySelector('#history > table');

    users.forEach(function (user) {
        // Creo un node object llamado ROW
        const row = document.createElement('tr');
        // Personalizo el node:
        row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.score}</td>
        <td>${user.success_attempts}</td>
        <td>${user.gameover_at.toLocaleString()}</td>
        `;
        // Lo agrega como un hijo de la tabla:
        table_history.append(row);
    })
}