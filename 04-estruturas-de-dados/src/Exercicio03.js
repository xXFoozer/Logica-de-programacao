import leia from "readline-sync"

var lista = []
var pares = []
for(var i = 0 ; i<10; i++){
    lista.push(parseInt(Math.random() * 100 ))
}


for (var i = 0; i < lista.length; i ++){
    if(lista[i]% 2 === 0){
        pares.push(lista[i])
    }
} 
console.log(pares)
console.log(lista)
