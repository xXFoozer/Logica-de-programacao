import leia from "readline-sync"

var lista = []


var i = 0
while (i <= 9){
    lista[i]= leia.question("DIGITE OS NUMEROS: ")
    i++
    
    
}console.log(lista)