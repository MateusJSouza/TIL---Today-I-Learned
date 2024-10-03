function getTotalX(a, b) {
  let count = 0
  let na = Math.max(...a)
  let mi = Math.min(...b)

  // Loop ente o Array[a](MAX) e Array[b](MIN)
  for(let i = na; i <= mi; i++){
    if((a.every(e => i % e === 0)) && b.every(e => e % i === 0)){
      // Verifica se o i (INTEIRO) é fator dos ELEMENTOS do Array [a] e se os ELEMENTOS do Array [b] são fatores do i (INTEIRO).
      count++ // add +1 para cada número inteiro encontrado
    }
  }

  return count;
}