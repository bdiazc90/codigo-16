const div_container = document.getElementById("container");

const user = {
    name: null,
    alert: function () {
        alert(this.name);
    },
    uppername: function () {
        alert(String(this.name).toUpperCase());
    }
}

const cuadrado = {
    lado: null,
    print: function () {

    }
}

function add() {
    const input_nombre = document.getElementById("input_nombre");
    user.name = input_nombre.value;
    user.alert();
    user.uppername();
}