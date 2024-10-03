/*
  Alice e Bob criaram um problema para o HackerRank. Um revisor classifica
  os dois desafios, atribuindo pontos em uma escala de 1 a 100 para três
  categorias: clareza do problema, originalidade e dificuldade.

  A classificação para o desafio de Alice é a trinca a = (a[0], a[1], a[2]), e a
  classificação para o desafio de Bob é a trinca b = (b[0], b[1], b [2]).

  A tarefa é encontrar seus pontos de comparação comparando a[0] com b[0],
  a[1] com b[1] e a[2] com b[2].

  Se a[i] > b[i], então Alice recebe 1 ponto.
  Se a[i] < b[i], Bob recebe 1 ponto.
  Se a[i] = b[i], então nenhuma das pessoas recebe um ponto.
  Os pontos de comparação são o total de pontos que uma pessoa ganhou.

  Dados a e b, determine seus respectivos pontos de comparação.

  Exemplo

  a = [1, 2, 3]
  b = [3, 2, 1]
  Para os elementos *0*, Bob recebe um ponto porque a[0] .
  Para os elementos iguais a[1] e b[1], nenhum ponto é ganho.
  Finalmente, para os elementos 2, a[2] > b[2] então Alice recebe um ponto.
  A matriz de retorno é [1, 1] com a pontuação de Alice primeiro e a de Bob
  em segundo.

  Descrição da função

  Complete a função compareTriplets no editor abaixo.

  compareTriplets tem os seguintes parâmetros:

  int a[3]: classificação de desafio de Alice
  int b[3]: classificação de desafio de Bob
  Retornar

  int[2]: A pontuação de Alice está na primeira posição e a pontuação de Bob
  está na segunda.
  Formato de entrada

  A primeira linha contém 3 inteiros separados por espaço, a[0], a[1] e a[2],
  os respectivos valores no tripleto a.
  A segunda linha contém 3 inteiros separados por espaço, b[0], b[1] e b[2],
  os respectivos valores no tripleto b.
*/

function compareTriplets(a, b) {
  let score = [0, 0]
  for (let i = 0; i < a.length; i++) {
      a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : ""
  }
  return score;
}

/*
  Explicação: comparando os valores de cada score, onde caso a[i] for maior que
  b[i], receberá 1 ponto, e caso a[i] for menor que b[i] receberá 1 ponto e no
  fim são comparados os dois pontos.
*/