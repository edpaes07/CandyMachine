let dinheiroEmCaixa = 0;

window.onload = function() {
        $("#buttonA").prop("disabled",true)
        $("#buttonB").prop("disabled",true)
        $("#buttonC").prop("disabled",true)
  };


//função chamada sempre que adicionar um valor
function botoesEfeito(valor) {

    dinheiroEmCaixa = dinheiroEmCaixa + valor;
    console.log(dinheiroEmCaixa)
    if(dinheiroEmCaixa == 0){

        $("#buttonA").prop("disabled",true)
        $("#buttonB").prop("disabled",true)
        $("#buttonC").prop("disabled",true)

    }else if(dinheiroEmCaixa == 6){
        
        $("#buttonC").prop("disabled",false)
        
    }else if(dinheiroEmCaixa > 6 && dinheiroEmCaixa <= 7){

        $("#buttonB").prop("disabled",false)
        $("#buttonC").prop("disabled",false)

    }else if(dinheiroEmCaixa >= 8){
        $("#buttonA").prop("disabled",false)
        $("#buttonB").prop("disabled",false)
        $("#buttonC").prop("disabled",false)
    }

}

function comprar(selecionado) {

    troco = 0;

    //DOCE SELECIONADO
    if(selecionado == "A"){
        troco = dinheiroEmCaixa - 6;
    }else if(selecionado == "B"){
        troco = dinheiroEmCaixa - 7;
    }
    else if(selecionado == "C"){
        troco = dinheiroEmCaixa - 8;
    }
    console.log(troco)
    return troco;
}