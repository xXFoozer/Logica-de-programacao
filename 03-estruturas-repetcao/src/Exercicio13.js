import leia from "readline-sync"

var decimal = leia.questionInt("SEU NUMERO: ");
var binario = "";

while(decimal > 0){
    var resultado = parseInt(decimal / 2);
    var resto = decimal % 2;
    decimal = resultado;
    binario = resto + binario;
    
}

console.log(binario);