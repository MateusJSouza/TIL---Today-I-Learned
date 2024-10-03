/* 
  x1 e x2 representa a posição inicial do canguru
  v1 e v2 representa a distância do salto do canguru

  Exemplo de input: 0 3 4 2
  Output: YES
*/

function kangaroo(x1, x2, v1, v2) {
  let jump1 = x1;
  let jump2 = x2;
  let yesNo = 'NO';

  for (let i = 0; i <= 10000; i++) {
    jump1 += v1;
    jump2 += v2;

    if (jump1 === jump2) {
      yesNo = 'YES';
    }
  }
  return yesNo;
}

console.log(kangaroo(0, 3, 4, 2))