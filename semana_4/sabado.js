class Cuadrado {

    constructor(lado) {
        this.lado = lado;
        this.parent = document.getElementById('container');
    }

    get area() {
        return (this.lado * this.lado) + "m2";
    }

    show() {
        const div = document.createElement("div");
        div.setAttribute('class', 'ejemplo');
        console.log(this.lado);
        div.style.width = this.lado + 'px';
        div.style.height = this.lado + 'px';
        this.parent.appendChild(div);
    }
}

const div_container = document.getElementById('container');

const elements = [];

function add() {
    const numero = document.getElementById('input_numero').value;

    const cuadrado = new Cuadrado(numero);

    elements.push(cuadrado);

    div_container.innerHTML = "";

    for (let el of elements) {
        // div_container.innerHTML += "<p>" + el.area + "</p>";
        el.show();
    }

}

