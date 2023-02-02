// Fornece uma maneira de gerenciar lugares de um estacionamento, marcando-os como ocupado ou não, e recuperando informações sobre vagas ocupadas
class ParkingLot {
  parkingSlots = [];
  constructor(slots) {
    for (let k = 0; k < slots; k++) {
      this.parkingSlots.push({
        occupied: false,
        slot: k,
        carId: null,
      })
    }
  }

  // Tenta encontrar uma vaga disponível no estacionamento e marcá-la como ocupada com o ID do carro fornecido, retornando verdadeiro se a vaga foi encontrada e marcada como ocupada, caso contrário, retorna falso
  parkId(carId) {
    let parked = false;

    for (const element of this.parkingSlots) {
      if (!element.occupied) {
        element.occupied = true;
        element.carId = carId;
        parked = true;
      }
    }
    return parked;
  }

  // Retorna uma lista com o ID do carro em cada vaga ocupada. Se a vaga estiver vazia, é retornado nulo
  getSlots() {
    return this.parkingSlots.map(i => {
      if (i.card) {
        return i.carId;
      }
      return null;
    })
  }

  // Tenta remover o carro com o ID especificado, marcando a vaga como disponível. Retorna verdadeiro se o carro foi removido com sucesso, caso contrário, retorna falso
  remove(carId) {
    let freed = false;
    for (const element of this.parkingSlots) {
      if (element.occupied && element.carId === carId) {
        element.occupied = false;
        element.carId = null;
        freed = true;
      }
    }
    return freed;
  }
}