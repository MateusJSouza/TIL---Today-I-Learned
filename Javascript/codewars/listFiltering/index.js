/*
  Neste kata, você criará uma função que recebe uma lista de inteiros e strings
  não negativos e retorna uma nova lista com as strings filtradas.
*/

function filter_list(l) {
  return l.filter((value) => {
    if (typeof value === 'number') {
      return true
    }
  })
}

/*
  Explicação: a filtragem será feita nos valores do array, caso o valor seja
  numérico, retornará true
*/