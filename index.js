var input = require('fs').readFileSync('entrada.txt', 'utf8');
var lines = input.split(',');

let a = lines[0];
let b = lines[1];
let c = lines[2];

let x1 = (((-b) + Math.sqrt(((b * b) - (4 * a * c)))) / (2 * a));
console.log('x\'', x1);

let x2 = (((-b) - Math.sqrt(((b * b) - (4 * a * c)))) / (2 * a));
console.log('x\'\'', x2);