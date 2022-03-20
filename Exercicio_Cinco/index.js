var input = require('fs').readFileSync('D:\\Gui\\Javascript\\Exercicio_Cinco\\entrada.txt', 'utf-8'); 
var lines = input.split(',')
lines.forEach((result)=>{
    console.log(result);
})

let num1 = parseInt(lines[0]);
let num2 = parseInt(lines[1]);
let num = num1;

while(num <= num2){
    if(primo(num)){
        console.log(`NUmero primo: ${num}`);
    }
    num++;
}


function primo(num){
    for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}