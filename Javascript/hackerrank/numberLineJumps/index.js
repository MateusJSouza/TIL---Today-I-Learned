/* 
  x1 e x2 representa a posição inicial do canguru
  v1 e v2 representa a distância do salto do canguru

  Exemplo de input: 0 3 4 2
  Output: YES
*/

function kangaroo(x1, x2, v1, v2) {
  if (v1 <= v2) {
    return "NO";
  } else {
    // cálculo do número de saltos que cada canguru precisa dar para se encontrar com o outro, caso esse número for positivo e inteiro, retorna "YES", caso contrário, retorna "NO"
    let meet = (x2 - x1) / (v1 - v2);
    if (meet >= 0 && Number.isInteger(meet)) {
      return "YES";
    } else return "NO";
  }
}