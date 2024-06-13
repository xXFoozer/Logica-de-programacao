import leia from "readline-sync"

var salario= leia.questionInt("QUAL O SEU SALARIO: ");
var emprestimo= leia.questionInt("QUAL O VALOR DO EMPRESTIMO: ")
var prestacoes= leia.questionInt("PRETENDE FAZER EM QUANTAS PRESTACOES: ")

var limite =0.30*salario
var parcelas = emprestimo / prestacoes

// var formatador = new Intl.NumberFormat("pt-BR",{
//     style: "currency",
//     currency: "BRL"
// })



if(parcelas > limite){
    console.log("negado")
}else{
    console.log("aprovado")
}
