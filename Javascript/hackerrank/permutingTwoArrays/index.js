function twoArrays(k, A, B) {
  /*
    Classifica a matriz A em ordem decrescente usando o método sort e atribui
    o resultado à variável "a"
  */
  const a = A.sort((x, y) => y - x);
  
  /*
    Classifica a matriz b em ordem crescente usando o método sort.
    O método map subtende o valor de "k" do valor atual do elemento,
    e atribui o resultado a variável "b"
  */
  const b = B.sort((x, y) => x - y).map((x) => k - x);

  /*
    Usa o método find para encontrar o primeiro elemento de "b" cujo valor é
    menor que o elemento correspondente em "a"
  */
  return b.find((b, i) => a[i] < b) ? "NO" : "YES";

  /* 
    Em resumo, a função verifica se existe um índice "i" tal que "a[i] < k - b[i]",
    se existir, retorna "NO", caso contrário, retorna "YES"
  */
}