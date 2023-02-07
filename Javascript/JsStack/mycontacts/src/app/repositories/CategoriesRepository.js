const db = require('../../database/');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');

    return rows;
  }

  async create({ name }) {
    // Inserindo o nome das colunas para preencher os valores e no fim retornando todas as colunas
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name])

    return row;
  }
}

module.exports = new CategoriesRepository;
