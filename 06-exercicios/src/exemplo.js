import leia from "readline-sync"

function mostrar(){
    var nome= leia.question("digite o nome: ")

    console.log("Olá, "+ nome)
}

function somar(){
    var num1 = leia.questionInt("DIGITE O NUMERO: ")
    var num2 = leia.questionInt("DIGITE O NUMERO: ")

    var result = num1 + num2;
    console.log("O RESULTADO É: "+ result)
}

function subtrair (num1, num2 ){
    var result = num1 - num2
    console.log("O RESULTADO É: "+ result)
}
function multi (num1, num2){
    var result = num1 * num2
    return result;
}
subtrair(35,200);

var resultado = multi(20,30);
console.log(resultado)

somar();
mostrar();