/* 
  A função binarySearch pega um array ordenado e um item. Se o item está no 
  array, a função retorna sua posição. Dessa maneira, você é capaz de saber
  por qual ponto do array deve continuar procurando.
*/

function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  let middle = 0;
  let kick = 0;

  while (low <= high) {
    // Math.floor -> retorna o valor inteiro do resultado da divisão
    middle = Math.floor((low + high) / 2);
    kick = list[middle];
  
    if (kick === item) {
      return middle;
    }

    if (kick > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return null;
}
let myList = [1, 3, 5, 7, 9]

console.log(binarySearch(myList, 3))