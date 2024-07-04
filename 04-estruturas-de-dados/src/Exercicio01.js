import leia from "readline-sync"
// CORRECAO DO PROF ABAIXO

var lista= []
var lista2 = []
// preenche a primeira lista
for(var i = 0; i < 10 ; i++){
    lista[i]= leia.questionInt("DIGITE OS NUMEROS: ")
}
// manipular aas listas
for(var i = 0; i < lista.length ; i++){
    lista2[i]= lista[i]* 5
}

console.log(lista)
console.log(lista2)

//MINHA RESPOSTA ABAIXO

// var lista = []

// var i = 0
// while (i <= 9){
//     lista[i]= leia.questionInt("DIGITE OS NUMEROS: ")
//     i++
        
// }console.log(lista)

// var lista2 = lista.map(x => x * 5)
// // Nesse caso o map vai pegar os index da Array 'Valores' e vai multiplicar um por um por 5 retornando 
// // uma nova array com os valores multiplicados.

// console.log(lista2)
// // Essa array vai ter os valores mostrados pelo console.log