#include <stdio.h>

// Calculando potência com uma base e um expoente
int pot(int base, int exp) {
  int res = 1;
  int i;

  for (i = 0; i < exp; i++) {
    res *= base;
  }

  return res;
}

// Cálculo de fatorial de um número fornecido pelo usuário
int fat(int n) {
  int i, res = 1;

  if (n == 0)
    return 1;

  for (i = 1; i <= n; i++) {
    res *= i;
  }

  return res;
}

// Cálculo da série
float calcular_serie(int x, int n) {
  float res = x;
  int i;

  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      res += pot(x, 2*i) / (float)fat(2*i + 1);
    } else {
      res -= pot(x, 2*i) / (float)fat(2*i + 1);
    }
  }
  
  return res;
}

int main(void) {
  int x, n;
  scanf("%d %d", &x, &n);
  printf("%f\n", calcular_serie(x, n));

  return 0;
}