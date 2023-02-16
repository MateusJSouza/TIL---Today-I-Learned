const input = require('fs').readFileSync("stdin", "utf-8");

// Leia o valor em segundos
let tempoEmSegundos = parseInt(input.split("\n"));

// Calcula as horas, minutos e segundos
const horas = Math.floor(tempoEmSegundos / 3600);
const minutos = Math.floor((tempoEmSegundos - (horas * 3600)) / 60);
const segundos = tempoEmSegundos - (horas * 3600) - (minutos * 60);

// Formata a saída como uma string
const tempoFormatado = `${horas.toString().padStart(1, '0')}:${minutos.toString().padStart(1, '0')}:${segundos.toString().padStart(1, '0')}`

console.log(tempoFormatado);

