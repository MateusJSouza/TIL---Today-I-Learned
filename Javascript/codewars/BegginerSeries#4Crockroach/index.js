// Instruções

/*
  A barata é um dos insetos mais rápidos. Escreva uma função que receba sua
  velocidade em km por hora e a retorne em cm por segundo, arredondado para
  o inteiro (= piso).

  Observação! A entrada é um número real (o tipo real depende do idioma) e
  é >= 0. O resultado deve ser um número inteiro.

  Para um resultado aproximado, multiplique ou valor de velocidade por 27.778
*/

function cockroachSpeed(s) {
  const result = s * 27.778;
  result.toString();
  console.log(parseInt(result, 0));
  return parseInt(result, 0)
}