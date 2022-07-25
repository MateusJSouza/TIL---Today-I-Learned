/*
  Nathan adora andar de bicicleta.

  Como Nathan sabe que é importante se manter hidratado,
  ele bebe 0,5 litros de água por hora de ciclismo.

  Você recebe o tempo em horas e precisa retornar o
  número de litros que Nathan beberá, arredondado para o menor valor.
*/

function litres(time){
  return Math.floor(time * 0.5);
}

// Math.floor() -> retorna o menor número inteiro dentre o número "x".