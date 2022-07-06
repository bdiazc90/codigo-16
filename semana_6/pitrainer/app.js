// PLAYER:
const input_username = document.querySelector('#username');
const button_start = document.querySelector('#start');
const div_game = document.querySelector('#game');

input_username.addEventListener('keyup', function() {
    button_start.disabled = (this.value == "");
});

button_start.addEventListener('click', function() {
    this.parentElement.querySelector('h2').innerText += 
    `Hello ${input_username.value}, let's play`;
    this.parentElement.querySelector('h2').style.display = 'block';

    input_username.disabled = true;
    this.disabled = true;

    div_game.style.display = 'flex';
})

// GAME:

