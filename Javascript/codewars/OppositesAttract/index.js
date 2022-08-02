/*
  Timmy e Sarah pensam que estão apaixonados, mas perto de onde moram, eles
  só saberão quando colherem uma flor cada. Se uma das flores tiver um número
  par de pétalas e a outra tiver um número ímpar de pétalas, significa que
  eles estão apaixonados.

  Escreva uma função que pegue o número de pétalas de cada flor e retorne true
  se elas estiverem apaixonadas e false se não estiverem.
*/

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

/*
  Explicação: o operador restante (%) retorna o restante que sobra quando um
  operando é dividido por um segundo operando. Sempre leva o sinal do dividendo.

  flower1 % 2 !== flower2 % 2 -> se uma das flores tiver um número par de
  pétalas e a outra tiver um número ímpar de pétalas, significa que eles
  estão apaixonados.
*/

