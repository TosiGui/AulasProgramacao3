var input = require('fs').readFileSync('D:\\Gui\\Javascript\\Exercicio_Quatro\\entrada.txt', 'utf-8'); 
var lines = input.split(',')
lines.forEach((result)=>{
    console.log(result);
})

let populacaoA = parseInt(lines[0]);
let populacaoB = parseInt(lines[1]);
let contador = 0;
while(populacaoA < populacaoB){
    populacaoA += (populacaoA * 0.03);
    populacaoB += (populacaoA * 0.015);
    console.log(`Populacao de A= ${populacaoA.toFixed(0)} / Populacao de B= ${populacaoB.toFixed(0)}`)
    contador++;
}

console.log(`Total de anos para a população A ultrapasse população B é de ${contador}`);