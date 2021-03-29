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