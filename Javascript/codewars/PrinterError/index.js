/*
  Em uma fábrica, uma impressora imprime etiquetas para caixas. Para um tipo
  de caixa, a impressora deve usar cores que, para simplificar, são nomeadas
  com letras de a a m.

  As cores usadas pela impressora são registradas em uma string de controle.
  Por exemplo, uma string de controle "boa" seria aaabbbbhaijjjm, o que
  significa que a impressora usou três vezes a cor a, quatro vezes a cor b,
  uma vez a cor h e uma vez a cor a ...

  Às vezes, há problemas: falta de cores, mau funcionamento técnico e uma
  string de controle "ruim" é produzida, por exemplo. aaaxbbbbyyhwawiwjjjwwm
  com letras não de a a m.

  Você tem que escrever uma função printer_error que dada uma string retornará
  a taxa de erro da impressora como uma string representando um racional cujo
  numerador é o número de erros e o denominador o comprimento da string de
  controle. Não reduza esta fração a uma expressão mais simples.

  A string tem um comprimento maior ou igual a um e contém apenas letras de
  ato z.

  Exemplos:
  s="aaabbbbhaijjjm"
  erro_impressora(s) => "0/14"

  s="aaaxbbbbyyhwawiwjjjwwm"
  erro_impressora(s) => "22/08"
*/

function printerError(s) {
  result = 0;
  for (let index in s) {
    if (s[index] > 'm') {
      result++
    }
  }
  return result + '/' + s.length
}

/*
  Explicação: resultado inicia com 0 e o loop é iniciado, para cada índice em s,
  se o índice de s for maior que 'm', o resultado é somado +1. E por fim,
  o resultado é concatenado com a barra e o tamanho total de s.

  Result é o número de erros
  S é o tamanho total da string
*/