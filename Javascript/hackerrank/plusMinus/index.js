/*
  Dada uma matriz de inteiros, calcule as razões de seus elementos que são
  positivos, negativos e zero. Imprima o valor decimal de cada fração em uma
  nova linha com casas após o decimal.

  Nota: Este desafio apresenta problemas de precisão. Os casos de teste são
  dimensionados para seis casas decimais, embora respostas com erro absoluto
  de até sejam aceitáveis.

  Exemplo:

  Existem elementos, dois positivos, dois negativos e um zero. Suas proporções
  são , e . Os resultados são impressos como:

  0.400000
  0.400000
  0.200000

  Descrição da função

  Complete a função plusMinus no editor abaixo.

  plusMinus tem os seguintes parâmetros:

  int arr[n]: uma matriz de inteiros
  Imprimir
  Imprima as proporções de valores positivos, negativos e zero na matriz. Cada valor deve ser impresso em uma linha separada com dígitos após o decimal. A função não deve retornar um valor.

  Formato de entrada

  A primeira linha contém um inteiro, , o tamanho da matriz.
  A segunda linha contém inteiros separados por espaço que descrevem .

  Restrições
  Formato de saída
  Imprima as seguintes linhas, cada uma em decimais:

  proporção de valores positivos
  proporção de valores negativos
  proporção de zeros
*/

function plusMinus(arr) {
  // Filter utilizado para filtrar os valores do array
  let positive = arr.filter(number => number > 0).length / arr.length;
  let negative = arr.filter(number => number < 0).length / arr.length;
  let zeronums = arr.filter(number => number == 0).length / arr.length;
  
  return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))

}