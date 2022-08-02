/*
  O museu de coisas chatas incríveis
  O museu das coisas chatas incríveis quer se livrar de algumas exposições.
  Miriam, a arquiteta de interiores, bola um plano para remover as exposições
  mais chatas. Ela atribui a eles uma classificação e, em seguida, remove aquele
  com a classificação mais baixa.

  No entanto, assim que ela terminou de avaliar todas as exposições, ela está
  indo para uma feira importante, então ela pede que você escreva um programa
  que diga a ela as classificações dos itens depois que um deles removeu o menor.
  Justo.

  Tarefa
  Dada uma matriz de inteiros, remova o menor valor. Não altere a matriz/lista
  original. Se houver vários elementos com o mesmo valor, remova aquele
  com um índice menor. Se você obtiver um array/lista vazio, retorne um
  array/lista vazio.

  Não altere a ordem dos elementos restantes.

  Exemplos
  * Entrada: [1,2,3,4,5], saída= [2,3,4,5]
  * Entrada: [5,3,2,1,4], saída = [5,3,2,4]
  * Entrada: [2,2,1,2,1], saída = [2,2,2,1]
*/

function removeSmallest(numbers) {
  let result = [],
      length = numbers.length,
      array = [...numbers],
      count = 0
 
  // Comparando os números do array para saber qual o menor entre eles
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  // Verificando se o array é vazio, caso ele for, o loop será parado
  for (let i = 0; i < length; i++) {
    if (numbers[i] === array[0]) {
      break;
    }
    count++;
  } console.log(count)

  // Removendo os números com menores índices
  for (let i = 0; i < length; i++) {
    if (i !== count) {
      result.push(numbers[i])
    }
  }
  return result
}

// ------------ OUTRA FORMA DE FAZER COM MENOS CÓDIGO ----------------------

const removeSmallest = numbers =>
  numbers.filter((_, index) => index !== numbers.indexOf(Math.min(...numbers)))

/*
  Explicação:

  Filter -> cria um novo array com todos os elementos que passaram no teste
  implementado pela função fornecida.
  
  IndexOf -> retorna o primeiro índice em que o elemento pode ser encontrado
  no array, retorna -1 caso o mesmo não esteja presente.

  Math.min -> retorna o menor valor passado como parâmetro, ou NaN
  se o parâmetro não é ou não pode ser convertido para um número.

  Ou seja, o filter filtra qualquer coisa no índice que não seja o menor número
  e caso o index seja diferente, o índice é definido para que ele seja o menor
  número do array.
*/