const input = require('fs').readFileSync("stdin", "utf-8");

// Regra de 3
const qtdMinutos = (60 * input) / 30;

console.log(qtdMinutos + ' minutos');