const TENTATIVAS = 1000

function calculaPorcentagem(vezesQuecaiu){
    return (vezesQuecaiu/ TENTATIVAS)*100;

}
function selecionaContador(valor){
    valor === 0 ? verde++ : valor %2 === 0 ? preto++ : vermelho++;
 }


var index =0;
var verde=0; 
var vermelho = 0;
var preto = 0;

while(index < 1000){
    var valorSorteado= parseInt(Math.random()*37);
    selecionaContador(valorSorteado);
    index++;
}

var vermelhoPorcent=calculaPorcentagem(vermelho);
var verdePorcent=calculaPorcentagem(verde);
var pretoPorcent=calculaPorcentagem(preto);

console.log(`VERMELHO - QTD: ${vermelho} PORCENT- ${verdePorcent}`)
console.log(`PRETO - QTD: ${preto} PORCENT - ${pretoPorcent}`)
console.log(`VERDE - QTD: ${verde} POCENT - ${verdePorcent}`)

var verdeEsperado = (1 / 37)*100;
var outrasEsperadas = (18/ 37)*100;


if(verdePorcent > (verdeEsperado*2) || verdePorcent > (outrasEsperadas * 1.1) || pretoPorcent > (outrasEsperadas * 1.1)){
    console.log("PODE ESTAR VICIADA!!!");
}else{
    console.log("NÃO EXISTE A CHANCE DE ESTAR VICIADA")
}