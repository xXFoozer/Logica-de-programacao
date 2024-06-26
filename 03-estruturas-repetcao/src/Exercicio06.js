import leia from "readline-sync"   

var numero = leia.questionInt("Digite seu numero: ")
for(var i = 1;i<= 10; i++){
    
   var result = numero*i
    console.log(result)

}