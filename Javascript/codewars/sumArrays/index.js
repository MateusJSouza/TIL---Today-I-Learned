/*
  Escreva uma função que receba uma matriz de números e retorne a soma dos
  números. Os números podem ser negativos ou não inteiros. Se a matriz não
  contiver nenhum número, você deverá retornar 0.

  Exemplos
  Entrada: [1, 5,2, 4, 0, -1]
  Saída: 9,2

  Entrada: []
  Saída: 0

  Entrada: [-2.398]
  Saída: -2,398

  Suposições:
    Você pode assumir que você recebe apenas números.
    Você não pode assumir o tamanho da matriz.
    Você pode assumir que obtém uma matriz e, se a matriz estiver vazia,
    retorne 0.

  O que estamos testando
    Estamos testando loops básicos e operações matemáticas. Isto é para
    iniciantes que estão apenas aprendendo loops e operações matemáticas.
    Usuários avançados podem achar isso extremamente fácil e podem facilmente
    escrever isso em uma linha.
*/

sum = numbers => numbers.reduce((prev, curr) => prev + curr, 0)

/* 
  reduce() -> pega o valor anterior e o atual para depois somar,
  e depois da vírgula o valor inicial que é 0
*/ 