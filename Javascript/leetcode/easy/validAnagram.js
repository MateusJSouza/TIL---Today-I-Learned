/* 
  EXPLICAÇÃO:
  Essa função chamada isAnagram verifica se duas strings, s e t, são anagramas
  uma da outra. Um anagrama é uma palavra ou frase formada pela reorganização
  das letras de outra palavra ou frase.

  A função primeiro verifica se as duas strings têm o mesmo comprimento. Se não
  tiverem, ela retorna false, indicando que não são anagramas.

  Em seguida, a função chama a função auxiliar reorder para reorganizar as letras
  das strings em ordem alfabética. A função reorder divide a string em um array
  de caracteres, ordena esses caracteres alfabeticamente e, em seguida, junta-os
  novamente em uma string.

  Por fim, a função isAnagram compara as strings reorganizadas reorder(s) e
  reorder(t). Se forem iguais, a função retorna true, indicando que as duas
  strings são anagramas. Caso contrário, retorna false.
*/ 

const isAnagram = (s, t) => {
    const isEqual = s.length === t.length
    if (!isEqual) return false

    return reorder(s) === reorder(t)
};

const reorder = (str) => str
  .split('')
  .sort((a, b) => a.localeCompare(b))
  .join('')