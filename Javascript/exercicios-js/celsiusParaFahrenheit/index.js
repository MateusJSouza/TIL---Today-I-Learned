/* Celsius para Fahrenheit

  Crie uma função que receba uma string em celsius ou
  fahrenheit e faça a transformação de uma unidade para
  outra

  C = (F - 32) * 5/9

  F = C * 9/5 + 32

*/

function transformDegree(degree) {
  // Verifica se tem o "C" na variável, deixando tudo em caixa alta
  let celsiusExists = degree.toUpperCase().includes('C')

  // Verifica se tem o "F" na variável, deixando tudo em caixa alta
  let fahrenheitExists = degree.toUpperCase().includes('F')

  // Fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  // fluxo ideal, F -> C
  // replace -> tirando o F para deixar a string vazia e
  // depois a variável é transformada de uma string para um número
  let updatedDegree = Number(degree.split(/\D+/).join("").toUpperCase().replace('F', ''));
  let formula = (fahrenheit) => fahrenheit - 32 * 5/9
  let degreeSign = 'C'

  // fluxo alternativo, C -> F
  if (celsiusExists) {

    // Utilizando expressão regular para buscar somente números
    // split(/\D+/) vai dividir a string em pedaços e pegar tudo que não é número
    // join() vai juntar tudo em uma string novamente
    updatedDegree = Number(degree.split(/\D+/).join("").toUpperCase().replace('C', ''));
    formula = (celsius) => celsius * 9/5 + 32
    degreeSign = 'C'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('10EC'));
  console.log(transformDegree('50F'));
  transformDegree('50Z');
} catch (error) {
  console.log(error.message)
}