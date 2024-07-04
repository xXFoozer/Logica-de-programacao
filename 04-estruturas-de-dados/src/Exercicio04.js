var lista = []
var maiores = []
for(var i = 0 ; i<10; i++){
    lista.push(parseInt(Math.random() * 100 ))
}


for (var i = 0; i < lista.length; i ++){
    if(lista[i]> 10){
        maiores.push(lista[i])
    }
} 
console.log(lista)
console.log(maiores)