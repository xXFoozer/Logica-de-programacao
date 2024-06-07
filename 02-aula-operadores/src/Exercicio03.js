import leia from "readline-sync"

var Nplaca = leia.questionInt("ÚLTIMO DIGITO DA SUA PLACA: ");

if (Nplaca == 0 <= 1){
    console.log("NÃO PODE SAIR SEGUNDA.");
}else if(Nplaca == 2&&3){
    console.log("NÃO PODE SAIR TERÇA");
}else if(Nplaca == 4&&5){
    console.log("NÃO PODE SAIR QUARTA");
}else if(Nplaca == 6&& 7){
    console.log("NÃO PODE SAIR QUINTA");
}else if(Nplaca == 8&& 9) {
    console.log("NÃO PODE SAIR NA SEXTA");
}