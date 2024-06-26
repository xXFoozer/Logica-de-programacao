var alturaValentina= 1.50;
var alturaJoao=1.40;
var anos = 0;

while( alturaJoao <= alturaValentina){
    alturaJoao += 0.03;
    alturaValentina += 0.02;
    anos++;

}
console.log("valentina: "+ alturaValentina.toFixed(2))
console.log("joao: "+alturaJoao.toFixed(2))
console.log("demora "+ anos+ " anos pra ele ser maior que ela" )