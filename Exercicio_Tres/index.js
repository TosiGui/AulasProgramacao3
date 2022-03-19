var input = require('fs').readFileSync('D:\\Gui\\Javascript\\Exercicio_Tres\\entrada.txt', 'utf-8'); 
var lines = input.split(',')
lines.forEach((result)=>{
    console.log(result);
})

let bruto = parseInt(lines[0]) * parseInt(lines[1]);
let inss = bruto * 0.11;
let ir = bruto * 0.08;
let sindicato = bruto * 0.05;
let liquido = bruto - inss - sindicato;

console.log(`Salário Bruto: ${bruto.toFixed(2)}R$`);
console.log(`inss: ${inss}R$`);
console.log(`IR: ${ir}R$`);
console.log(`Sindicato: ${sindicato}R$`);
console.log(`Sálario Liquido: ${liquido}R$`);