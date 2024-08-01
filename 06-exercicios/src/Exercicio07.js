import leia from "readline-sync"
var melhorJogador;
var melhorPontuacao;
var time = []


for(var i =0; i<3; i++){
    var nome = leia.question("INFORME O NOME DO JOGADOR: ")
    var qtdGols= leia.questionInt("QTD DE GOLS: ")
    var qtdPc= leia.questionInt("QTD DE PASSE CERTO: ")
    var qtdPe= leia.questionInt("QTD DE PASSE ERRADO: ")
    var pontos = (qtdGols * 50)+(qtdPc*10)+(qtdPe * -5)

    time.push({
        nome: nome,
        gols: qtdGols,
        passesCertos: qtdPc,
        passesErrados: qtdPe,
        pontos: pontos
        
    })


    if( !melhorPontuacao || pontos > melhorPontuacao){
        melhorJogador = nome
        melhorPontuacao = pontos
    }

    




    if(pontos < 50){
    console.log(`${nome} PESSIMO `)
    }else if(pontos >= 50 && pontos < 100){
    console.log(`${nome} ruim`)
    }else if(pontos >= 100 && pontos < 150){
    console.log(`${nome} basico`)
    }else if(pontos >= 150 && pontos < 200){
    console.log(`${nome} foi bem`)
    }else {
    console.log(`${nome} jogou demais`)
    }
}

console.log(`O MELHOR JOGADOR FOI ${nome} COM ${melhorPontuacao} PONTOS`)
console.log(time)