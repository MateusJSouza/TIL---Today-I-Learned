function findPhoneNumber(phonebook, name) {
  for (let i = 0; i < phonebook.length; i++) {
    if (agenda[i].name === name) {
      return agenda[i].number;
    }
  }
  return 'Número não encontrado'
}