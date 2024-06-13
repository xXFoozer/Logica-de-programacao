import leia from "readline-sync"

var nome = leia.question("seu nome: ");
  var salario = leia.questionFloat("salario: ");
  var deps = leia.questionInt("seus dependentes: ");

  if(deps === 0){
    var total = salario + 1.02;
   
  }else if(deps === 1){
    var total = salario + 1.05;
    
  }else if(deps === 2){
    var total = salario + 1.07;
   
  }else if(deps === 3){
    var total = salario + 1.10;
 
  }else{
    var total = salario + 1.15;
    
  }
  console.log(nome + "seu salario é:  r$"+ total.toFixed(2));