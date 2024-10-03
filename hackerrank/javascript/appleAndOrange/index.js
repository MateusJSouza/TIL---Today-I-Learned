/* 
  s - t -> representa a área em que a casa de Sam fica localizada 
  s -> representa a parte da direita
  t -> representa a parte da esquerda
  a -> representa a área da macieira
  b -> representa a área de laranjeira
  apples -> representa o número de maçãs
  oranges -> representa o número de laranjas
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {

  // Mapeia o array de maçãs somando o número de maçãs com a que representa a área da macieira, logo em seguida, é feito a filtragem para saber se o número é maior ou igual que a parte da direita e menor ou igual que a parte da esquerda, sendo assim contabilizando as maçãs que caíram na casa de Sam
  const applesRes = apples.map((num) => num + a).filter((num) => num >= s && num <= t);

  // O mesmo é feito aqui, só que no caso, contabilizando as laranjas, onde somamos o número de laranjas que representa a área de laranjeira, faz o filtro e verifica se é maior ou igual a parte da direita e menor ou igual a parte da esquerda.
  const orangesRes = oranges.map((num) => num + b).filter((num) => num >= s && num <= t);

  /*
    Exemplo de entrada:
      7 11
      5 15
      3 2
      -2 2 1
      5 -6

    Exemplo de saída:
      1
      1
  */

  console.log(applesRes);
  console.log(orangesRes);
}