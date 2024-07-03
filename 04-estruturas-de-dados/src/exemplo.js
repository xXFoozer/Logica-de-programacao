import leia from "readline-sync"

// var lista = [];

// for (var i= 0; i < 10; i++){
// lista[i] = "germano"
// }

// console.log(lista);
//---------------------------------

// var lista = [];

// var i = 4
// while(i >= 0){
//     lista[i]= leia.question("DIGITA UM NOME AI: ")
//     i--
// }

for(j = 0; j < 2 ; j++){
    console.log(lista[j])
}

for(let valor of lista){
    if(valor.includes("sta")){
        console.log(valor)
    }
}


lista.forEach(valor => {
    console.log(valor)
});


console.log(lista);