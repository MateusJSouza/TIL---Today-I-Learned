/* Sistemas de gastos familiares

Crie um objeto que possuirá 2 propriedades, ambas do tipo
array: 
  * receitas: []
  * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas que irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguindo do valor do saldo

*/
let family = {
  // Incomes -> receita
  // Expenses -> despesas

  incomes: [1200, 3200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00, 2000]
}

function sum(array) {
  let total = 0;

  // para cada valor do array, eu somo
  for (let value of array) {
    total += value;
  }

  return total;
}

function calculateBalance() {

  // Armazenando os cálculos em constantes
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  // total de receita - total de despesas
  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0;

  let balanceText = "negativo"

  if (itsOk) {
    balanceText = "positivo"
  }

  console.log(`Seu saldo é: ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance()