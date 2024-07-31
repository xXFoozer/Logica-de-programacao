import leia from "readline-sync";

var numero = [];
for(var i= 0; i<3;i++){
    numero[i] = leia.questionInt(" NUMERO "+(i + 1)+": ");
}

var numeroOrdenado = numero.sort();
console.log(numeroOrdenado);

//-------------------------------------------------------------------------------------------------------

// var a = leia.questionInt("PRIMEIRO NUMERO: ");
// var b = leia.questionInt("SEGUNDO NUMERO: ");
// var c = leia.questionInt("TERCEIRO NUMERO: ");
// if(a < b && b < c){
//     console.log(a,b,c);
// }else if(a<c && c < b){
//     console.log(a,c,b);
// }else if (b<a && c<a){
//     console.log(a,c,b);
// }else if (b<c && a<c){
//     console.log(b,c,a);
// }else if (c<a && a<b){
//     console.log(c,a,b);
// }else{
//     console.log(c,b,a);
// }