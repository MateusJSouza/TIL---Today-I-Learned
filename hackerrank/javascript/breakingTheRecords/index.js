/* 
  Esta função recebe um array scores que contém uma lista de pontuações de um
  determinado jogo ou competição. A função então percorre o array para
  verificar quantas vezes o recorde máximo e o recorde mínimo são quebrados.
*/

function breakingRecords(scores) {
  let best = 0;
  let worst = 0;
  let bestScore = scores[0];
  let worstScore = scores[0];

  for(let i = 1; i < scores.length; i++) {
      if (scores[i] > bestScore) {
          bestScore = scores[i];
          best++;
          continue;
      }
      if (scores[i] < worstScore) {
          worstScore = scores[i]
          worst++;
      }
  }
  return [best, worst];
}