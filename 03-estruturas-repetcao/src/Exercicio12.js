import leia from "readline-sync"

var numero = leia.questionInt("SEU NUMERO: ")
var resultado = 1;

while(numero > 0){
    resultado= resultado * numero;
    numero--;
}
console.log("SEU FATORIAL É: "+ resultado)