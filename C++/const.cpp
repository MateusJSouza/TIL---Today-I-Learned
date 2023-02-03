#include <iostream>

int main() {
  // A palavra-chave constante especifica que o valor da variável é constante, ou seja, nunca mudará
  // Avisa ao compilador para prevenir que nada altere seu valor
  // (read-only)

  // Variáveis (const) que não podem ter seus valores modificados
  const double PI = 3.14159;
  const int LIGHT_SPEED = 299792458;
  const int WIDTH = 1920;
  const int HEIGHT = 1080;


  double radius = 10;
  double circumference = 2 * PI * radius; // calculando a circunferência de um círculo

  std::cout << circumference << "cm";

  return 0;
}