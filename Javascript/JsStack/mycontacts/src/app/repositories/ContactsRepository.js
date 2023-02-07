const { v4 } = require('uuid');

const db = require('../../database');

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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts');
    return rows;
  }

  // Buscando um contato pelo ID
  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  async create({
    name, email, phone, category_id
  }) {

    // Sempre que precisarmos usar um valor dinâmico, nós colocamos o dólar e um número sequencial
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
    // E depois fornecemos os valores que serão preenchidos nos dólares sequenciais
    // RETURNING * -> retorna todas as colunas da tabela
  }

  update(id, {
    name, email, phone, category_id
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id
      };

      // Mapeia os contatos e verifica se o ID do contato corresponde ao ID que estamos tentando alterar, se sim, atualiza os dados do contato com as informações fornecidas no objeto, caso contrário, mantém os dados do contato sem atualizações
      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      // Finalmente a promessa é resolvida com o objeto de contato atualizado
      resolve(updatedContact);
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
