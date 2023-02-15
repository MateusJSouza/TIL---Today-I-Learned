const input = require('fs').readFileSync("stdin", "utf-8");

const valores = input.split("\n");

const [x1, y1] = valores[0].split(" ");
const [x2, y2] = valores[1].split(" ");

const distancia = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2));

console.log(distancia.toFixed(4));