const longestCommonPrefix = (strs) => {
  let size = strs.length

  if (size === 0) {
    return ''
  }

  if (size === 1) {
    return strs[0]
  }

  strs.sort()

  // Encontrando o tamanho mínimo da primeira e última string
  let end = Math.min(strs[0].length, strs[size - 1].length)

  // Encontrando o prefixo comum entre a primeira e última string
  let i = 0
  while (i < end && strs[0][i] == strs[size - 1][i]) i++

  // Retorna uma nova string que contém os caracteres da posição inicial até a posição final
  let pre = strs[0].substring(0, i)
  return pre
};