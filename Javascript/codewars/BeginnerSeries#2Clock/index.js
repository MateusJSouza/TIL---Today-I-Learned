/*
  O relógio mostra h horas, m minutos e s segundos após a meia-noite.

  Sua tarefa é escrever uma função que retorne a hora desde a meia-noite em milissegundos.

  Exemplo:
  h = 0
  m = 1
  s = 1

  resultado = 61000
  Restrições de entrada:

  0 <= h <= 23
  0 <= m <= 59
  0 <= s <= 59
*/

function past(h, m, s){
  return h * 3600000 + m * 60000 + s * 1000;
}

/*
  - Multiplicando as horas por 1 hora em milissegundos
  - Minutos por 1 minuto em milissegundos
  - Segundos por 1 segundo em milissegundos

  E no fim é mostrado o resultado das somas

  1 hora em milissegundos = 3600000
  1 minuto em milissegundos = 60000
  1 segundo em milissegundos = 1000
*/