import leia from "readline-sync"

console.log("informe valor da doacao ")
console.log("1- 10 reais")
console.log("2 - 25 reais")
console.log("3- 50 ")
console.log("4 - outros valores")

var opcao = leia.question("informe a opcao")
if (opcao === "1"){
    console.log("vc doou 10 reais muitpo obgd")
}else if(opcao === "2"){
    console.log("vc doou 25 reais muito obgd ")
}else if( opcao === "3"){
    console.log("vc doou 50 reais muitpo obgd")
}else if (opcao === "4"){
    var valor = leia.question("informe o valor que deseja doar")
    console.log("vc doou R$ "+ valor + " muito obgd")
}else {
    console.log("opcao invalida")
}

