import leia from "readline-sync"

var numero = leia.questionInt("DIGITE ATE QUAL VALOR VC QUER: ");

var anterior = 0;
var atual = 1;
var proximo;
var resultado = "0 - 1"; 

for(var i = 2; i< numero ; i++){
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
    resultado = resultado + " - "+ proximo;

}
console.log(resultado);