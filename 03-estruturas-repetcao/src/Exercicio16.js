import leia from "readline-sync";

var numeroMagico;

var opcaoJogo = leia.keyInSelect(["PvP","PvE"]);

if(opcaoJogo === 0){
    numeroMagico = leia.questionInt("DIDGITE O NUMERO MAGICO: ",{ hideEchoBack: true });
}else if(opcaoJogo === 1){
    var dificuldade = leia.keyInSelect(["facil","media","dificil"]);
    switch(dificuldade){
        case 0:
            numeroMagico =parseInt( Math.random()* 10 );
            break;
        case 1 :
            numeroMagico =parseInt( Math.random()* 10000 );
            break;
        case 2 : 
            numeroMagico =parseInt( Math.random()* 1000000 );
            break;
    }
}
var tentativas = 0

do {
    var palpite = leia.questionInt("DIGITE PALPITE: ");
    if(palpite > numeroMagico){
        console.log("numero magico e menor")
    }else if(palpite < numeroMagico){
        console.log("numero magico e maior")
    }else{
        console.log("acertou miseravi")
    }

    tentativas++
}while(palpite !== numeroMagico);
console.log ("VC PRECISOU DE "+tentativas+ " TENTATIVAS PARA ACERTAR O NUMERO")