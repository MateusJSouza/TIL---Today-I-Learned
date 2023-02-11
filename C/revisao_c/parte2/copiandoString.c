#include <string.h>
#include <stdio.h>

int main(void) {
  char source[] = "Hello World";
  char dest[100];

  strcpy(dest, source);

  printf("A string original é '%s'\n", source);
  printf("A string copiada é '%s'\n", dest);

  return 0;
}