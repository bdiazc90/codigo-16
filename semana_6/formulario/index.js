const inputPassword = document.querySelector("#input-password");
const inputPasswordConfirm = document.querySelector("#input-password-confirm");
const checkBoxShowPassword = document.querySelector("#checkbox-show-password");
const textError = document.querySelector(".text-error");

checkBoxShowPassword.onchange = function () {
  // if (this.checked) {
  //   inputPassword.type = "text"
  // } else {
  //   inputPassword.type = "password"
  // }

  // Conversion a ternario
  inputPassword.type = this.checked ? "text" : "password";
};

// Cuando hablamos del evento del teclado
// * onkeydown => El el primer evento que se ejecuta a presionar la tecla
// * onkeypress  => Es el evento que se ejecuta mientras se presiona la tecla
// * onkeyup => Es el ultimo evento que ese ejecuta cuando se levanta la tecla

inputPasswordConfirm.onkeyup = function () {
  //? paso1 : Validar que el password tengo contenido
  //? si el password esta vacio lanzar una alerta indicando que debe completar el password para poder escirbir en
  //? este input
  const password = inputPassword.value;
  const confirmPassword = this.value;
  if (password === "") {
    alert("debe completar el password para poder escirbir en este input");
    this.value = "";
    inputPassword.focus();
    return;
  }

  //? Paso2: Verificar que el texto sea igual al del input password
  if (password !== confirmPassword) {
    // debemos mostrar un error
    console.log("los passwords no son iguales");
    textError.style.display = "block";
  } else {
    textError.style.display = "none";
    console.log("si son iguales");
  }
};
