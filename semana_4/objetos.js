// container:
const div_container = document.getElementById('container');

// Objetos
class Carro {

    constructor() {
        // this.setColor(_color);
        // this.setVelocidad(_velocidad);
    }

    presentacion() {
        const texto = "Hola soy un carro de color " + this.color
        + " y tengo una velocidad de: " + this.velocidad;
        return texto;
    }

    // setter methods:
    setColor(_nuevo_color) {
        // el color siempre debe ir en minusculas:
        this.color = String(_nuevo_color).toLowerCase();
    }

    setVelocidad(_nueva_velocidad) {
        // la velocidad debe tener siempre unidades:
        this.velocidad = _nueva_velocidad + "Kmh";
    }

    // getters methods:
    getColor() {
        return this.color;
    }
}

const carro_rojo = new Carro(); // instanciar objeto
const carro_azul = new Carro(); // dar vida al objeto
const carro_verde = new Carro(); // crear el objeto

// carro_rojo.setColor('ROJO');
// carro_rojo.setVelocidad(100);

// carro_azul.setColor('AZUL');
// carro_azul.setVelocidad(150);

class Cuadrado {

    constructor(_lado) {
        this.lado = _lado;
    }

    // this.area NO EXISTE, entonces:
    get area() {
        return (this.lado * this.lado) + "m2";
    }

    set area(_area) {
        this.lado = Math.sqrt(_area);
    }

}

const c1 = new Cuadrado(4);

c1.lado = 5;

div_container.innerHTML += "<p>" + c1.area + "</p>";
div_container.innerHTML += "<hr>";

c1.area = 36;

div_container.innerHTML += "<p>" + c1.lado + "</p>";
div_container.innerHTML += "<hr>";

class User {
    constructor(_id, _first_name, _last_name) {
        this.id = _id;
        this.first_name = _first_name;
        this.last_name = _last_name;
    }

    // Propiedad calculada: fullName
    get fullName() {
        return this.first_name + " " + this.last_name;
    }

    set fullName(_fullname) {
        this.first_name = _fullname.split(" ")[0];
        this.last_name = _fullname.split(" ")[1];
    }
}

const u1 = new User(1, "bruno", "diaz");

div_container.innerHTML += "<p>" + u1.fullName + "</p>";
div_container.innerHTML += "<hr>";

u1.fullName = "jaime farfan";

div_container.innerHTML += "<p>" + u1.first_name + "</p>";
div_container.innerHTML += "<hr>";

console.log(u1);

