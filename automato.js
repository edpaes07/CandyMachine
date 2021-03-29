var estado = 'R0';

window.onload = function () {
    $("#buttonA").prop("disabled", true)
    $("#buttonB").prop("disabled", true)
    $("#buttonC").prop("disabled", true)

};

var visor = document.getElementById("visor");
var resultText = document.getElementById("texto-balao");

function habilitaBotao(novoEstado) {
    if (novoEstado === 'R6') {
        $("#buttonA").prop("disabled", false);
    } else if (novoEstado === 'R7') {
        $("#buttonA, #buttonB").prop("disabled", false);
    } else if (['R8', 'R9', 'R10', 'R11', 'R12'].includes(novoEstado)) {
        $("#buttonA, #buttonB, #buttonC").prop("disabled", false);
        $("#number1, #number2, #number5").prop("disabled", true);
    }
}

function botoesEfeito(valor) {

    let estadoAtual = estado.match(/([0-9]+)/g)[0];
    let novoEstado = 'R' + (parseInt(estadoAtual) + valor);
    habilitaBotao(novoEstado);

    let valorVisor = parseInt(estadoAtual) + valor;
    if (estadoAtual >= 0 && estadoAtual <= 12) {
        estado = novoEstado;
        visor.innerHTML = `R$ ${valorVisor},00`;
    }
}

function comprar(selecionado) {

    let valorTroco = 0;

    if (selecionado === 'A') {
        let estadosTroco = { 'R6': 0, 'R7': 1, 'R8': 2, 'R9': 3, 'R10': 4, 'R11': 5, 'R12': 6 };
        valorTroco = estadosTroco[estado];
    } else if (selecionado === 'B') {
        let estadosTroco = { 'R7': 0, 'R8': 1, 'R9': 2, 'R10': 3, 'R11': 4, 'R12': 5 };
        valorTroco = estadosTroco[estado];
    } else if (selecionado === "C") {
        let estadosTroco = { 'R8': 0, 'R9': 1, 'R10': 2, 'R11': 3, 'R12': 4 };
        valorTroco = estadosTroco[estado];
    }

    estado = 'R0';
    visor.innerHTML = `R$ 0.00`;

    setTimeout(() => {
        resultText.innerHTML = `<br>Muito Obrigado Humano!`;
    }, 3500);
    resultText.innerHTML = `Você comprou o produto ${selecionado}, seu troco será R$${valorTroco}.00 reais!`;

    $("#buttonA, #buttonB, #buttonC").prop("disabled", true);
    $("#number1, #number2, #number5").prop("disabled", false);

}