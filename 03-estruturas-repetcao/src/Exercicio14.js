// ESTUDANTES E NOTAS /---/ DIA 11 07 2024 FAZENDO COM ENSINAMENTOS NOVOS 
// USANDO ARRAYS
import leia from "readline-sync"
var nomes =[]
var medias =[]
var nomeMaiorMedia;
var maiorMedia;


var i = 0;
while(i < 10){
    nomes[i] = leia.question('DIGITE O NOME '+ (i + 1) +': ');
    var somaNotas = 0.0;
    
    for(var j = 1; j <= 3 ; j++){
        somaNotas += leia.questionFloat("DIGITE NOTA 0"+j+":");
    }
    medias[i] = somaNotas / 3;


    i++;
}
for(var i = 0; i < medias.length; i++){
    if(!maiorMedia || medias[i] > maiorMedia){
        maiorMedia = medias[i]
        nomeMaiorMedia = nomes[i]
    }
}

console.log("ESTUDANTE COM A MAIOR MEDIA FOI "+nomeMaiorMedia+" COM "+ media);
// SEM ARRAY----------------------------------------------------


// var nomeMaiorMedia;
// var maiorMedia;

// var i = 1;
// while(i <= 10){
//     var nome = leia.question('DIGITE O NOME '+ i +': ');
//     var somaNotas = 0.0;
    
//     for(var j = 1; j <= 3 ; j++){
//         somaNotas += leia.questionFloat("DIGITE NOTA 0"+j+":");


//     }
//     var media =somaNotas / 3;

//     if(maiorMedia === undefined || media > maiorMedia){
//         maiorMedia = media;
//         nomeMaiorMedia = nome;
//     }


//     i++;
// }
// console.log("ESTUDANTE COM A MAIOR MEDIA FOI "+nomeMaiorMedia+" COM "+ media);