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

    } else if (dinheiroEmCaixa >= 6) {
        $("#buttonA").prop("disabled", false)

    } else if (dinheiroEmCaixa >= 7) {
        $("#buttonB").prop("disabled", false)

    } else if (dinheiroEmCaixa >= 8) {
        $("#buttonC").prop("disabled", false)
    }
}

function comprar(selecionado) {

    //DOCE SELECIONADO
    if (selecionado == "A") {
        dinheiroEmCaixa -= 6;
        console.log(dinheiroEmCaixa)

    } else if (selecionado == "B") {
        dinheiroEmCaixa -= 7;
    }
    else if (selecionado == "C") {
        dinheiroEmCaixa -= 8;
    }

    visor.innerHTML = dinheiroEmCaixa
}