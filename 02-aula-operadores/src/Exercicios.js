import leia from "readline-sync"

var texto= leia.questionInt("SUA SENHA: ");


if(texto === 1234){
    console.log("ACESSO PERMITIDO...");

}else if(texto != 1234) {
    console.log("ACESSO NEGADO VC ESQUECEU A SENHA 1234...");

} 