function birthdayCakeCandles(arr) {
  let max = 0;
  let candles = 0;

  /* 
    Percorrendo o arr, se o valor de "max" for menor que o elemento atual
    "max" é atualizado para esse elemento.
  */
  for (const element of arr) {
    if (max < element) {
      max = element;
    }
  }

  /* 
    Também percorre o array, e se o elemtno atual for igual ao valor de "max",
    a variável "candles" é incrementada em 1.
  */
  for (const element of arr) {
    if (max == element) {
      candles++;
    }
  }

  /*
    Finalmente a função retorna o valor de "candles", que representa a quantidade
    que o número mais alto aparece no array "arr"
  */
  return candles;
}