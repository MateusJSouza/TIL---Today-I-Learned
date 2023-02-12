#include <stdio.h>
#include <stdlib.h>

int main(void) {
  char *str = (char *)malloc(sizeof(char));
  char c;
  int i = 0;

  while((c = getchar()) != '\n') {
    str[i++] = c;
    str = (char *)realloc(str, sizeof(char) * (i + 1));
  }
  
  str[i] = '\0';

  printf("%s, %lu\n", str, sizeof(str));
  free(str);

  return EXIT_SUCCESS;
}