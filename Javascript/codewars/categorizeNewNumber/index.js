/*
  O Western Suburbs Croquet Club tem duas categorias de membros, Sênior e
  Aberto. Eles gostariam de sua ajuda com um formulário de inscrição que
  informará aos associados em potencial em qual categoria eles serão colocados.

  Para ser sénior, o membro deve ter pelo menos 55 anos e um handicap superior
  a 7. Neste clube de croquet, os handicaps variam de -2 a +26; quanto melhor
  o jogador, menor o handicap.

  Entrada:
  A entrada consistirá em uma lista de pares. Cada par contém informações para
  um único membro em potencial. A informação consiste em um número inteiro para
  a idade da pessoa e um número inteiro para a deficiência da pessoa.

  Resultado:
  A saída consistirá em uma lista de valores de string (em Haskell e C: Open
  ou Senior) informando se o respectivo membro deve ser colocado na categoria
  sênior ou aberta.
*/

function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
}

/* 
  Explicação: o map é feito para mapear os dados do array, caso a idade for 
  maior que 54 e o handicap maior que 7, o membro será considerado senior,
  senão ele será considerado open.
*/