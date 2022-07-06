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
const pi_decimals = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
let position = 0;

const input_pi = document.querySelector("#user_pi");
const result_pi = document.querySelector("#result_pi");

input_pi.addEventListener('keyup', function () {
    const decimal = this.value;
    this.value = "";
    // evaluar reglas:
    if (decimal == "" || isNaN(decimal) || decimal != pi_decimals.charAt(position)) {
        result_pi.style.color = 'red'; 
    } else {
        // si pasó las reglas:
        result_pi.style.color = 'green';
        result_pi.innerText += decimal;
        position++;
    }
    // usar timeout para pintarlo de negro:
    setTimeout(function () {
        result_pi.style.color = 'black';
    }, 250);
});

