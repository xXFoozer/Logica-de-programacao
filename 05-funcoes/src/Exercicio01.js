function preencherVertor(tamanhoVetor, min, max){
    var vetor = [];
    for(var i = 0; i < tamanhoVetor; i++){
        vetor[i] = parseInt(Math.random() * (max - min)) + min
    }

    return vetor;
}



var v1 = preencherVertor(9 , 0 , 100)
var v2 = preencherVertor(9 , 0 , 100)
var v3 = preencherVertor(9 , 0 , 100)
 
var vResutado = [];

for(var i = 0; i < v1.length; i++){
    if(i >= 0 && i <= 2){
        vResutado[i] = v1 [i]
    }else if (i >= 3 && i <= 5){
        vResutado[i] = v2 [i]
    }else if (i >= 6 && i <= 8){
        vResutado[i]= v3 [i]
    }
}

console.log(v1)
console.log(v2)
console.log(v3)
console.log(vResutado)