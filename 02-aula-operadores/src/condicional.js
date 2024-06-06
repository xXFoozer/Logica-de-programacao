import leia from "readline-sync"

//if //else 

//var numero = 0; 


//if(numero > 0){
   // console.log("numero positivo...");

//}else if(numero < 0){
    //console.log("numero negativo...");

//}else{
    //console.log("o numero é zero.");
//}

//var x = 10;

//if(x < 100){
   // console.log("menor que cem");

//}
 //if(x < 1000){
   // console.log("menor que mil");
//}

var codigoErro = leia.questionInt("digite o codigo do erro: ");
switch(codigoErro){
    case 400:
    case 401:
    case 404:
        console.log("HTTP CODE ERRO APLICAÇÃO")
        break;
    case 500:
    case 501:
    case 502: 
        console.log("HTTP CODE ERRO SERVER")
        break;        
    default:
        console.log("NÃO É ERRO")
    
}
