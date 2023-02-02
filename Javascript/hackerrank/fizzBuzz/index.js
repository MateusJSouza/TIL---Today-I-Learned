/* 
  Este código itera sobre os números de 1 a n, dependendo do resultado da operação de módulo, imprime saídas diferentes
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
      // Se o número for divisível por 3 e por 5, ele imprime FizzBuzz
      if ((i % 3) === 0 && (i % 5) === 0) {
          console.log("FizzBuzz");

          // Se o número for divisível apenas por 3, ele imprime Fizz
      } else if ((i % 3) === 0 && (i % 5) !== 0) {
          console.log("Fizz");
          // Se o número for divisível apenas por 5, ele imprime Buzz
      } else if ((i % 3) !== 0 && (i % 5) === 0) {
          console.log("Buzz");
          // Caso contrário, ele imprime apenas o número
      } else console.log(i);
  }
}