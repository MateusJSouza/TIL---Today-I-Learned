/*
  História:
  Ben tem uma ideia muito simples para obter algum lucro: ele compra algo e
  vende novamente. Claro, isso não lhe daria nenhum lucro se ele simplesmente
  comprasse e vendesse pelo mesmo preço. Em vez disso, ele vai comprá-lo pelo
  menor preço possível e vendê-lo pelo maior.

  Tarefa:
  Escreva uma função que retorne o número mínimo e máximo da lista/matriz
  fornecida.

  Exemplos (Entrada --> Saída)
  [1,2,3,4,5] --> [1,5]
  [2334454,5] --> [5,2334454]
  [1] --> [1,1]
  
  Observações:
  Todos os arrays ou listas sempre terão pelo menos um elemento, então você
  não precisa verificar o tamanho. Além disso, sua função sempre obterá um
  array ou uma lista, você não precisa verificar se há null, undefined ou
  similar.
*/

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

/* 
  ...arr -> spread operator, pega todos os números dentro que há dentro do array
  Math.min() o menor número dentro do array
  Math.max() - retorna o maior número dentro do array
*/