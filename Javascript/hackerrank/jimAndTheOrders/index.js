function jimOrders(orders) {
  // Criando um objeto para cada pedido, mapeando o pedido e o tempo de entrega
  const ordersObj = orders.map((order, i) => ({
      orderNumber: i + 1, // índice da matriz + 1
      serveTime: order[0] + order[1] // tempo de entrega: soma do tempo de preparo e entrega
  }));
  return ordersObj
  // ordenando em ordem crescente, subtraindo o tempo de entrega "serveTime" do primeiro objeto com o do segundo
  .sort((o1, o2) => o1.serveTime - o2.serveTime)
      .map((order) => order.orderNumber)
}
