const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '123123213',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'José',
    email: 'jose@email.com',
    phone: '123adsdads123213',
    category_id: v4(),
  }
]

class ContactsRepository {
  // Listar todos os repositórios
  findAll() {
    return Promise.resolve(contacts);
  }

  findById(id) {
    return Promise.resolve(contacts.find(contact => contact.id === id))
  }

  findByEmail(email) {
    return Promise.resolve(contacts.find(contact => contact.email === email))
  }

  create({
    name, email, phone, category_id
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id : v4(),
        name,
        email,
        phone,
        category_id
      };

      contacts.push(newContact);
      resolve(newContact);
    })
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter(contact => contact.id !== id)
      resolve();
    })
  }
}

module.exports = new ContactsRepository;
