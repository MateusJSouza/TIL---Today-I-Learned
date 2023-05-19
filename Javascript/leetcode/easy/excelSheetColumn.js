const convertToTitle = (columnNumber) => {
  let result = '';

  while (columnNumber > 0) {
    const res = (columnNumber - 1) % 26;
    result = String.fromCharCode(65 + res) + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return result;
};