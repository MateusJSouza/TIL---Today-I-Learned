function makeNegative(num) {
  // Code?
  console.log(num)
  return -Math.abs(num)
  // OUTRA FORMA ABAIXO

  // return num < 0 ? num : -num
}

// -Math.abs() -> retorna o valor absoluto de um número, então com o sinal de menos na frente, ele retornará o valor negativo