import leia from "readline-sync"

var salario= leia.questionInt("QUAL O SEU SALARIO: ");
var emprestimo= leia.questionInt("QUAL O VALOR DO EMPRESTIMO: ")
var prestacoes= leia.questionInt("PRETENDE FAZER EM QUANTAS PRESTACOES: ")

var conta =30*salario/100
var empr = emprestimo / prestacoes

if(empr > conta){
    console.log("negado")
}else{
    console.log("aprovado")
}
