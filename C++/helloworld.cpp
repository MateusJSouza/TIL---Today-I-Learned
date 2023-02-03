#include <iostream>

int main() {

  // integer (qualquer número)
  int age = 22;
  int year = 2023;

  // double (número que inclui um decimal)
  double price = 10.99;
  double gpa = 2.5;
  double temperature = 25.1;

  // single character (armazena apenas um caractere)
  char grade = 'A';
  char initial = 'B';
  char dollarSign = '$';

  // boolean (true or false)
  bool isStudent = true;
  bool isPower = true;
  bool isForSale = true;

  // strings (objetos que representam uma sequência de textos)
  std::string firstName = "Mateus";
  std::string lastName = "Souza";
  std::string day = "Friday";
  std::string food = "Pizza";
  std::string address = "123 Fake St.";

  std::cout << "Hello " << firstName << '\n';
  std::cout << "You are " << age << " years old" << std::endl;

  return 0;
}