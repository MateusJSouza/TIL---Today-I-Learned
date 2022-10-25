// Instruções:

/*
  Em uma cidade pequena, a população é p0 = 1.000 no início de um ano.
  A população aumenta regularmente 2% ao ano e, além disso, 50 novos
  habitantes por ano vêm morar na cidade. Quantos anos a cidade precisa
  para ver sua população maior ou igual a p = 1200 habitantes?

  Parâmetros dados mais geralmente:

  p0, porcentagem, aug (habitantes entrando ou saindo a cada ano),
  p (população igual ou superior)

  a função nb_year deve retornar n número de anos inteiros necessários para obter
  uma população maior ou igual a p.

  aug é um inteiro, percent um número flutuante positivo ou nulo, p0 e p são
  inteiros positivos (> 0)

  Observação:
  Não se esqueça de converter o parâmetro percent em porcentagem no corpo da
  sua função: se o parâmetro percent for 2, você deve convertê-lo para 0,02.
*/

function nbYear(p0, percent, aug, p) {
  let sum = 0;
  let count = 0;

  console.log("args", p0, percent, aug, p);

  // Enquanto a soma for menor que a população
  while (sum < p) {
    // Math.floor -> retorna o menor número inteiro dentre o cálculo
    sum = Math.floor(p0 + p0 * (percent / 100) + aug);
    // p0 recebe a soma
    p0 = sum;
    // e incrementa a contagem
    count++;
  }
  console.log("sum", sum);
  console.log("count", count);

  return count;
}