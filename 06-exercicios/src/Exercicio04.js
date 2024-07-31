import leia from "readline-sync"

var palavra = leia.question("DIGITE PALAVRA OU TXT: ");
var palavraInvertida="";
for(var i= palavra.length -1; i >=0; i-- ){
    palavraInvertida += palavra[i];

}

if(palavra === palavraInvertida){
    console.log("É palindromo")
}else{
    console.log("Não é palindromo")
}
