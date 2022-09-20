decodeMorse = function(morseCode){
  return morseCode
    .split('   ') // pegando o código da palavra, 3 espaços de distância
    .map(word => word
      .split(' ') // pegando o código do caracter, 2 espaços de distância
      .map(character => MORSE_CODE[character]) // decodificando o caracter
      .join('') // juntando os caracteres à palavra
    )
    .join(' ') // adicionando espaços entre as palavras
    .trim()
}

decodeMorse('.... . -.--   .--- ..- -.. .')