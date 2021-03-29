var dinheiroEmCaixa = 0;

window.onload = function () {
    $("#buttonA").prop("disabled", true)
    $("#buttonB").prop("disabled", true)
    $("#buttonC").prop("disabled", true)
};

var visor = document.getElementById("visor");

//função chamada sempre que adicionar um valor
function botoesEfeito(valor) {

    dinheiroEmCaixa = dinheiroEmCaixa + valor;
    visor.innerHTML = dinheiroEmCaixa;

    if (dinheiroEmCaixa <= 5) {
        $("#buttonA").prop("disabled", true)
        $("#buttonB").prop("disabled", true)
        $("#buttonC").prop("disabled", true)

    } else if (dinheiroEmCaixa == 6 && dinheiroEmCaixa) {
        $("#buttonA").prop("disabled", false)

    } else if (dinheiroEmCaixa == 7) {
        $("#buttonA").prop("disabled", false)
        $("#buttonB").prop("disabled", false)

    } else if (dinheiroEmCaixa >= 8) {
        $("#buttonA").prop("disabled", false)
        $("#buttonB").prop("disabled", false)
        $("#buttonC").prop("disabled", false)
    }
}

function comprar(selecionado) {

    //DOCE SELECIONADO
    if (selecionado == "A") {
        dinheiroEmCaixa -= 6;

    } else if (selecionado == "B") {
        dinheiroEmCaixa -= 7;
    }
    else if (selecionado == "C") {
        dinheiroEmCaixa -= 8;
    }

    botoesEfeito(0)
    visor.innerHTML = dinheiroEmCaixa
}