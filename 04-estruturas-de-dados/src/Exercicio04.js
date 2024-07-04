var maxima = []
var maiores = []
for(var i = 0 ; i<10; i++){
    maxima.push(parseInt(Math.random() * 100 ))
}


for (var i = 0; i < maxima.length; i ++){
    if(maxima[i]> 10){
        maiores.push(maxima[i])
    }
} 
console.log(maxima)
console.log(maiores)