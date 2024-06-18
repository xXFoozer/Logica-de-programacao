import leia from "readline-sync"

var idade = leia.questionInt(" sua idade ")
if(idade< 18){
    var permissao = leia.question("seus pais deixaram \n 1- sim\n 2- nao\n ")
    if(permissao === "1"){
        var nome = leia.question("seu nome ")
        console.log("pode viajar "+ nome )
    }else if ( permissao === "2"){
        console.log("nao pode viajar")
    }else {
        console.log(" invalido")
    }
}else {
    var nome = leia.question("seu nome ")
        console.log("pode viajar "+ nome )
}