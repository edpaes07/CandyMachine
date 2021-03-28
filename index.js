/* alert("Recomendamos a utilização da resolução 1366x768"); */

let texto = document.getElementById("texto");

function next() {
    if (texto.innerHTML === "Fred curte muito os doces da cat candy machine") {
        texto.innerHTML = "Poderia por favor comprar doces para o Fred?"
    } else {
        texto.innerHTML = "Fred curte muito os doces da cat candy machine";
    }
}

let botoes = document.querySelectorAll("#doce");
let precos = document.querySelectorAll("#precos");

var visor = document.getElementById("visor");

//Array de elementos que receber uma listener
var listenerBtn = [];

//teclas
listenerBtn.push(document.getElementById("productA"));
listenerBtn.push(document.getElementById("productB"));
listenerBtn.push(document.getElementById("productC"));
listenerBtn.push(document.getElementById("number1"));
listenerBtn.push(document.getElementById("number2"));
listenerBtn.push(document.getElementById("number3"));

//Adicionando evento de click
for (var i = 0; i < listenerBtn.length; i++) {
    listenerBtn[i].addEventListener("click", passarValorVisor);
}

btnResultado.onclick = function () {
    verificarResulatado();
}

function passarValorVisor() {

    if (this.value) {
        visor.value += this.value;
    }
}

btnLimparVisor.onclick = function () {
    visor.value = "";
}


