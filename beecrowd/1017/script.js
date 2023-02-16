const input = require('fs').readFileSync("stdin", "utf-8");

const [tempoGasto, veloMedia] = input.split("\n").map(item => parseInt(item));

const distanciaPercorrida = tempoGasto * veloMedia;
const litrosNecessarios = distanciaPercorrida / 12;

console.log(litrosNecessarios.toFixed(3));
