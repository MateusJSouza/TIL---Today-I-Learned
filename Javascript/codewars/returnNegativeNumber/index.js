/*
  Nesta tarefa simples, você recebe um número e deve torná-lo negativo.
  Mas talvez o número já seja negativo?

  Observações:
    - O número já pode ser negativo e, nesse caso, nenhuma alteração é necessária.
    - Zero (0) não é verificado para nenhum sinal específico. Zeros negativos não fazem sentido matemático.
*/ 

function makeNegative(num) {
  // Code?
  console.log(num)
  return -Math.abs(num)
  // OUTRA FORMA ABAIXO

  // return num < 0 ? num : -num
}

// -Math.abs() -> retorna o valor absoluto de um número, então com o sinal de menos na frente, ele retornará o valor negativo