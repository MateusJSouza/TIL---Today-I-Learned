const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1001, quantity: 5 }
];

// find
const find = array.find((product) => {
  return product.name === 'Magic Mouse';
});

const findTwo = array.find((product) => {
  return product.price > 1000;
})
/*
  console.log({ findTwo })
  { name: 'iPhone', price: 5000, quantity: 2 }
*/

/*
  console.log({ find })
  Resultado: { name: 'Magic Mouse', price: 1001, quantity: 5 }
*/

// findIndex
const findInd = array.findIndex((product) => product.name === 'Magic Mouse');
// console.log({ findInd }) // Resultado: 2, porque é a primeira posição do array

// .some
const some = array.some((product) => product.price < 1000);
// console.log({ some }) Resultado: false

// .every
const every = array.every((product) => product.price > 1000);
console.log({ every })
// true, pois todos os preços do meu carrinho são maior que mil
