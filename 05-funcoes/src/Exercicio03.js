import leia from "readline-sync"

var lista = [];

for(var i = 0; i <= 4; i++ ){
   var par = leia.questionInt("DIGITE UM NUMERO: ");

    if( par % 2===0){
        lista[i]= par
    }else {
        console.log("DIGITE APENAS PARES !!!!")
    } 
}