import leia from "readline-sync"

var gabarito = []
var respostasProva= []
var nota = 0

for(var i = 0 ; i < 10; i++){
    gabarito[i]= leia.question(" INFORME A RESPOSTA DA QUESTAO "+(i+1)+ '    ')
}

console.log("DIGITE SUAS RESPOSTAS -------------------------")

for(var i = 0 ; i < 10; i++){
    respostasProva[i]= leia.question(" INFORME A RESPOSTA DA QUESTAO "+(i+1)+'   ')
}


for(var i =0 ; i < gabarito.length; i++){
    if(gabarito[i] === respostasProva[i]){
        nota++
    }

}




console.table(gabarito)
console.table(respostasProva)
console.table("SUA NOTA É:  "+nota)