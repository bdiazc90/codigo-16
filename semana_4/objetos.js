// container:
const div_container = document.getElementById('container');

// Objetos
class Carro {

    constructor(_color, _velocidad) {
        this.color = _color;
        this.velocidad = _velocidad;
    }

    presentacion() {
        const texto = "Hola soy un carro de color " + this.color
        + " y tengo una velocidad de: " + this.velocidad + "kmh";
        return texto;
    }
}

const carro_rojo = new Carro('ROJO', 200); // instanciar objeto
const carro_azul = new Carro('AZUL', 50); // dar vida al objeto
const carro_verde = new Carro('VERDE', 100); // crear el objeto

div_container.innerHTML += "<p>" + carro_rojo.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_azul.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";



