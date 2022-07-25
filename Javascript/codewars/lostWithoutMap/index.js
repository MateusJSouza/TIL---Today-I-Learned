function maps(x){
  console.log(x)
  return Array.from(x.map(x => x *= 2))
}

// Array.from(x) -> cria uma instância de array 
// map(x => x *= 2) mapeia x para que cada item do array seja dobrado