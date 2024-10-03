/*
  Neste desafio, você deve calcular e imprimir a soma dos elementos em uma
  matriz, tendo em mente que alguns desses inteiros podem ser bem grandes.

  Descrição da função

  Complete a função aVeryBigSum no editor abaixo. Deve retornar a soma de
  todos os elementos do array.

  aVeryBigSum tem os seguintes parâmetros:

  int ar[n]: uma matriz de inteiros.
  Retornar

  long: a soma de todos os elementos do array
  Formato de entrada

  A primeira linha da entrada consiste em um inteiro.
  A próxima linha contém inteiros separados por espaço contidos na matriz.

  Formato de saída

  Retorna a soma inteira dos elementos na matriz.

*/

function aVeryBigSum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
      sum += ar[i]
  }
  return sum;
}

/*
  Enquanto o i for menor que o tamanho do array, cada índice do array será
  somado e o resultado da soma será atribuído a variável sum;
*/