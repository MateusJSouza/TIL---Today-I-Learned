#include <stdio.h>

// Exemplo de como percorrer um ponteiro
int main(void) {
  int array[5] = {1, 2, 3, 4, 5};
  int *p = array;

  for (int i = 0; i< 5; i++) {
    printf("%d\n", *p);
    p++;
  }

  return 0;
}