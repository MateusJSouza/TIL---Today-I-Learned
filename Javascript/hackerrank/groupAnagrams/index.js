function groupAnagrams(strs) {
  let res = {} // mapping charCount to list of anagrams

  // Iteração pelas palavras, percorrendo cada palavra "s" no array "strs"
  for (let s of strs) {
    let count = new Array(26).fill(0); // a ... z

    // Atualizando a contagem percorrendo cada caractere "c" na palavra "s" 
    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let commaSeparatedCount = count.join(',');

    // Verificando se a chave commaSeparated já existe no objeto "res"
    if (commaSeparatedCount in res) {
      res[commaSeparatedCount].push(s);
    } else {
      res[commaSeparatedCount] = [s];
    }
    console.log('res', res)
    console.log('Object.values(res)', Object.values(res))
  }
  return Object.values(res)
}