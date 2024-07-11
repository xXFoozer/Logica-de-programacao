
function preencherVertor(tamanhoVetor, min, max) {
    var vetor = [];
    for(var i = 0; i < tamanhoVetor; i++) {
        vetor[i] = parseInt(Math.random() * (max - min)) + min;;
    }

    return vetor;
}

var jogadas = preencherVertor(100,1 ,7 )
var qtdLados = [0 ,0 ,0 ,0 ,0 ,0 ,0]
var porcentLados = []


for(var i = 0; i < jogadas.length; i++){
    qtdLados[jogadas[i]]++
}

for(var i = 1; i < jogadas.length; i++){
    porcentLados[i]= 100 / jogadas.length * qtdLados[i];
}

for(var i = 1; i < jogadas.length; i++){
    if(porcentLados[i]> 22){
        console.log("DADO VICIADO!!!!!!!")
    }
}


console.table(qtdLados)