var input = require('fs').readFileSync('D:\\Gui\\Javascript\\Exercicio_Dois\\entrada.txt', 'utf-8'); 
var lines = input.split(',')

let result = parseInt(lines[1]) * 365;
console.log(`${lines[0]} VOCÊ JÁ VIVEU ${result} DIAS`);