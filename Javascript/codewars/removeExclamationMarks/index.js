/*
  Função de escrita RemoveExclamationMarks que remove todos os pontos de
  exclamação de uma determinada string.
*/

/* Replace para substituir todo lugar que tiver a exclamação por uma string
vazia */
removeExclamationMarks = s => s.replace(/\!/g, '')