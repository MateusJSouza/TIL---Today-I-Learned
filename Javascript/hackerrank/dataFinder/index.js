function dataFinder(data) {
  return function find(minRange, maxRange, value) {
    // Se a data máxima for maior que o tamanho do array - 1, vai disparar a mensagem de erro que o range é inválido
    if (maxRange > data.length - 1) {
      throw new Error('Invalid range');
    }
    
    for (let i = minRange; i <= maxRange; i++) {
      if (data[i] === value) {
        return true;
      }
    }
    return false;
  }
}