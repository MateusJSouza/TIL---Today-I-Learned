const input = require('fs').readFileSync("stdin", "utf-8");

let idadeEmDias = parseInt(input);

// Calcula os anos, meses e dias
const anos = Math.floor(idadeEmDias / 365);
const meses = Math.floor((idadeEmDias % 365) / 30);
const dias = (idadeEmDias % 365) % 30;

// Formata a saída como uma string
const idadeFormatada = `${anos} ano(s), ${meses} mes(es), ${dias} dia(s)`;

console.log(idadeFormatada);

/* 
  OBS: para calcular o número de anos, basta dividir o número total de dias por 365 e arredondar para baixo. Para calcular o número de meses, podemos utilizar o resto da divisão entre o número total de dias e 365, dividido por 30, e arredondar para baixo. E para calcular o número de dias, podemos utilizar o resto da divisão entre o número total de dias e 365, e o resto da divisão entre o valor anterior e 30.
*/


