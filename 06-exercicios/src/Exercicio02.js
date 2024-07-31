import leia from "readline-sync"
var notas = []
for(var i=0; i<6 ; i++){
    notas.push(leia.questionInt(`DIGITE A ${i+1} NOTA: `))
}
var maior= Math.max(...notas)
var menor= Math.min(...notas)

var soma = 0
for(var i=0; i<6; i++){
    soma += notas[i]
}



soma -= maior + menor;
var media = soma / 4;

console.log("A MEDIA E: "+media);

// var nota1=leia.questionInt("informe a nota 1: ");
// var nota2=leia.questionInt("informe a nota 2: ");
// var nota3=leia.questionInt("informe a nota 3: ");
// var nota4=leia.questionInt("informe a nota 4: ");
// var nota5=leia.questionInt("informe a nota 5: ");
// var nota6=leia.questionInt("informe a nota 6: ");

// var maior = nota1;
// var menor = nota2;
// if(nota2>maior){ maior=nota2; }
// if(nota3>maior){ maior=nota3; }
// if(nota4>maior){ maior=nota4; }
// if(nota5>maior){ maior=nota5; }
// if(nota6>maior){ maior=nota6; }

// if(nota2<menor){ menor=nota2; }
// if(nota3<menor){ menor=nota3; }
// if(nota4<menor){ menor=nota4; }
// if(nota5<menor){ menor=nota5; }
// if(nota6<menor){ menor=nota6; }

// var soma = nota1 + nota2 + nota3 + nota4 +nota5 + nota6;
// soma -= maior + menor;

// var media = soma / 4;

// console.log("A MEDIA E: "+media);
// console.log("A Maior E: "+maior);
// console.log("A Menor E: "+menor);