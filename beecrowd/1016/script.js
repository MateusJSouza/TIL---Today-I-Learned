const input = require('fs').readFileSync("stdin", "utf-8");

// 1ª forma de fazer com regra de 3
// const qtdMinutos = (60 * input) / 30;

// console.log(qtdMinutos + ' minutos');

// 2ª forma -> multiplicando por 2 o valor de input
console.log((input * 2) + ' minutos');