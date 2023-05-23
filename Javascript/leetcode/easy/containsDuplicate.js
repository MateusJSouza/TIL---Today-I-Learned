/* 
  EXPLICAÇÃO:
  Essa função chamada containsDuplicate verifica se há duplicatas em uma
  matriz de números. Ela percorre a matriz e compara cada elemento com os
  elementos anteriores a ele. Se encontrar dois elementos iguais, a função
  retorna true indicando que há uma duplicata. Caso contrário, se não encontrar
  nenhuma duplicata, ela retorna false.
*/

const containsDuplicate = (nums) => {
  for (let right = 0; right < nums.length; right++) {
    for (let left = 0; left < right; left++) {
      const isDuplicate = nums[left] === nums[right]
      if (isDuplicate) return true
    }
  }

  return false
};