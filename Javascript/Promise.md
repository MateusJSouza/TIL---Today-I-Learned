*Promise*: algo que irá acontecer no futuro!

Uma promessa poderá ser:

**Pending** -> Promessa pendente (aguardando)

**Fullfiled** -> Promessa concluída com sucesso

**Rejected** -> Promessa rejeitada, houve um erro

**Settled** -> Promessa concluída, seja com sucesso ou com erro

  

*Promise* é um objeto *Javascript* com a promessa de que algo será realizado

- É usado para operações **assíncronas**

- Carregar um arquivo (JSON, png, jpg, etc.)

- Leitura de dados de uma API
```
<!-- Exemplo de Promise - Cenário Uber -->
let aceitar = false

console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('pedido aceito!')
  }

  return reject('pedido negado!')
})

console.log('aguardando')

promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('finalizada'))
```
**Saída**:

    pedir uber
    aguardando
    pedido negado!
    finalizada
