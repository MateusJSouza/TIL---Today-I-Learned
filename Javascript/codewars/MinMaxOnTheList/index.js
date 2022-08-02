/*
  Sua tarefa é fazer duas funções ( max e min, ou maximum e mini, etc., dependendo do idioma ) que recebam uma lista de inteiros como entrada e retornem o maior e o menor número dessa lista, respectivamente.

  Exemplos (Entrada -> Saída)
  * [4,6,2,1,9,63,-134,566] -> max = 566, min = -134
  * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
  * [42, 54, 65, 87, 0] -> min = 0, max = 87
  * [5] -> min = 5, max = 5
  Notas
  Você pode considerar que não haverá matrizes/vetores vazios.
*/

const min = (list) => Math.min(...list)

const max = (list) => Math.max(...list)

console.log(min([12, 5, 7, 20, 100, 940, 60]))
console.log(max([12, 5, 7, 20, 100, 940, 60]))