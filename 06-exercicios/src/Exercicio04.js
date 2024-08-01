import leia from "readline-sync"
var texto= leia.question("DIGITE UM TEXTO: ");
texto = texto.toUpperCase();
var contadorVogais = 0


for(var i=1; i < texto.length; i++){
    if(texto[i]==="A"||texto[i]==="E"||texto[i]==="I"||texto[i]==="O"||texto[i]==="U"){
        contadorVogais++

    }

}

console.log(`A PALAVRA/TEXTO TEM ${contadorVogais} VOGAIS `)