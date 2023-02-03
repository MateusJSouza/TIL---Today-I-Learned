#include <iostream>

namespace first {
  int x = 1;
}

namespace second {
  int x = 2;
}

int main() {
  using std::cout;
  using std::string;
  /*
    Namespaces -> provê uma solução para prevenir conflitos em grandes projetos.
    Cada entidade precisa de um nome único. Um namespace permite entidades com
    nomes idênticos, desde que os namespaces sejam diferentes.
  */

  // Com namespace, duas entidades podem compartilhar o mesmo nome

  // Referindo a versão do x do namespace first
  string name = "Mateus";

  cout << name << '\n';

  return 0;
}