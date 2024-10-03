function gradingStudents(grades) {
  let multipleToRoundTo = 5; // múltiplo mais próximo para arredondar as notas
  let numberToRoundAt = 2; // quantidade que a nota precisa exceder para ser arredondada

  // Percorrendo cada nota na lista "grades"
  for (let i = 0; i < grades.length; i++) {
    // Se o índice atual for maior que 38 e se o resto da divisão da nota atual por multipleToRoundTo é maior que numberToRoundAt
    if (grades[i] >= 38 && grades[i] % multipleToRoundTo > numberToRoundAt) {
      // Caso for verdadeiro, a nota é arredondada para o próximo múltiplo de multipleToRoundTo, adicionando multipleToRoundTo menos o resto da divisão da nota atual por multipleToRoundTo à nota atual
      grades[i] = grades[i] + (multipleToRoundTo - (grades[i] % multipleToRoundTo));
    }
  } // O loop continua iterando até todas que todas as notas tenham sido verificadas

  // Retorna a lista de notas arredondadas
  return grades;
}