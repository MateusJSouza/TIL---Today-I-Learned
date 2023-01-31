function timeConversion(time) {
  // A variável hours é inicializada com o resultado da conversão para inteiro das duas primeiras posições da string time.
  let hours = parseInt(time.substring(0, 2));

  // A variável isAM é inicializada com o resultado da comparação entre a 9ª posição da string time e a string "AM".
  let isAm = time.substring(8) === "AM";
  
  if (!isAm && hours !== 12) {
      hours += 12;
  } else if (isAm && hours === 12) {
      hours = 0;
  }
  

  /* 
    time.substring(0, 2) extrai as duas primeiras posições da string time (que representam as horas) e é convertido para inteiro com parseInt.
    time.substring(3, 5) extrai as posições 3 a 5 da string time (que representam os minutos).
    time.substring(6, 8) extrai as posições 6 a 8 da string time (que representam os segundos).
  */
  return `${("0" + hours).slice(-2)}:${time.substring(3, 5)}:${time.substring(6, 8)}`
}