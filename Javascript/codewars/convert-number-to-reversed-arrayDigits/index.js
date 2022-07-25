/*
  Dado um número aleatório não negativo, você deve retornar os dígitos desse
  número em uma matriz na ordem inversa.
*/

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// String(n) -> transformando o parâmetro "n" em string
// split -> separando por um espaço as strings
// map -> mapeando os números e logo em seguida revertendo a ordem deles