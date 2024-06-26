import leia from "readline-sync"   
var contador = 0;

do{
    var num = leia.questionInt("digite um numero: ");
    if(num > 100 && num < 200){
        contador++;
    }
}while(num !== 0);
console.log("foram digitados "+ contador + " entre 100 e 200")