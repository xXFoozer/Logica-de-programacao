import leia from "readline-sync"

var lista = []

var i = 10
while (i > 0){
    lista[i]= leia.question("DIGITE OS NUMEROS: ")
    i--

}console.log(lista)