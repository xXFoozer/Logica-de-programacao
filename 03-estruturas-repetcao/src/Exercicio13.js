import leia from "readline-sync"

var decimal = leia.questionInt("SEU NUMERO: ");

var valor = decimal 
var binario = ""

while(valor > 0){
    var resultado = parseInt (valor / 2)
    var resto = valor % 2
    binario = resto + binario

    valor = resultado
}console.log(binario)