import leia from "readline-sync"

var nomeC1= leia.question("digite um nome \n");
var valorC1= leia.questionFloat("digite um valor \n")

var nomeC2= leia.question("digite um nome \n");
var valorC2= leia.questionFloat("digite um valor \n")

var total = valorC1 + valorC2
console.log("valor total: "+ total)

var media= total/2
console.log("valor medio: "+ media)

if(valorC1 > 20){
    console.log(nomeC1)
}

if(valorC2 > 20){
    console.log(nomeC2)
}