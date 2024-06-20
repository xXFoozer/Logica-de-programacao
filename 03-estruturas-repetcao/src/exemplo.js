//EXEMPLO DE WHILE !!!


import leia from "readline-sync"

var nota = leia.questionFloat("DIGITE A NOTA: ")
while(nota < 0.0 || nota > 10.0){
    console.log("NOTA INVALIDA")
    nota = leia.questionFloat("DIGITE A NOTA NOVAMENTE: ")
}
console.log("NOTA VALIDA")




//var estaCarregando= true;
// var porcentagem = 0;

// while(estaCarregando ) {
//     console.log(porcentagem +"% carregando... " );
   
//     if (porcentagem < 100){
//         porcentagem +=5;

//     }else {
//         estaCarregando = false;
        
//     }
// }

//------------------------------------------