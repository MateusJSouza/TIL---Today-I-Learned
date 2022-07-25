/*
  Você receberá uma matriz a e um valor x. Tudo o que você precisa fazer é
  verificar se a matriz fornecida contém o valor.

  O array pode conter números ou strings. X pode ser qualquer um.

  Retorna true se a matriz contiver o valor, false se não.
*/

function check(a, x) {
  // x = 66;
  // a = [66, 107]
  return a.includes(x);
}

// includes() -> determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false.