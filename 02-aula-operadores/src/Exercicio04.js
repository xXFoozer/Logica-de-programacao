import leia from "readline-sync";

var qtdeMaca= leia.questionInt("Sao quantas macas:  ");
var conta = qtdeMaca*0.30
var conta2 = qtdeMaca*0.25
if(conta <= 6 ){
     
    console.log("seu valor é: "+conta.toFixed(2)+ " reais");
} else if(conta2 => 12){
    console.log("seu valor é: "+ conta2.toFixed(2)+" reais");

} 
