/*
  Dada uma matriz quadrada, calcule a diferença absoluta entre as somas de
  suas diagonais.

  Por exemplo, a matriz quadrada é mostrada abaixo:

  1 2 3
  4 5 6
  9 8 9
  A diagonal da esquerda para a direita = . A diagonal da direita para a
  esquerda = . Sua diferença absoluta é .

  Descrição da função

  Complete a função no editor abaixo.

  diagonalDifference recebe o seguinte parâmetro:

  int arr[n][m]: uma matriz de inteiros
  Retornar

  int: a diferença diagonal absoluta
  Formato de entrada

  A primeira linha contém um único inteiro, , o número de linhas e colunas na
  matriz quadrada.
  Cada uma das próximas linhas descreve uma linha, , e consiste em inteiros
  separados por espaço.

  Restrições

  Formato de saída

  Retorna a diferença absoluta entre as somas das duas diagonais da matriz
  como um único inteiro.
*/

function diagonalDifference(arr) {
  // Tamanho do input da matriz
  const count = arr.length;
  let diagonalOne = 0;
  let diagonalTwo = 0;
  
  // Percorrendo o array e somando as diagonais
  for (let i = 0; i < count; i++) {
    // Calculando a diagonal primária
    diagonalOne += arr[i][i];
    // Invertendo a segunda dimensão do array para calcular a diagonal secundária
    diagonalTwo += arr[count -1 - i][i];
  }
  // Retornando o valor da diferença absoluta
  return Math.abs(diagonalOne - diagonalTwo);
}