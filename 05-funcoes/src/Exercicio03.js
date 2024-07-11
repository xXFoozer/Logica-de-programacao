import leia from "readline-sync"

var vetor = [];

for(var i = 0; i < 4; i++ ){
   var numeroDigitado = leia.questionInt("DIGITE UM NUMERO PAR: ");

    while(numeroDigitado % 2 !== 0){
        var numeroDigitado = leia.questionInt("SO ACEITAMOS NUMEROS PAR: ");
    }
    vetor[i] = numeroDigitado;
}console.log(vetor);