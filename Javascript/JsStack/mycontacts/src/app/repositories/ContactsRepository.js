const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '123123213',
    category_id: uuid(),
  }
]

class ContactsRepository {
  // Listar todos os repositórios
  findAll() {
    return new Promise ((resolve) => {
      resolve(contacts)
    });
  }
}

module.exports = new ContactsRepository;
