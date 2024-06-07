import leia from "readline-sync"

var numero = leia.questionInt("SEU NUMERO: ");

var resposta= numero % 2
//console.log("n: "+ resposta)


if(resposta === 0){
    console.log("SEU NUMERO É PAR...");
}else if(resposta === 1){
    console.log("SEU NUMERO É IMPAR");
}