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
const users = [];

const u1 = new User("brunodiaz");
u1.score = 500;
u1.success_attempts = 20;
u1.gameover();

const u2 = new User("linderhass");
u2.score = 600;
u2.success_attempts = 30;
u2.gameover();

users.push(u1);
users.push(u2);

console.log(users);

createTableHistoric();

function createTableHistoric() {
    const table_history = document.querySelector('#history > table');

    users.forEach(function (user) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.score}</td>
        <td>${user.success_attempts}</td>
        <td>${user.gameover_at}</td>
        `;
        table_history.appendChild(row);
    })
}