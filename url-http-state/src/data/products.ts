export async function getProducts() {
  // delay de 1s
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    { id: 1, name: 'Produto 1', price: 10 },
    { id: 2, name: 'Produto 2', price: 20 },
    { id: 3, name: 'Produto 3', price: 30 },
    { id: 4, name: 'Produto 4', price: 40 },
    { id: 5, name: 'Produto 5', price: 50 },
    { id: 6, name: 'Produto 6', price: 60 },
    { id: 7, name: 'Produto 7', price: 70 },
    { id: 8, name: 'Produto 8', price: 80 },
    { id: 9, name: 'Produto 9', price: 90 },
    { id: 10, name: 'Produto 10', price: 100 },
  ]
}

interface CreateProduct {
  name: string
  price: number
}

export async function createProduct(_: CreateProduct) {
  // delay de 1s
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
