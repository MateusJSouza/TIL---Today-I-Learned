function findOwnerOfPhoneNumber(phonebook, number) {
  for (let i = 0; i < phonebook.length; i++) {
    if (agenda[i].number === number) {
      return agenda[i].name;
    }
  }
  return 'Dono não encontrado'
}