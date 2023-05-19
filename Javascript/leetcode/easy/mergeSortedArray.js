const merge = (n1, m, n2, n) => {
  for (let i = n2.length; i > 0; i--) {
      n1.unshift(n2[0]);
      n1.pop();
      n2.shift();
  }
  n1.sort((a, b) => a - b);
};