#include <stdio.h>

// Descobrindo qual é a arquitetura de armazenamento (little endian ou big endian) do seu computador
int main(void) {
  unsigned int x = 0x12345678;
  unsigned char *p = (unsigned char *) &x;

  if (*p == 0x78) {
    printf("Little endian\n");
  } else 
  printf("Big endian\n");

  return 0;
}