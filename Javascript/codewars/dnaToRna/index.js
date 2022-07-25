/*
  Ácido desoxirribonucleico, o DNA é a principal molécula de armazenamento de
  informações em sistemas biológicos. É composto por quatro bases de ácido
  nucleico Guanina ('G'), Citosina ('C'), Adenina ('A') e Timina ('T').

  O ácido ribonucleico, RNA, é a principal molécula mensageira nas células.
  O RNA difere ligeiramente do DNA em sua estrutura química e não contém timina.
  No RNA a timina é substituída por outro ácido nucléico Uracila ('U').

  Crie uma função que traduza uma determinada sequência de DNA em RNA.

  Por exemplo:
  "GCAT" => "GCAU"

  A string de entrada pode ser de tamanho arbitrário - em particular,
  pode estar vazia. Toda entrada é garantida como válida, ou seja, cada string
  de entrada consistirá apenas em 'G', 'C', 'A' e/ou 'T'.
*/

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g, "U");
}

// replace() -> substitui a palavra T por U, pois no RNA não contém timina (T)
// /T/g -> é uma expressão regular (Regex) que substituirá globalmente cada instância T e a substituirá por U