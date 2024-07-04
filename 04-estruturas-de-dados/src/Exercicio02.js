import leia from "readline-sync"
//correcao prof


var i = 0
var lista= []
var soma = 0 

while(i < 5){
    var valorAleatorio = parseInt(Math.random() * 100)
    lista.push(valorAleatorio)
    i++

}

for (var j = 0 ; j < lista.length ; j ++){
    soma = soma + lista[j]
}


console.log("O VALOR DA SOMA É: "+soma)
for(var valor of lista){
    console.log(valor)
}