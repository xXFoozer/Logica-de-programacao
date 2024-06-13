import leia from "readline-sync"

var mes = leia.questionInt("QUAL O MES QUE vc precisa: ")
//1,3,5,7,8,10,12
//4,6,9 e 11.


if(mes === 1 || mes== 3 ){
    console.log("seu mes tem 31 dias")

}else if (mes === 5|| mes == 7 ){
    console.log("seu mes tem 31 dias")

}else if (mes === 8 || mes == 10 ){
    console.log("seu mes tem 31 dias")

}else if (mes === 12){
    console.log("seu mes tem 31 dias")
}

if(mes === 4 || mes== 6){
    console.log("seu mes tem 30 dias")

}else if(mes === 9 ||mes== 11){
    console.log("seu mes tem 30 dias")

}else if(mes == 2){
    console.log("seu mes tem 28 ou 29 dias")
}