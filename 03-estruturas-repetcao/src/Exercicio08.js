import leia from "readline-sync"   
var soma = 0
var multi = 1


for(var i = 0; i <6 ; i++){
    var num = leia.questionInt("seu numero: ")

    if( num % 2 === 0){
        multi=multi * num;
    }else{
        soma = soma + num;
    }
}
console.log("soma = "+ soma)
console.log("multi = "+ multi)