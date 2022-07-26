/*
  Depois de um trimestre difícil no escritório, você decide descansar um pouco
  nas férias. Então você vai reservar um voo para você e sua namorada e tentar
  deixar toda a bagunça para trás.

  Você vai precisar de um carro alugado para se locomover em suas férias.
  O gerente do aluguel de carros faz algumas boas ofertas.

  Cada dia que você aluga o carro custa $ 40. Se você alugar o carro por
  7 dias ou mais, você ganha $ 50 de desconto no total. Alternativamente,
  se você alugar o carro por 3 ou mais dias, você ganha $ 20 de desconto
  no total.

  Escreva um código que forneça o valor total para diferentes dias(d).
*/

function rentalCarCost(d) {
  return 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0)
}

/* 
  Explicação: cada dia (1 dia) custa 40 dólares, ou seja,
  se o dia for maior que 6, ou seja, 7, ele vai subtrair o valor dos dias
  reservados e vai subtrair -50 dólares, que é o desconto caso sejam mais de
  7 dias. Caso for 3 dias, o desconto será de 20 dólares, e caso não for 
  nenhuma dessas condições, a pessoa não terá desconto.
  */