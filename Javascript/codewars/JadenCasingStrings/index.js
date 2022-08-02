/*
  Jaden Smith, filho de Will Smith, é a estrela de filmes como Karate Kid
  (2010) e Depois da Terra (2013). Jaden também é conhecido por algumas de
  suas filosofias que ele entrega via Twitter. Ao escrever no Twitter, ele
  é conhecido por quase sempre capitalizar cada palavra. Para simplificar,
  você terá que capitalizar cada palavra, confira como as contrações são
  esperadas no exemplo abaixo.

  Sua tarefa é converter strings para como elas seriam escritas por Jaden
  Smith. As strings são citações reais de Jaden Smith, mas não são maiúsculas
  da mesma forma que ele as digitou originalmente.

  Exemplo:

  Not Jaden-Cased: "Como os espelhos podem ser reais se nossos olhos não são
  reais" Jaden-Cased: "Como os espelhos podem ser reais se nossos olhos não
  são reais" Link para a antiga conta do Twitter de Jaden @officialjaden
  via archive.org
*/

String.prototype.toJadenCase = function () {
  return this
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ')
}

/*
  Explicação: split separa com um espaço
  map mapeia as palavras, para que somente a primeira do início da frase
  seja a maiúscula, o slice retorna uma cópia do início do array se, e por fim,
  o join que junta todos os elementos do array em uma string e retorna ela
*/