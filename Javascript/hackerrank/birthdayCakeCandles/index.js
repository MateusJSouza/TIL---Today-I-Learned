function birthdayCakeCandles(arr) {
  let max = 0;
  let candles = 0;

  for (const element of arr) {
    if (max < element) {
      max = element;
    }
  }

  for (const element of arr) {
    if (max == element) {
      candles++;
    }
  }

  return candles;
}