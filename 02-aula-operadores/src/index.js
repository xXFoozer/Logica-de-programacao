import leia from "readline-sync"

var corrida1=Number(leia.question("QUAL O VALOR DA PRIMEIRA CORRIDA: "));
var corrida2=Number(leia.question("QUAL O VALOR DA SEGUNDA CORRIDA: "));
var corrida3=Number(leia.question("QUAL O VALOR DA TERCEIRA CORRIDA: ")); 
var corrida4=Number(leia.question("QUAL O VALOR DA QUARTA CORRIDA: "));
var corrida5=Number(leia.question("QUAL O VALOR DA QUINTA CORRIDA:"));

var total = (corrida1 + corrida2 + corrida3 + corrida4 + corrida5) 
var porcentagem= total - (total *0.25);

console.log("VALOR LIQUIDO: R$"+ porcentagem)
