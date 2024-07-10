function preencherVertor(tamanhoVetor, min, max){
    var vetor = [];
    for(var i = 0; i < tamanhoVetor; i++){
        vetor[i] = parseInt(Math.random() * (max - min)) + min
    }

    return vetor;
}

var vetor = preencherVertor(10 , 0 , 50)
function verficaDuplicidade(vetor){

    for(var i = 0; i < vetor.length; i++){
        for(var j = i; j < vetor.length ; j++){
            if( j !== i && vetor[i]=== vetor [j]){
                return true;
            }
    
        }
    }
    return false;
}

var temDupicidade = verficaDuplicidade(vetor)
if(temDupicidade){
    console.log('TEM DUPLICIDADE');
}else{
    console.log('NAO TEM DUPLICIDADE');


}

