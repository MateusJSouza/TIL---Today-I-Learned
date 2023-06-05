

function romanToInt(s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  /*
     A variável s é convertida em um array usando o split, que divide a string
     em caracteres individuais e retorna um array contendo esses caracteres
  */
  let arr = s.split('');

  let sum = 0;

  /* 
    A partir daí, a função utiliza um loop for para percorrer o array arr de
    trás para frente. Isso é feito começando do último elemento do array
    (arr.length - 1) e decrementando o índice até chegar a zero. Essa abordagem
    permite analisar os caracteres romanos na ordem correta, levando em
    consideração as regras de subtração utilizadas em alguns casos.
  */
  for (let i = arr.length - 1; i >= 0; i--) {
    /* 
      Dentro do loop, a função verifica cada caractere romano e realiza as
      subtrações necessárias quando existem casos especiais, como IV (4),
      IX (9), XL (40), XC (90), CD (400) e CM (900). Se houver uma
      correspondência entre o caractere atual (arr[i]) e o caractere anterior
      (arr[i - 1]), a função subtrai duas vezes o valor correspondente
      (por exemplo, sum -= 1 * 2).
    */

    // IV: 4
    if (romans[arr[i]] === romans['V']) {
      if (romans[arr[i - 1]] === romans['I']) {
        /* 
          Se houver uma correspondência entre o caractere atual (arr[i]) e o
          caractere anterior (arr[i - 1]), a função subtrai duas vezes o valor
          correspondente (por exemplo, sum -= 1 * 2).
        */
          sum -= 1 * 2;
      }
    }

    // IX : 9
    if (romans[arr[i]] === romans['X']) {
      if (romans[arr[i - 1]] === romans['I']) {
        sum -= 1 * 2;
      }
    }

    // XL : 40
    if (romans[arr[i]] === romans['L']) {
      if (romans[arr[i - 1]] === romans['X']) {
        sum -= 10 * 2;
      }
    }

    // XC : 90
    if (romans[arr[i]] === romans['C']) {
      if (romans[arr[i - 1]] === romans['X']) {
        sum -= 10 * 2
      }
    }

    // CD : 400
    if (romans[arr[i]] === romans['C']) {
      if (romans[arr[i - 1]] === romans['D']) {
        sum -= 100 * 2
      }
    }

    // CM : 900
    if (romans[arr[i]] === romans['M']) {
      if (romans[arr[i - 1]] === romans['C']) {
        sum -= 100 * 2;
      }
    }

    /* 
      Após as verificações especiais, o valor correspondente ao caractere
      romano atual é somado à variável sum usando sum += romans[arr[i]].
    */
    sum += romans[arr[i]]
  }
    return sum;
};