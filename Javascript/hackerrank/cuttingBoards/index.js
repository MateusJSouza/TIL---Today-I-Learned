function boardCutting(cost_y, cost_x) {

  /*
    Criação dos arrays usando o método map. Cada elemento do array é um arary 
    de 3 elementos, representando o custo, se é uma linha "1" ou coluna "0", ou
    se é uma coluna "1" ou linha "0".
  */
  const cost_y_row_col = cost_y.map(i => [i, 0, 1]);
  const cost_x_row_col = cost_x.map(i => [i, 1, 0]);

  // Concatenação dos arrays cost_y_row_col e cost_x_row_col em um único array
  let cost_row_col = cost_y_row_col.concat(cost_x_row_col);
  cost_row_col = cost_row_col.sort((a, b) => b[0] - a[0]);
  
  // Inicialização das variáveis
  let rows = 1;
  let cols = 1;
  let min_cost = 0;
  
  /* 
    Loop através dos elementos cost_row_col usando o operador de desestruturação
    de arrays, iteramos sobre cada elemento do cost_row_col. Para cada elemento 
    realizaremos tarefas diferentes:
  */
  for (const [cost, is_row, is_col] of cost_row_col) {
      // Adicionamos a "min_cost" o resultado da multiplicação do custo com o número de linhas "rows" se for uma linha "is_row" ou com número de colunas "cols" se for uma coluna "is_col"
      min_cost += (cols * is_row + rows * is_col) * cost;
      
      // Atualização de "rows" e "cols". Adicionamos "1" a "rows" se for uma linha "is_row", ou adicionamos "1" a "cols" se for uma coluna "is_col"
      rows += is_row;
      cols += is_col;
  }
  
  // Retorno do valor de "min_cost" módulo "10**9 + 7"
  return min_cost % (10**9 + 7);
}